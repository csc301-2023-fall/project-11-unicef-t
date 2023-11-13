# Data Plug-in/Innovative Alliance
​
## Partner Intro
Evan Wheeler, e.wheeler@unicef.org, chief technology officer at UNICEF's Global Innovation Centre.

UNICEF works in the world’s toughest places to reach the most disadvantaged children and adolescents. 
The organization is also the largest provide of vaccines, nutrition, safe water and sanitation, quality education, etc.

## Description about the project
Apache Superset is a modern, enterprise-ready business intelligence web application. It is fast, lightweight, intuitive, and loaded with options that make it easy for users of all skill sets to explore and visualize their data, from simple pie charts to highly detailed deck.gl geospatial charts.

Currently, the problem about Apache Superset is that the existing plug-in is that it has limited functionalities and scope, and uses deprecated codes. 

The application is a plug-in for Superset that helps with data navigation, manipulation, and visualization. The aim of this application is to expand on the visualizations and provide a clearer view of any demographic data, enhance the distinction between countries and their boundaries, and offer more options to analyze the data.
​
## Key Features

 * Users will get different dimensions on the map. Specifically, they will get map visualizations beyond a chloropath.
 * Users will be able to propose population estimates for a selected region, and others can review the said proposal.
​
## Instructions

To use our plug-in, you need to download and set up Apache Superset on your computer.

There are two main ways to install Apache Superset: composing on Docker Desktop, or setting it up from scratch.

[Here is a detailed instruction on installing Apache Superset using Docker Desktop.](https://superset.apache.org/docs/installation/installing-superset-using-docker-compose/) If you are using this method in Windows, you will need to install a Windows Subsystem for Linux (WSL) as Windows is not officially supported by Apache Superset. [HERE](https://learn.microsoft.com/en-us/windows/wsl/install) is a detailed instruction on how to set up WSL.

It is important to use Docker Desktop from a Linux distribution running on WSL rather than using Docker Desktop on Windows using WSL, because of changes in WSL 2 affecting Docker's compatibility. This is infact a new and recent issue, and following links discuss it: [similar problem and solution](https://github.com/microsoft/WSL/issues/9360) but docker VHD is not accesible thus solution not implementable, [recent GitHub post](https://github.com/microsoft/WSL/issues/10656), [very recent StackOverflow post](https://stackoverflow.com/questions/77277205/docker-desktop-engine-just-stops-as-soon-as-we-try-to-start-it-up-fail-dd00).

[Here is a detailed instruction on installing Apache Superset from scratch.](https://superset.apache.org/docs/installation/installing-superset-from-scratch)


Note that while initialize Apache Superset, there may be a warning that displays the following message:

```
 --------------------------------------------------------------------------------
                                     WARNING
 --------------------------------------------------------------------------------
 A Default SECRET_KEY was detected, please use superset_config.py to override it.
 Use a strong complex alphanumeric string and use a tool to help you generate 
 a sufficiently random sequence, ex: openssl rand -base64 42
 --------------------------------------------------------------------------------
 --------------------------------------------------------------------------------
```
It is fine to ignore it, but if you want to remove the warning, follow the instruction [HERE](https://superset.apache.org/docs/installation/configuring-superset/) to configure Apache Superset. It is also safe to ignore `superset_node` warnings around the time the subprocess finishes building the plugins.

Since Apache Superset is extremely tedious to set up either way, we have provided a `start_up` video under `/deliverables/D3` explaining how to launch Apache Superset using Docker after the inital Apache Superset Installation. 

To use our plug-in on Apache Superset, you can download our `mapbox-plugin` folder from this repository into your local machine. You can put the `mapbox-plugin` folder anywhere in your machine **EXCEPT** in the `superset/superset-frontend/plugins` folder. Else it will cause an error and the plug-in will fail to execute.

We have also provided a video titled `plugin_demo` under `/deliverables/D3` that demonstrates how to use our plug-in using some example data. All datasets can be found in `mapbox-plugin/src/datasets`.
 
 ## Development requirements
To set up for the plug-in, you would need to have the following in your system:
 * apache-superset 3.0.0
 * python 3.9.7 and above
 * node version 16
 * npm version 7 or 8
 
 ## Deployment and Github Workflow
 For each function/feature, each team member will create a separate branch for the part that he/she is working on. After completing the work, the team member will submit a pull request to merge their work from their 
 branch into main. The code must be reviewed by the code owner and needs to be approved by at least one other team member, if there are no issues or merge conflicts, the pull request can then be merged into main and 
 closed.

 We choose this worklow because we want to protect the main branch so that all of the features work nicely with each other, as well as enforcing vigorous review and reinforcement of codes to prevent bugs.

 ## Coding Standards and Guidelines
 We will enforce the following coding standards:

  * Styling (Indentations, Naming conventions, Headers for different Modules)
  * Maintainance (Documentation, Limiting function lengths and global variables)
​
 ## Licenses 
 The license we are using is a standard MIT license. We use this license to enforce some basic policies for any open source repositories.
 It has minimal effects on the development and use of our codebase.
