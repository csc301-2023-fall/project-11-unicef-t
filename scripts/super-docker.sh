#!/bin/bash

# author: Parth
# version: 1.0.0

# assumes docker-desktop has been installed and running,
# superset folder in running directory is Apache Superset if present,
# existing npm, node not linked user local

# checks if the current dir being run in has superset (and node folder if local),
# running directory can be overriden by specifying path to run in.

# ensure required versions of npm and node
# clone superset repository
# launch
#

### Current node source set to version 16.20.2, changable below.
node_src="https://nodejs.org/dist/v16.20.2/node-v16.20.2-linux-x64.tar.xz"
### It is expected that 'npm' is setup from the same node installation,
### and thus it is the user's responsibility to ensure this assumption.

use="Usage: super-docker [-v] [-p 'path to run in']";

verbose=false;
dir="`pwd`";
from="`pwd`";
node_tar="`basename $node_src`";
node_dir="`basename $node_src .tar.xz`";
node_ver="`echo $node_dir | awk -F- '{print $2}'`";
shf=0;

# undoing critical changes by trapping ctrl-C
killed() {
    if [ -f $node_tar ]
    then
        rm -f $node_tar;
    fi
}

trap 'killed' SIGINT

while getopts vhp: flag
do
    case "${flag}" in
        v) verbose=true;
           shf=$((shf + 1));
           ;;
        h) echo $use;
           exit 0;
           ;;
        p) cd ${OPTARG};
           return_code=$?;
           if [ $return_code -ne 0 ]
           then
               echo "Passed path could not be accessed. Exiting..";
               exit 1;
           fi
           dir="`pwd`";
           shf=$((shf + 2));
           ;;
    esac
done

shift $shf;

processes_info="`ps -aux`"
docker_run_info="`echo $processes_info | grep docker-desktop`";

if [ "$docker_run_info" == '' ]
then
    echo "docker-desktop is not running, please start docker-desktop and try again later!"
    exit 1;
fi

cd $dir;
node_pre="$dir/$node_dir/bin";

c_node_ver="`node -v`";
version_match=true;

if [[ $c_node_ver != $node_ver ]]
then
    version_match=false;
fi

if ! $version_match && (! [[ -d $node_dir ]])
then
    # removing any previous instances
    if [ -f $node_tar ]
    then
        rm -f $node_tar
    fi

    # setting up node if not found
    if $verbose
    then
        echo "Required node version not found, downloading..";
    fi

    wget $node_src;
    
    return_code=$?;
    if [ $return_code -ne 0 ]
    then
        echo "Required Node.js could not be downloaded. Exiting..";
        exit 1;
    fi
    
    if $verbose
    then
        echo "Required node version downloaded, unpacking..";
    fi
    
    tar -xf $node_tar;
    
    return_code=$?;
    if [ $return_code -ne 0 ]
    then
        echo "Required Node.js could not be unpacked. Reverting download and exiting..";
        rm -f $node_tar;
        exit 1;
    fi
    
    if $verbose
    then
        echo "Required node version unpacked successfully.";
    fi
    
    rm -f $node_tar;
fi

if ! $version_match
then
    # if global not setup, create soft links.
    if $verbose
    then
        echo "Linking node requires user elevation for access to /usr/local/bin.";
    fi

    su root -c "ln -sf $node_pre/node /usr/local/bin/node; ln -sf $node_pre/npm /usr/local/bin/npm;"
    
    return_code=$?;
    if [ $return_code -ne 0 ]
    then
        echo "Failed to link node & npm. Reverting download and exiting..";
        rm -rf $node_dir
        exit 1;
    fi

    if $verbose
    then
        echo "'node' and 'npm' linked Successfully";
    fi
fi

# env setup, launching superset
if $verbose
then
    echo -e "Setup environment successfully.\n'node' version: `node -v`\n'npm' version: `npm -v`";
fi

if ! [ -d "superset" ]
then
    if $verbose
    then
        echo "'superset' folder not found, cloning Apache Superset repository (this may take a while)..";
    fi
    
    git clone https://github.com/apache/superset.git
    
    return_code=$?;
    if [ $return_code -ne 0 ]
    then
        echo "Apache Superset repository could not be cloned. Exiting..";
        exit 1;
    fi
fi

if $verbose
then
    echo "Launching superset on docker.";
fi

cd "superset";

docker compose up

cd $from;

exit 0;
