#!/bin/bash

# author: Parth
# version: 1.0.0

# requires path of superset home / installation directory
# assume docker-dektop installed

use="Usage: docker-control [-c 'path-to-superset'] [-r] [-v]\n\t-c 'path-to-superset' : clean all superset images, volumes and remove the container\n\t-r : get superset run requirements status";

if [ $# -le 0 ]
then
    echo -e $use;
    exit 1;
fi

verbose=false;
check_req=false;
clean=false;
dir="`pwd`";
shf=0;

while getopts vc:r flag
do
    case "${flag}" in
        v) verbose=true;
           shf=$((shf + 1));
           ;;
        c) SUPERSET_HOME=${OPTARG};
           clean=true;
           shf=$((shf + 2));
           ;;
        r) check_req=true;
           shf=$((shf + 1));
           ;;
    esac
done

shift $shf;

if $clean && ([[ -z $SUPERSET_HOME ]] || [[ ! -d $SUPERSET_HOME ]] || [[ ! -d "$SUPERSET_HOME/superset-frontend/plugins/" ]] || [[ ! -f "$SUPERSET_HOME/superset-frontend/src/visualizations/presets/MainPreset.js" ]])
then
    echo "Superset home directory not found / specified. Exiting..";
    exit 1;
fi

if $verbose
then
    echo "Starting Docker Desktop (will pass through if already on)..";
fi

systemctl --user start docker-desktop

if $clean
then
    if $verbose
    then
        echo "Removing superset containers (will stop them if running)..";
    fi
    cd $SUPERSET_HOME;
    docker compose down;
    cd $dir;
    if $verbose
    then
        echo "Removed superset containers.";
    fi
    if $verbose
    then
        echo "Removing superset images..";
    fi
    docker image prune -f;
    docker image rm $(docker image ls --format '{{.Repository}} {{.ID}}' | grep "node\|redis\|superset\|nginx\|postgres" | awk '{split($0, array); print array[2]}');
    if $verbose
    then
        echo "Removed superset images.";
    fi
    if $verbose
    then
        echo "Removing superset volumes..";
    fi
    docker volume prune -f;
    docker volume rm $(echo -e 'superset_db_home\nsuperset_redis\nsuperset_superset_home');
    if $verbose
    then
        echo "Removed superset volumes.";
    fi
fi

if $check_req
then
    if $verbose
    then
        echo "Checking superset run requirement on Docker..";
    fi
    mem=`sed -nE 's/^ *"memoryMiB" *: *([0-9]*) *,/\1/p' ~/.docker/desktop/settings.json`;
    swp=`sed -nE 's/^ *"swapMiB" *: *([0-9]*) *,/\1/p' ~/.docker/desktop/settings.json`;
    cpu=`sed -nE 's/^ *"cpus" *: *([0-9]*) *,/\1/p' ~/.docker/desktop/settings.json`;
    dsk=`sed -nE 's/^ *"diskSizeMiB" *: *([0-9]*) *,/\1/p' ~/.docker/desktop/settings.json`;
    y_m="Changes Required.";
    y_s="Changes Required.";
    y_c="Changes Required.";
    y_d="Changes Required.";
    if [ $mem -ge 4096 ]
    then
        y_m="No "$y_m;
    fi
    if [ $swp -ge 4096 ]
    then
        y_s="No "$y_s;
    fi
    if [ $cpu -ge 4 ]
    then
        y_c="No "$y_c;
    fi
    if [ $dsk -ge 10240 ]
    then
        y_d="No "$y_d;
    fi
    echo "Found memory allocation: $mem MiB, Minimum Requirement: 4096 MiB, $y_m";
    echo "Found swap allocation: $swp MiB, Minimum Requirement: 4096 MiB, $y_s";
    echo "Found CPU allocation: $cpu, Minimum Requirement: 4, $y_c";
    echo "Found virtual disk allocation: $dsk MiB, Minimum Requirement: 10240 MiB, $y_d";
fi

exit 0;
