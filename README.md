Inspiration
===========
To put it shortly... a pandemic did. We realized how hard it is for people to communicate with each other given the current circumstances, and we wanted to do something that would spark conversations and increase socializing between students. Having been intrigued by the Myers-Briggs Personality test, with a little bit of research we were able to build our project on the basis of the Big-Five Personality Traits.

What it does
=============
Connect2 is a platform that gives students of any University a chance to socialize with their peers, based on their personality type and the courses they have in common.

How I built it
==============
We leveraged Google's AI Platform to host and deploy our clustering model. Furthermore, we created an API-endpoint for this model on Google's ML Engine, which when provided with the user's inputs, returns one of five personality subgroups. For the web-app, we used Firebase to authenticate and host our back-end services, and React.js to develop the front-end UI.

Challenges I ran into
=====================
Using Google Cloud Platform proved to be difficult as we were using it for the first time. Deploying the model and connecting to it using our Firebase-React application took more time than expected due to unexpected server and input errors. We wanted to make a multiplatform UI that would include the ability to schedule video calls within the web app with the person subgroup and messaging abilities between them.

We couldn't implement all the features due to the time constraints posed by our lack of experience with these technologies.

Accomplishments that I'm proud of
=================================
Deployed and Researched a model that groups people into personality subgroups on GCP. Leveraged React.js for the first time in order to build the UI platform. Successfully integrated Firebase Auth and backend services using Firestore.

What I learned
===============
We learnt how to maneuver my way around unfamiliar technologies (GCP deploying models, Firebase, React.js). But most importantly, we got to research the Big-Five personalities, which was a thrilling experience, as we saw the unlimited capabilities concepts like these offer to the ever-growing field of Computer Science.

What's next for Connect2
========================
Let students combine their Google Calendars to sync with their course schedule and socializing time. Built-in video calling, supported by services such as Vonage. Do more research and customize web-app to use students’ interests on top of their personality types.
