# Apache Superset/The Innovators Alliance
> _Note:_ This document will evolve throughout your project. You commit regularly to this file while working on the project (especially edits/additions/deletions to the _Highlights_ section). 
 > **This document will serve as a master plan between your team, your partner and your TA.**

## Product Details
 
#### Q1: What is the product?

The product is a plugin that is used to visualize data over Earth’s geography. The existing plugin is unviable for UNICEF and other target parties at the moment. The plugin would follow Apache Superset's new approach for plugins, which used Javascript with React framework. The plugin would be used to estimate population, allow reviewing similar estimates, select different configurations of the country boundaries. The plugin intends on making the most out of existing data sets.


 > Short (1 - 2 min' read)
 * Start with a single sentence, high-level description of the product.
 * Be clear - Describe the problem you are solving in simple terms.
 * Specify if you have a partner and who they are.
 * Be concrete. For example:
    * What are you planning to build? Is it a website, mobile app, browser extension, command-line app, etc.?      
    * When describing the problem/need, give concrete examples of common use cases.
    * Assume your the reader knows nothing about the partner or the problem domain and provide the necessary context. 
 * Focus on *what* your product does, and avoid discussing *how* you're going to implement it.      
   For example: This is not the time or the place to talk about which programming language and/or framework you are planning to use.
 * **Feel free (and very much encouraged) to include useful diagrams, mock-ups and/or links**.


#### Q2: Who are your target users?

1. UNICEF personnel will use the plug-in to visualize data relevant to the country they work in for their mission planning activities. 
2. Everyone who wishes to use the plug-in to visualize data. While UNICEF personnel are the primary targets, researchers/students in fields like Social Sciences, Geography, Data Sciences who wish to explore and understand the data can freely use this plug-in.
3. Government personnel will use the plug-in to visualize data relevant to the country they work in for their mission planning activities. 


  > Short (1 - 2 min' read max)
 * Be specific (e.g. a 'a third-year university student studying Computer Science' and not 'a student')
 * **Feel free to use personas. You can create your personas as part of this Markdown file, or add a link to an external site (for example, [Xtensio](https://xtensio.com/user-persona/)).**


#### Q3: Why would your users choose your product? What are they using today to solve their problem/need?

Currently, our partner uses a static set of data describing geographical boundaries. The problem is these boundaries are always changing which leads to inaccurate data.
-example use case: some population metrics in developing countries are being measured using an overhead visualization of the amount of light coming from a region. This data is unreliable if we don’t know the specific region to look at.

Furthermore, the current existing Apache Superset country map plugin does not support most of the countries UNICEF operates and is deprecated. Our product will support data for more countries that UNICEF operates with additional functionalites such as the ability to configure an Apache Superset instance to load different or custom country boundary data.

> Short (1 - 2 min' read max)
 * We want you to "connect the dots" for us - Why does your product (as described in your answer to Q1) fits the needs of your users (as described in your answer to Q2)?
 * Explain the benefits of your product explicitly & clearly. For example:
    * Save users time (how and how much?)
    * Allow users to discover new information (which information? And, why couldn't they discover it before?)
    * Provide users with more accurate and/or informative data (what kind of data? Why is it useful to them?)
    * Does this application exist in another form? If so, how does your differ and provide value to the users?
    * How does this align with your partner's organization's values/mission/mandate?


#### Q4: What are the user stories that make up the Minumum Viable Product (MVP)?

As a UNICEF personnel, I want to use this plugin in order to visualize population data over Uganda in order to plan stop locations for a humanitarian aid mission.

As a UNICEF personnel, I want to use this plugin in order to look at routes over South Africa in order to plan an itinerary taking minimum time & distance, and least disruptions for a humanitarian aid mission.

As a student, I want to use this plugin in order to do research involving geographical analysis of different data sets such as population distribution.

As a Government Personnel, I want to use this plugin in order to visualize vehicle traffic data over my country so that I can make informed decisions on urban planning to improve traffic conditions.

As a humanitarian project manager I want to be able to present data about countries to my team members in a visual way by using a choropleth visualization, to better explain project goals.

As a UNICEF data analyst, I want a plugin for Apache Superset that provides improved geographic visualizations, so I can better visualize and analyze data relevant to the country I work in using choropleth maps at the first subnational administrative level (provinces, districts, states, etc).

As a UNICEF data scientist, I want the plugin to support comprehensive data for as many countries as possible and allow me to configure custom country boundary data sources within our Apache Superset instance, so I can create accurate and customizable geographic visualizations for decision-making.

As a UNICEF decision maker, I want to use the improved geographic visualization plugin to make data-driven decisions that will benefit children around the world. The plugin should help me easily understand and communicate data through choropleth maps, aiding in our mission to improve children's lives.

As a UNICEF IT administrator, I want our technical team to deploy and integrate the new Apache Superset plugin seamlessly into our enterprise Superset instance, making it available for all UNICEF personnel to use. This will ensure that our colleagues have easy access to powerful geographic visualization tools.

UNICEF personnel: Humanitarian mission planning
Researcher/Students: Social Sciences, Geography, Civil engineering, Data scientists, Architecture
Government Personnel: Humanitarian mission planning, Urban events planning


 * At least 5 user stories concerning the main features of the application - note that this can broken down further
 * You must follow proper user story format (as taught in lecture) ```As a <user of the app>, I want to <do something in the app> in order to <accomplish some goal>```
 * User stories must contain acceptance criteria. Examples of user stories with different formats can be found here: https://www.justinmind.com/blog/user-story-examples/. **It is important that you provide a link to an artifact containing your user stories**.
 * If you have a partner, these must be reviewed and accepted by them. You need to include the evidence of partner approval (e.g., screenshot from email) or at least communication to the partner (e.g., email you sent)


#### Q5: Have you decided on how you will build it? Share what you know now or tell us the options you are considering.

Frameworks/Languages : Python, React (JS), Apache Superset, NRDBMS.

How to deploy: waiting on the partner.

Describe the architecture: waiting on the partner.

> Short (1-2 min' read max)
 * What is the technology stack? Specify languages, frameworks, libraries, PaaS products or tools to be used or being considered. 
 * How will you deploy the application?
 * Describe the architecture - what are the high level components or patterns you will use? Diagrams are useful here. 
 * Will you be using third party applications or APIs? If so, what are they?


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

Briefly describe which option you have agreed to.

----

## Teamwork Details

#### Q6: Have you met with your team?

Team Building Activity: 

Share a picture: ![image](https://github.com/csc301-2023-fall/project-11-unicef-t/assets/83163126/50e23656-f2de-4ead-b1c3-acb015dccee6=100x20)

Fun Facts:
* Parth: I used to be a DJ in high school.

* Justin: I never had Mc Chicken at McDonalds.

* David: I am building games with Unity. 

* Vala: I actually enjoy using Assembly. 

* Luke: I think greentea with yakult is the best drink in the world. (But you can’t find the best one in canada)

* Sunny: I can speak a dialect of Canadian french called Chiac (Used in Atlantic Canada) 

Do a team-building activity in-person or online. This can be playing an online game, meeting for bubble tea, lunch, or any other activity you all enjoy.
* Get to know each other on a more personal level.
* Provide a few sentences on what you did and share a picture or other evidence of your team building activity.
* Share at least three fun facts from members of you team (total not 3 for each member).


#### Q7: What are the roles & responsibilities on the team?

* Parth: DevOps, Frontend Developer. Manages deployment, continuous integration of plugin and developing the client-side components of the plugin.

* Justin: UI/UX Designer, Frontend Developer. Focuses on the user interface and user experience design and developing the client-side components of the plugin

* David: UI/UX Designer, Backend Developer. Focuses on the user interface and user experience design and developing the server-side aspects of the plugin.

* Vala: DevOps, UI/UX Designer. Manages deployment, continuous integration of plugin and user interface and user experience design.

* Luke: DevOps, Backend Developer. Manages deployment, continuous integration of plugin and developing the server-side aspects of the plugin.

* Will: Partner Liaison, Leader of the team, Product Manager. Responsible for overall project coordination, setting goals, creating timelines, and ensuring that the project stays on track. They also facilitate communication within the group and with external stakeholders.

* Sunny: DevOps, Frontend Developer. Manages deployment, continuous integration of plugin and developing the client-side components of the plugin.

Each member was allocated their role based on their skills, experience and enthusiasim to take up the task.


Describe the different roles on the team and the responsibilities associated with each role. 
 * Roles should reflect the structure of your team and be appropriate for your project. One person may have multiple roles.  
 * Add role(s) to your Team-[Team_Number]-[Team_Name].csv file on the main folder.
 * At least one person must be identified as the dedicated partner liaison. They need to have great organization and communication skills.
 * Everyone must contribute to code. Students who don't contribute to code enough will receive a lower mark at the end of the term.

List each team member and:
 * A description of their role(s) and responsibilities including the components they'll work on and non-software related work
 * Why did you choose them to take that role? Specify if they are interested in learning that part, experienced in it, or any other reasons. Do no make things up. This part is not graded but may be reviewed later.


#### Q8: How will you work as a team?
We meet every Thursday online at 8pm during tutorial and every Friday in-person in Bahen at 2pm. The purposes of each meeting include project discussions, assigning tasks, coding sessions, code reviews and writing reports.

We intend to have regular meetings with our partner once a week. However our partner is currently unavailable and very busy at the moment and has stated to us that he may not be able to meet once a week as of now.

Details of Meeting 1 with Partner: 

Describe meetings (and other events) you are planning to have. 
 * When and where? Recurring or ad hoc? In-person or online?
 * What's the purpose of each meeting?
 * Other events could be coding sessions, code reviews, quick weekly sync meeting online, etc.
 * You should have 2 meetings with your project partner (if you have one) before D1 is due. Describe them here:
   * You must keep track of meeting minutes and add them to your repo under "documents/minutes" folder
   * You must have a regular meeting schedule established for the rest of the term.  
  
#### Q9: How will you organize your team?

To organize our team we created a Task Board with a TODO lists with each team member's allocated tasks. We compile our meeting minutes under the doucments/minutes folder as well as in Google Docs. 

To keep track of what needs to get done, we use Github to sync our work/code together. Our TA and Partner has access to our Github Repo. 

How to Prioritize tasks: We allocate tasks to each team member based on their compentency at the task. For example, a team member who has a lot of experience with frontend React(JS) will help with the frontend while another team member who has experience with databases with work with the backend.

To determine the status of work from inception to completion: First we verify that the functions/implementations we created works in accordance to our needs/expectations. Then we double-check our functionalities with our partner to see if anything needs to be changed/improved. Finally once our partner confirms that our implementation is good and correct, the work will be complete.

List/describe the artifacts you will produce in order to organize your team.       

 * Artifacts can be To-Do lists, Task boards, schedule(s), meeting minutes, etc.
 * We want to understand:
   * How do you keep track of what needs to get done? (You must grant your TA and partner access to systems you use to manage work)
   * **How do you prioritize tasks?**
   * How do tasks get assigned to team members?
   * How do you determine the status of work from inception to completion?

#### Q10: What are the rules regarding how your team works?

**Communications:**
Our team is expected to work every week if possible on our tasks. We will allocate deadlines for each task. Our channel of communication will be email and Discord. Our channel of communication with our partner will be email and Google Meet. 

**Collaboration:**
People are held accountable by constant communication via Email/Discord. We have a team leader, Will, that serves our moderator to ensure everyone is on the right track and attends meetings/do their tasks on time. 

If someone does not contribute to the project, we will contact him immediately. If the person still remains unresponsive and does not provide a good reason for not contributing, we will contact the TA/Professor. Then we will allocate the duties of that person to everyone so that we will not fall behind in schedule. 

**Communications:**
 * What is the expected frequency? What methods/channels will be used?
 * If you have a partner project, what is your process for communicating with your partner?
 
**Collaboration: (Share your responses to Q8 & Q9 from A1)**
 * How are people held accountable for attending meetings, completing action items? Is there a moderator or process?
 * How will you address the issue if one person doesn't contribute or is not responsive? 


