#!/bin/bash

# author: Parth
# version: 1.0.0

# requires path of superset home / installation directory
# assume 'npm' is setup, MainPreset.js non empty and 'mostly' different names

use="Usage: link-plugin -p 'path-to-superset' [-v] plugin name";

if [ $# -le 1 ]
then
    echo $use;
    exit 1;
fi

verbose=false;
dir="`pwd`";
shf=0;

while getopts vp: flag
do
    case "${flag}" in
        v) verbose=true;
           shf=$((shf + 1));
           ;;
        p) SUPERSET_HOME=${OPTARG};
           shf=$((shf + 2));
           ;;
    esac
done

shift $shf;

if [[ -z $SUPERSET_HOME ]] || [[ ! -d $SUPERSET_HOME ]] || [[ ! -d "$SUPERSET_HOME/superset-frontend/plugins/" ]] || [[ ! -f "$SUPERSET_HOME/superset-frontend/src/visualizations/presets/MainPreset.js" ]]
then
    echo "Superset home directory not found / specified. Exiting..";
    exit 1;
fi

name='';

for word in "$@" 
do
    name="$name-$word";
done

name="${name:1}";

src="/tmp/$name";

if [ $name == '' ] || [ ! -d $src ]
then
    echo "Plugin not found / specified. Exiting..";
    exit 1;
fi

dest="$SUPERSET_HOME/superset-frontend/plugins/";

if $verbose
then
    echo "Building plugin..";
fi

cd $src;

npm ci;

return_code=$?;

if [ $return_code -ne 0 ]
then
    echo "Plugin could not be built in step 'npm ci'. Exiting..";
    exit 1;
fi

npm run build;

return_code=$?;

if [ $return_code -ne 0 ]
then
    echo "Plugin could not be built in step 'npm run build'. Exiting..";
    exit 1;
elif $verbose
then
    echo "Plugin built successfully !";
    echo "Copying plugin to superset folder..";
fi

cp -r $src $dest;

if $verbose
then
    echo "Linking in MainPreset.js ...";
fi

capitalized_name='';

for word in "$@" 
do
    capitalized_name="$capitalized_name$(tr '[:lower:]' '[:upper:]' <<< ${word:0:1})${word:1}";
done

file_path="$SUPERSET_HOME/superset-frontend/src/visualizations/presets/MainPreset.js";
import_statement="import { $capitalized_name } from './../../../plugins/$name';";
init_statement="\tnew $capitalized_name().configure({ key: 'ext-$name' }),";

sed -i "/plugins: \[/a \ $init_statement" $file_path;

return_code=$?;

if [ $return_code -ne 0 ]
then
    echo "Plugin could not be linked in MainPreset.js. Exiting..";
    exit 1;
fi

sed -i "/export default class MainPreset extends Preset/i$import_statement" $file_path;

return_code=$?;

if [ $return_code -ne 0 ]
then
    echo "Plugin could not be linked in MainPreset.js. Exiting..";
    exit 1;
elif $verbose
then
    echo "Linking plugin to superset completed successfully!";
fi

exit 0;
