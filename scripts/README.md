# Plugin Setup and Build scripts

Parth made the decision to automate the plugin creation since we all spent a very significant amount of time getting Superset to run for the first time, and we would not want our client to face such a problem. We achieved our goal to make the process of running and using our application as seamless as possible by making generalized & user-safe automating bash code, and keeping track of common problems when setting up Apache in development mode.

<ins>Initial Work<ins/>

Apache Superset is a large open-source project. Building it on Docker in development mode itself will have issues unless we use the right versions of local libraries. Thus, we spent a significant amount of time understanding how plugin development works and how we can automate redundant steps to make more of our time towards designing the plugin code itself. We demonstrate this by our works below.

<ins>Automizing Plugin Creation<ins/>

Parth made two basic Linux shell scripts that prepare the barebone superset plugin (following the new monorepo construct) folder that a developer can use to get started on, and another script to move the folder to it's right place and link it such that it is usable in Apache Superset running on Docker Container system!

The files are in this repository with the names "create-plugin.sh", "link-plugin.sh", with well-defined for safe user usage, demonstrated over [here](https://youtu.be/-FY_9Su2CcA).
