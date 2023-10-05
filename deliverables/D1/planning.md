# Apache Superset/The Innovators Alliance
> _Note:_ This document will evolve throughout your project. You commit regularly to this file while working on the project (especially edits/additions/deletions to the _Highlights_ section). 
 > **This document will serve as a master plan between your team, your partner and your TA.**

## Product Details
 
#### Q1: What is the product?

The product is a plugin that is used to visualize data over Earth’s geography. The existing plugin is unviable for UNICEF and other target parties at the moment. The plugin would follow Apache Superset's new approach for plugins, which used Javascript with React framework. The plugin would be used to estimate population, allow reviewing similar estimates, select different configurations of the country boundaries. The plugin intends on making the most out of existing data sets. Our plugin will introduce new features such as country map integration with real-time data, satellite imagery, and other features that may be requested by our partner.  

Here is a video showing how the current plugin works. Our product will be very simliar: https://www.youtube.com/watch?v=NTD8-maahZg



#### Q2: Who are your target users?

1. UNICEF personnel will use the plug-in to visualize data relevant to the country they work in for their mission planning activities. 
2. Everyone who wishes to use the plug-in to visualize data. While UNICEF personnel are the primary targets, researchers/students in fields like Social Sciences, Geography, Data Sciences who wish to explore and understand the data can freely use this plug-in.
3. Government personnel will use the plug-in to visualize data relevant to the country they work in for their mission planning activities. 



#### Q3: Why would your users choose your product? What are they using today to solve their problem/need?

Currently, our partner uses a static set of data describing geographical boundaries. The problem is these boundaries are always changing which leads to inaccurate data.
-example use case: some population metrics in developing countries are being measured using an overhead visualization of the amount of light coming from a region. This data is unreliable if we don’t know the specific region to look at.

Furthermore, the current existing Apache Superset country map plugin does not support most of the countries UNICEF operates and is deprecated. Our product will support data for more countries that UNICEF operates with additional functionalites such as the ability to configure an Apache Superset instance to load different or custom country boundary data.



#### Q4: What are the user stories that make up the Minumum Viable Product (MVP)?
**Artifacts for user stories are not found online as it is specific to UNICEF. These were discussed in the meetings and verified by our partner.** 

User Story 1:
As a UNICEF personnel, I want to use this plugin in order to navigate a population heat map, allowing different data sources to be interpreted by the map.  
Acceptance Criteria: A UNICEF worker will be able to navigate the map and easily use the map with different data sources.

User Story 2:
As a UNICEF personnel, I want to use this plugin in order to use filter options for populations.       
Acceptance Criteria: A UNICEF worker should have access to filtering areas for populations.

User Story 3:
As a UNICEF personnel, I want to use this plugin in order to use look at more narrow and broad regions and their populations.       
Acceptance Criteria: A UNICEF worker should have access to different regions including small and big regions.

User Story 4:
As a student, I want to use this plugin in order to conduct research using different types of visualizations beyond a chloropath.  
Acceptance Criteria: Students will be able to install this plugin and use it to conduct research using the population estimates from the map.

User Story 5:
As a Government Personnel, I want to use this plugin in order to clearly identify the differences between districts and states in a given region.  
Acceptance Criteria: It will be easy for the user to navigate to different districts and states and find accurate population estimates.

User Story 6:
As a humanitarian project manager, I want to be able to look at populations in different areas, and filter areas for different populations  
Acceptance Criteria: The user will be able to filter for different general areas, as well as for different populations, in order to gather data for their needs.

UNICEF personnel: Humanitarian mission planning
Researcher/Students: Social Sciences, Geography, Civil engineering, Data scientists, Architecture
Government Personnel: Humanitarian mission planning, Urban events planning

Verification Evidence:

<img width="784" alt="Screenshot 2023-10-04 at 10 08 56 PM" src="https://github.com/csc301-2023-fall/project-11-unicef-t/assets/72054183/05ff49a8-56cd-4987-bd71-4dba30e91079">

<img width="790" alt="Screenshot 2023-10-04 at 10 09 08 PM" src="https://github.com/csc301-2023-fall/project-11-unicef-t/assets/72054183/bd3d0808-ef59-48ec-a8af-0928b6cf3ae0">




#### Q5: Have you decided on how you will build it? Share what you know now or tell us the options you are considering.

Frameworks/Languages : Python, React (JS), Apache Superset, NRDBMS.

How to deploy: This is an open source plugin and will be deployed through Apache Superset.

Describe the architecture: 
The program is a plugin for Apache Superset, so it will use the framework that already exists for the Superset as a base. The code will be almost exclusively JavaScript and TypeScript. The typescript will be used along the React framework to generate the visualizations needed. The plugin will also need functionality to accept SQL queries, which can be provided with the existing Superset framework that the plugin will be built on. 
Many different file types must be supported (such as JSON, GeoJSON, CSV, etc.) in order to provide data for the map visualization. 
The backend of the program will be written using Node.js, since this is the recommended system to use for creating visualization plugins by Superset. This section will be responsible for parsing the data that is provided to calculate the correct way to show the map visualization.


