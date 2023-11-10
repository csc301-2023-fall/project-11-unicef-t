# Data Plug-in/Innovative Alliance
​
## Partner Intro
Evan Wheeler, e.wheeler@unicef.org, chief technology officer at UNICEF's Global Innovation Centre.

UNICEF works in the world’s toughest places to reach the most disadvantaged children and adolescents. 
The organization is also the largest provide of vaccines, nutrition, safe water and sanitation, quality education, etc.

## Description about the project
The application is a plug-in for Superset that helps with data navigation, manipulation, and visualization.

The problem with the existing plug-in is that it has limited functionalities and scope, and uses deprecated codes. 
​
## Key Features

 * Users will get different dimensions on the map. Specifically, they will get map visualizations beyond a chloropath.
 * Users will be able to propose population estimates for a selected region, and others can review the said proposal.
​
## Instructions
This section will be updated as the project progresses.
 
 ## Development requirements
To set up for the plug-in, you would need to have the following in your system:
 * apache-superset 3.0.0
 * python 3.9.7 and above

### Set-up & Deployment
The user can connect to the database and interact with the data using Apache Superset.

There are two main ways to install Apache Superset: composing on Docker Desktop, or setting it up from scratch.

[Here is a detailed instruction on installing Apache Superset using Docker Desktop.](https://superset.apache.org/docs/installation/installing-superset-using-docker-compose/)

[Here is a detailed instruction on installing Apache Superset from scratch.](https://superset.apache.org/docs/installation/installing-superset-from-scratch)


Note that while Apache Superset is composing, there may be a warning that displays:

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

Since Apache Superset is extremely tedious to set up either way, we have provided a `start_up` video under /deliverables/D3 explaining the deployment & use of our work. In the `start_up` video, you can learn how to launch Apache Superset using Docker after the inital Apache Superset Installation. 


 
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
