# Plugin Setup and Build scripts

Parth made the decision to automate the plugin creation since we all spent a very significant amount of time getting Superset to run on Docker for the first time, and we would not want our client to face such a problem. We achieved our goal to make the process of running and using our application as seamless as possible by making generalized, extendable and user safe & friendly automating Linux Bash scripts, keeping track of common problems when setting up Apache in development mode.

## Scripts

Apache Superset is a large open-source project. Building it on Docker in development mode itself will have issues unless we use the right versions of local libraries. Thus, we spent a significant amount of time understanding how plugin development works and how we can automate redundant steps to make more of our time towards designing the plugin code itself. We demonstrate this by our works below.

### create-plugin.sh

As the name suggests, this script helps automate the process of cloning the skeleton code of a plugin to `/tmp/<plugin name>`, making the right directories and calling `yo` to clone superset plugin files, following their new convention for plugin development. It makes a simple yet redundant task now a single command. Refer to the script for usage.

### link-plugin.sh

A more complicated script, which helps automate the process of building a plugin in `/tmp/<plugin name>` assuming it's completed code. It verifies that the Superset home directory is proper, and uses `npm` to build plugin, finally copying it to the standard plugins folder and linking it to Superset by manual string injection to `MainPreset.js` via `sed` stream editor. It makes a multi-step process to build and link into a simple command. Refer to the script for usage.

### docker-control.sh

This script helps automate the process of verifying Docker requirements and helps "clean start" Superset. It has the ability to extract information from docker settings and compare them to our results of minimum requirements, and also the ability to remove Superset from Docker by deleting it's container, images and volumes, which we also observed from our experiences handling Superset. It is a useful command to refresh Superset installations with, and ensure minimum system requirements. Refer to the script for usage.

Plugin creation using these scripts is demonstrated over [here](https://youtu.be/-FY_9Su2CcA).

Stable Environment Requirements:

```
$ node --version
v16.20.2
$ npm --version
8.19.4
```

### super-docker.sh

This script automates the entire process of running Apache Superset on Docker in Linux. It downloads stable node and npm versions, and then links them in the system before running superset. The stable version is completely flexible and can be changed from inside the script. Infact, it can be used to run superset in different versions of node and npm by changing the same line before running (possible via `sd` command). It is a helpful script to completely automate running superset and quickly getting into development.

## Helper Scripts

In addition to helping with the set-ups and building plug-ins, we also created a helper script that would aid the user for writing datasets. This is because our Mapbox plug-in requires an `ISO-code` attribute to differentiate between the states/provinces. The helper script is described below:

### geojson_file_parser.py

This is a python script to help extract information from the GeoJSON files and write the extracted information into a data file (mainly in `.csv` format). To use the script, you must put the script into the SAME directory as your GeoJSON files. In other words, the python script and the GeoJSON files should be in the same folder.

To use the script, make sure that you have Python installed on your computer. If you don't have it, you can download it [HERE](https://www.python.org/downloads/).

Once you checked that you have python installed, navigate to the folder that contains both the GeoJSON files and the python script.

For example, if I am on Windows, and I have the file in a folder named `example` on my Desktop, I would open up Windows Powershell and type the following command:

```
cd Users/your_username_here/Desktop/example
```

Next, type in the following command:

```
python3 geojson_file_parser.py
```

The script will prompt you to enter a country that you want to extract information from. Your inputs also must all be in lower case, but white spaces are allowed (i.e. costa rica).

After you put in a country name, the script will outout "Data has been successfully written to file" on success, and there will be a new `.csv` file with a suffix of `_info.csv` in your folder (i.e. `costa rica_info.csv`).

If the script does not succeed, it returns an `ExtractionError`, which means that either the country's corresponding GeoJSON file doesn't exist, or the GeoJSON file does not have a `FeatureCollection` attribute. 