----
## Intellectual Property Confidentiality Agreement 
> Note this section is **not marked** but must be completed briefly if you have a partner. If you have any questions, please ask on Piazza.
>  
**By default, you own any work that you do as part of your coursework.** However, some partners may want you to keep the project confidential after the course is complete. As part of your first deliverable, you should discuss and agree upon an option with your partner. Examples include:
1. You can share the software and the code freely with anyone with or without a license, regardless of domain, for any use.
2. You can upload the code to GitHub or other similar publicly available domains.
3. You will only share the code under an open-source license with the partner but agree to not distribute it in any way to any other entity or individual. 
4. You will share the code under an open-source license and distribute it as you wish but only the partner can access the system deployed during the course.
5. You will only reference the work you did in your resume, interviews, etc. You agree to not share the code or software in any capacity with anyone unless your partner has agreed to it.

**Your partner cannot ask you to sign any legal agreements or documents pertaining to non-disclosure, confidentiality, IP ownership, etc.**

We have decided on **option 2**.

----

## Teamwork Details

#### Q6: Have you met with your team?

Team Building Activity: 
We met in person to discuss our project at Bahen. We introduced ourselves and our level of experience in various coding fields. To break the ice, we played scribbl.io with each other as a team bonding activity.

Share a picture:

![image](https://github.com/csc301-2023-fall/project-11-unicef-t/assets/83163126/61a904f5-744d-4cf2-9a8c-599f442c2f93)


Some Fun Facts about us:
* Parth: I used to be a DJ in high school.

* Justin: I never had Mc Chicken at McDonalds.

* David: I am building games with Unity. 

* Vala: I actually enjoy using Assembly. 

* Luke: I think greentea with yakult is the best drink in the world. (But you can’t find the best one in canada)

* Sunny: I can speak a dialect of Canadian french called Chiac (Used in Atlantic Canada)

* William: My favourite drink flavour is grape.



#### Q7: What are the roles & responsibilities on the team?

* Parth: DevOps, Frontend Developer. Manages deployment, continuous integration of plugin and developing the client-side components of the plugin.

* Justin: UI/UX Designer, Frontend Developer. Focuses on the user interface and user experience design and developing the client-side components of the plugin

* David: UI/UX Designer, Backend Developer, Product Manager. Focuses on the user interface and user experience design and developing the server-side aspects of the plugin. Responsible for overall project coordination.

* Vala: DevOps, UI/UX Designer. Manages deployment, continuous integration of plugin and user interface and user experience design.

* Luke: DevOps, Backend Developer. Manages deployment, continuous integration of plugin and developing the server-side aspects of the plugin.

* Will: Partner Liaison, Leader of the team, Product Manager. Responsible for overall project coordination, setting goals, creating timelines, and ensuring that the project stays on track. They also facilitate communication within the group and with external stakeholders.

* Sunny: DevOps, Frontend Developer. Manages deployment, continuous integration of plugin and developing the client-side components of the plugin.

Each member was allocated their role based on their skills, experience and enthusiasim to take up the task.


#### Q8: How will you work as a team?
We meet every Thursday online at 8pm during tutorial and every Friday in-person in Bahen at 2pm. The purposes of each meeting include project discussions, assigning tasks, coding sessions, code reviews and writing reports.

We intend to have regular meetings with our partner once a week. However our partner is currently unavailable and very busy at the moment and has stated to us that he may not be able to meet once a week as of now.

Details of Meeting 1 with Partner: 
In our initial meeting with the partner, he provided a brief introduction of himself and UNICEF. We then had a discussion regarding the project's motivation, including the reasons for this project and its scope. Furthermore, the partner outlined the expected project outcomes, including what the project should achieve and how users would use the plug-in. He also briefly mentioned the user stories and how it makes up to the minimum viable product. He mentioned that how the project should build on existing plug-in as well. Finally, he highlighted how the project could support him and his colleagues in fulfilling their mission.

First meeting: Brief introduction on partner himself and UNICEF, Briefly mentioned about the project motivation, expected outcomes, user stories, technical consideration.

Second meeting: Confirmation on user stories, overall view on the project.

  
#### Q9: How will you organize your team?

To organize our team we created a Task Board with a TODO lists with each team member's allocated tasks. We compile our meeting minutes under the doucments/minutes folder as well as in Google Docs. 

To keep track of what needs to get done, we use Github to sync our work/code together. Our TA and Partner has access to our Github Repo. 

How to Prioritize tasks: We allocate tasks to each team member based on their compentency at the task. For example, a team member who has a lot of experience with frontend React(JS) will help with the frontend while another team member who has experience with databases with work with the backend.

To determine the status of work from inception to completion: First we verify that the functions/implementations we created works in accordance to our needs/expectations. Then we double-check our functionalities with our partner to see if anything needs to be changed/improved. Finally once our partner confirms that our implementation is good and correct, the work will be complete.


#### Q10: What are the rules regarding how your team works?

**Communications:**
Our team is expected to work every week if possible on our tasks. We will allocate deadlines for each task. Our channel of communication will be email and Discord. Our channel of communication with our partner will be email and Google Meet. 

**Collaboration:**
People are held accountable by constant communication via Email/Discord. We have a team leader, Will, that serves our moderator to ensure everyone is on the right track and attends meetings/do their tasks on time. 

If someone does not contribute to the project, we will contact him immediately. If the person still remains unresponsive and does not provide a good reason for not contributing, we will contact the TA/Professor. Then we will allocate the duties of that person to everyone so that we will not fall behind in schedule. 


