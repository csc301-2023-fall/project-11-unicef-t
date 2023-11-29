# Data Plug-in/Innovative Alliance
​
## Partner Intro
Evan Wheeler, e.wheeler@unicef.org, chief technology officer at UNICEF's Global Innovation Centre.

UNICEF works in the world’s toughest places to reach the most disadvantaged children and adolescents. 
The organization is also the largest provider of vaccines, nutrition, safe water and sanitation, quality education, etc.

## Description about the project
Apache Superset is a modern, enterprise-ready business intelligence web application. It is fast, lightweight, intuitive, and loaded with options that make it easy for users of all skill sets to explore and visualize their data, from simple pie charts to highly detailed deck.gl geospatial charts.

Currently, the problem about Apache Superset is that the existing plug-in is that it has limited functionalities and scope, and uses deprecated codes. Furthermore, the current country map plugin can only view one country and not the specific areas around that country. 

The application is a plug-in for Superset that helps with data navigation, manipulation, and visualization. The aim of this application is to expand on the visualizations and provide a clearer view of any demographic data, enhance the distinction between countries and their boundaries, and offer more options to analyze the data. We decided to use mapbox-gl as the map visualization of our choice, as it is able to clearly display our selected country as well as the geographic borders of surrounding countries and areas. 
​
## Key Features

 * Users will get different dimensions on the map. Specifically, they will get map visualizations beyond a chloropath.
 * Users will be able to propose population estimates for a selected region, and others can review the said proposal.
 * Users will be able to view heatmap of whatever dataset for the regions of selected country.
​
## Instructions

To use our plug-in, you need to download and set up Apache Superset on your computer.

There are two main ways to install Apache Superset: composing on Docker Desktop, or setting it up from scratch.

[Here is a detailed instruction on installing Apache Superset using Docker Desktop.](https://superset.apache.org/docs/installation/installing-superset-using-docker-compose/) If you are using this method in Windows, you will need to install a Windows Subsystem for Linux (WSL) as Windows is not officially supported by Apache Superset. [HERE](https://learn.microsoft.com/en-us/windows/wsl/install) is a detailed instruction on how to set up WSL.

[Here is a detailed instruction on installing Apache Superset from scratch.](https://superset.apache.org/docs/installation/installing-superset-from-scratch)


Note that while Apache Superset is initializing, there may be a warning that displays the following message:

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
It is fine to ignore it, but if you want to remove the warning, follow the instruction [HERE](https://superset.apache.org/docs/installation/configuring-superset/) to configure Apache Superset.

Since Apache Superset is extremely tedious to set up either way, we have provided a `start_up` video under `/deliverables/D3` explaining how to launch Apache Superset using Docker after the inital Apache Superset Installation. 

To use our plug-in on Apache Superset, you can download our `unicef-mapbox-plugin` folder from this repository into your local machine. You can put the `unicef-mapbox-plugin` folder anywhere in your machine **EXCEPT** in the `superset/superset-frontend/plugins` folder. Else it will cause an error and the plug-in will fail to execute. For more detailed instructions you can follow these steps:

Setup: In the `unicef-mapbox-plugin` folder, run 
```
npm install
```
Then in the `node_modules` folder, run

```
npm install mapbox-gl
```
Then go to `node_modules\mapbox-gl` and run

```
npm install
```

To build the plugin, run the following commands:, navigate back to the 'unicef-mapbox-plugin` folder, and run the following commands:

```
npm i --force
npm run build
```

Alternatively, to run the plugin in development mode (=rebuilding whenever changes are made), start the dev server with the following command:

```
npm run dev
```
Note that one may get errors from `npm run build`, but those errors do not affect the actual building of the plugin. `npm` is a large package manager, and thus it yields irrelevant errors when trying to build the plugin. In case of version conflict errors with other tools under `npm`, it is recommended to use the `--force` flag, again due to the nature of `npm`.

To add the package to Superset, go to the `superset-frontend` subdirectory in your Superset source folder (assuming both the `unicef-mapbox-plugin` plugin and `superset` repos are in the same root directory) and run
```
npm i -S ../../unicef-mapbox-plugin
```

If your Superset plugin exists in the `superset-frontend` directory and you wish to resolve TypeScript errors about `@superset-ui/core` not being resolved correctly, add the following to your `tsconfig.json` file:

```
"references": [
  {
    "path": "../../packages/superset-ui-chart-controls"
  },
  {
    "path": "../../packages/superset-ui-core"
  }
]
```

You may also wish to add the following to the `include` array in `tsconfig.json` to make Superset types available to your plugin:

```
"../../types/**/*"
```

Finally, if you wish to ensure your plugin `tsconfig.json` is aligned with the root Superset project, you may add the following to your `tsconfig.json` file:

```
"extends": "../../tsconfig.json",
```

After this edit the `superset-frontend/src/visualizations/presets/MainPreset.js` and make the following changes:

```js
import { unicef-mapboxPlugin } from 'unicef-mapbox-plugin';
```

to import the plugin and later add the following to the array that's passed to the `plugins` property:
```js
new unicef-mapboxPlugin().configure({ key: 'ext-newunicef-mapbox' }),
```

After that the plugin should show up when you run Superset, e.g. the development server:

```
npm run dev
```

We have also provided a video titled `plugin_demo` under `/deliverables/D3` that demonstrates how to use our plug-in using some example data. All datasets can be found in `unicef-mapbox-plugin/src/datasets`.
 
 ## Development requirements
To set up for the plug-in, you would need to have the following in your system:
 * apache-superset 3.0.0
 * python 3.9.7 or above
 * node version 16
 * npm version 7 or 8
 
 ## Deployment and Github Workflow
For each function/feature, each team member will create a separate branch for the part that he/she is working on. After completing the work, the team member will submit a pull request to merge their work from their branch into main. The code must be reviewed by the code owner and needs to be approved by at least one other team member, if there are no issues or merge conflicts, the pull request can then be merged into main and closed.

We choose this workflow because we want to protect the main branch so that all of the features work nicely with each other, as well as enforcing vigorous review and reinforcement of codes to prevent bugs.

 ## Coding Standards and Guidelines
 We will enforce the following coding standards:

  * Styling (Indentations, Naming conventions, Headers for different Modules)
  * Maintainance (Documentation, Limiting function lengths and global variables)
​
 ## Licenses 
 The license we are using is a standard MIT license. We use this license to enforce some basic policies for any open source repositories.
 It has minimal effects on the development and use of our codebase.
