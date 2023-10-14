<ins>Project Report<ins/>

The product is a plugin that is used to visualize data over Earth’s geography. The existing plugin is unviable for UNICEF and other target parties at the moment. The plugin would follow Apache Superset's new approach for plugins, which used Javascript with React framework. The plugin would be used to estimate population, allow reviewing similar estimates, select different configurations of the country boundaries. The plugin intends on making the most out of existing data sets. Our plugin will introduce new features such as country map integration with real-time data, satellite imagery and filtering tools. This plugin will be made for Superset, but will not be limited to this. As it is open sourced, anyone can try it out.

Our project is mostly a front end project. The back end is already supported by superset. We are adding a plugin as a new way to visualize data as well as making the data dynamic. The groups we have decided on are as follows. The first group will be the devops group which will consist of 2 people. This group will have several responsibilities including setting up CI/pipeline, install linting and code formatting plugins (eslint and prettier), set up a logging system (loggly), add a testing environment (jest) and set up local development to allow a simple dev experience. 
The second group is in charge of setting up the visualization map with the dynamic data. This is the biggest group and has 3 people. This includes the main user stories of having an interactive map which displays different data depending on which country/area is selected.
The third group is responsible for the extra features. These include different ways to visualize the map, filtering options for the data. 

These groups are separated in a way that allows each group to work independently without needing much contact from the other groups. The exception is the devops group whose job is to make the developer experience easier. This group will interact with other groups by explaining what resources/plugins we will use and how to use them. 
The map visualization group and the features group are connected because the elements made by the feature group will be implemented into the map. They can be developed separately though because we can use mock data for testing these extra features. From our mockup shown below, the visualization group will do the map part on the right, while the feature group will work on ways to manipulate and filter the data, shown on the left side.

![image](https://github.com/csc301-2023-fall/project-11-unicef-t/assets/72054183/0f197ab7-6ebf-4fed-97e7-3b67d0039e64)

<ins>Devops Group<ins/>
This group is responsible for making sure the developer experience is smooth. We are using eslint and prettier for formatting, jest for testing, and loggly for the error logging system. This group is also responsible for the CI/CD pipeline. The main objective for this group is to set up these properties so the rest of the developers can code painlessly. This group will also teach the other groups these built features so they can use it to their advantage.

<ins>Map Visualization Group<ins/>

<ins>Map Features Group<ins/>
