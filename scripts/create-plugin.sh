#!/bin/bash

# author: Parth
# version: 1.0.0

# assumes 'yo' is setup

if [ $# -le 0 ]
then
    echo "Usage: create-plugin [-v] plugin name";
    exit 1;
fi

verbose=false;
dir="`pwd`";

# keeping flag construct open to development.
while getopts v flag
do
    case "${flag}" in
        v) verbose=true;
           shift 1;;
    esac
done

name='';

for word in "$@" 
do
    name="$name-$word";
done

name="${name:1}";

if [ $name == '' ]
then
    echo "Plugin name not specified. Exiting..";
    exit 1;
fi

dest="/tmp/$name";

if [ -d $dest ]
then
    echo "Folder $dest already exists! Exiting..";
    exit 1;
fi

if $verbose
then
    echo "Creating directory: $dest";
fi

mkdir $dest;

cd $dest;

if $verbose
then
    echo "Transferring control to 'yo'..";
fi

yo @superset-ui/superset;

return_code=$?;

if $verbose
then
    echo "Control returned by 'yo'";
fi

cd $dir;

if $verbose && [[ $return_code -eq 0 ]]
then
    echo "Plugin skeleton created successfully at $dest !";
elif [ $return_code -ne 0 ]
then
    echo "Plugin skeleton could not be created, reverting changes..";
    rm -rf $dest;
    exit 1;
fi

exit 0;
