
# Apache Superset/The Innovators Alliance


## Iteration 01 - Review & Retrospect

 * When: 10 Nov 2023
 * Where: BAHEN 2230 + Online

## Process - Reflection


#### Q1. What worked well

List **process-related** (i.e. team organization and how you work) decisions and actions that worked well.

1) Agile Methodology Implementation: Thinking about the project as a whole is a daunting task, so breaking up the project into smaller parts using an agile approach has helped us move quicker and with less collisions between teammates' PRs.

2) Cross-Functional Teams: This was helpful so we could have different people who were more knowledgeable on different sections of the code. Recombing the code after D2 was a bit tedious, but was worth the specific knowledge gained by everyone.

3) Creating a weekly recurring meeting with our partner and an open discord channel with them for communication. These allow for much more communication with our partners which helps with visibility with what our partners want done. We have also used this to discuss how to use Superset better and the limitations it has.


#### Q2. What did not work well

List **process-related** (i.e. team organization and how you work) decisions and actions that did not work well.

**1) Configuring & Setting up Apache Superset:**

A couple of our team members ( 2 ~ 3) are unable to set it up properly, strongly hindering with coding/testing on their local machines. This is because Apache Superset requires alot of memory and space, which some of our team members do not have the luxury of. From [Installing Locally Using Docker Compose | Superset (apache.org)](https://superset.apache.org/docs/installation/installing-superset-using-docker-compose/), it is recommended to have at least 8GB of RAM to the virtual machine as well as provisioning a hard drive of at least 40GB for it to run properly. Furthermore, even when installed properly, there are many errors and conflicts with the local machine settings, making it a daunting task to configure and run Apache Superset properly. Due to the difficulty in installation and set-up, the efficiency of our team is negatively affected as we can only work on a few computers. 

**2) Setting up the Mapbox plugin:**
 
Due to the inherent design and configuration of Apache Superset, we face many limitations in terms of customization of our plugin. If the code does not fufill Apache Superset's architecture, the plugin will fail. Hence, we have limited functionality regarding the code we want to modify/add because of the inherent architecture of Apache Superset. One huge example of this is the data querying system in Apache Superset. We are unable to modify any options when choosing our metrics and have to rely solely pre-built options. This is an inherent issue with superset as shown here: https://github.com/apache/superset/issues/7172. Due to the various restrictions we encountered, there is limited flexibility on what we can do. 

#### Q3(a). Planned changes

List any **process-related** (i.e. team organization and/or how you work) changes you are planning to make (if there are any)

 * Ordered from most to least important, with supporting argument explaining a change.
1) Stay in better communication with the engineers from Unicef. The Unicef engineers have way more experience with Superset than we do, and they probably will have already faced all the issues we come across.

2) Make sure no one is having developer related issues. This would allow for faster implementation and a more smooth workflow.

3) Meet in person more often. We only meet in person once a week right now and because of busy schedules, we usually don't have enough time to get everything we want done in that one meeting.

#### Q3(b). Integration & Next steps
Briefly explain how you integrated the previously developed individuals components as one product (i.e. How did you be combine the code from 3 sub-repos previously created) and if/how the assignment was helpful or not helpful.

 * It felt tedious to combine all 3 sub-repos together into the main repo. The way we did it was first adding the part of the project from sub-repo 2 (the data and the manipulation of data) into the main repo. Then we had to add the other sub-repos semi-manually. We believe it would’ve been more beneficial and more efficient to just stay with the one main repo and not separate into 3.


## Product - Review

#### Q4. How was your product demo?
* How did you prepare your demo?

  We prepared our demo by recording a video showcasing how to launch and deploy Apache Superset and the functionalities of the plugin we created.

* What did you manage to demo to your partner?
  
   We showcased the main functionalities of the plugin we created to our partner, i.e setting up and creating the database, processing and creating datasets and detailed map visualizations of the datasets using MapBox of each country region.

 * Did your partner accept the features? And were there change requests?
   
   Our Partner accepted the features. They requested to modify in-built options for the control panel instead of creating our own control panel for our plugin.
   
 * What were your learnings through this process? This can be either from a process and/or product perspective.

   I learnt that sometimes the customer does not know what they want or what they want to change until they see the deployed product. For example, our partner requested us to modify the existing control panel instead of creating our own even though they did not mention it during any of the previous meetings.
