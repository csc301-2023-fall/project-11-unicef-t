# Plugin Setup and Build scripts

Parth made the decision to automate the plugin creation since we all spent a very significant amount of time getting Superset to run on Docker for the first time, and we would not want our client to face such a problem. We achieved our goal to make the process of running and using our application as seamless as possible by making generalized, extendable and user safe & friendly automating Linux Bash scripts, keeping track of common problems when setting up Apache in development mode.

## Scripts

Apache Superset is a large open-source project. Building it on Docker in development mode itself will have issues unless we use the right versions of local libraries. Thus, we spent a significant amount of time understanding how plugin development works and how we can automate redundant steps to make more of our time towards designing the plugin code itself. We demonstrate this by our works below.

### create-plugin.sh

As the name suggests, this script helps automate the process of cloning the skeleton code of a plugin to `/tmp/<plugin name>`, making the right diretories and calling `yo` to clone superset plugin files, following their new convention for plugin development. It makes a simple yet redundant task now a single command. Refer to the script for usage.

### link-plugin.sh

A more complicated script, which helps automate the process of building a plugin in `/tmp/<plugin name>` assuming it's completed code. It verfies that the Superset home diretory is proper, and uses `npm` to build plugin, finally copying it to the standard plugins folder and linking it to Superset by manual string injection to `MainPreset.js` via `sed` stream editor. It makes a multi-step process to build and link into a simple command. Refer to the script for usage.

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
