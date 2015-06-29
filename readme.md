# Wiki.app
# Built by Jerry Pallath


### Basic Structure of the App

*Note: All of this information written in the overview was written before any code was implemented.  This served as a sort of personal guideline of what I want to achieve in this project: mainly a great grasp of the material we learned in the past unit (database manipulation and utilizing the variety of modules accessed through node) and utilizing skills from earlier classes (good implementation of javascript, and way above par ability in manipulating css [this was my weakest suit in my opinion in the last project!])*

Okay.  So in this wiki app there should be a a lot of features akin to the well known wikipedia website.  This means that there should be a main page where it would allow some sort of searching and some sort of logging in feature.  This means that in the welcome page that it should be possible to utilize two specific databases to traverse farther into the site; specifically one that holds user data, and then another that holds all of the data about the specific articles that will be a part of this wiki.  !! There should be a way to add new content right from the main page.

Now the article pages should be (static?) pages where it can be traversable with hashes(to specific articles).  There should be an edit link (the most important!)  And then possible links to the home page, user information, and random articles (this will be etched out later).  

### Overview of Wireframes
*Figure 1:*
In the Welcome Page there are three destinations available along with a search function.  There is the About Icon, the Log-In Icon, and the Random Article Icon.  Each button should yield a different result. Also the search input on the bottom should be able to go through the database and pull out the relevant article based on what was searched.

*Figure 2:*
When the Log-In Icon is clicked the other two icons move towards their respective sides, and the log-in form is pushed out of the Log-In Icon. Once the user is logged in the page is reloaded with the user's icon/globe replacing the log in icon.

*Figure 3:*
When the About Icon is clicked the other two icons move towards the right.  Then the information of this site is shown off.  

*Figure 4:*
Random article will bring us to one of the available articles within the Jerrkipedia database.

*Figure 5:*
In the article page, the article title is on the very top (identical to wikipedia).  there will be options on the right (such as home, user information, random article and another search box.)

## Overview of `Wiki.app`

Henrietta is a business magnate and wants to create an internally facing wiki for her organization. She wants her employees to be able to write articles in order to inform colleagues about their insights.

## Project Details

### Necessary features

A basic implementation of this project must include:

1. All articles should be editable - this is a collaborative workplace!
2. All articles should display an author so that anyone who has questions about the contents of an article can contact the author
3. If an article is changed, the time of that change should be shown so that users can know how up to date an article is
4. Henrietta wants users to be able to add a category to an article so that articles can be organized
5. Henrietta really wants the application to look good

###  Advanced features

Going above and beyond the basic implementation is desirable, should you have the time.  Feel free to enhance your project with any of the following features:

1. Henrietta wants users to sign up with a username and password, and to login to the application before being able to use it. (session controllers + user models)
2. Henrietta would really like the passwords to be secure. (node package: bcrypt)
3. In order to keep users engaged, Henrietta would like a user to receive an email when an article that they've published is edited. (**HINT** [SendGrid](https://sendgrid.com/docs/Code_Examples/nodejs.html))
4. Henrietta is a fan of proper formatting. She wants everyone to write their articles in markdown format. (node package: marked)
5. Henrietta would love the articles to be printable!  The print version should be nicely formatted only showing the content. (CSS: media queries)
5. Henrietta thinks old changes should persist, rather than be overwritten, so you can see old versions of the article.
6. She would like users to be able to comment on changes, so they can discuss the pros and cons of a change.
7. **EXTRA FANCY** She would like changes to be ratified before becoming the default article.  The newest change with 80% approval is the current article version.

## Implementation

### Technologies

You will be expected to use the following technologies to implement this project:

- **HTML**  
  Your HTML should be semantic.

- **CSS**  
  Your app should be stylish.

- **JavaScript & jQuery**  
  Your app should be responsive.

- **node.js & express**  
  Your app will need to have its own server.

- **mongoose**  
  Your app will need to persist data.


### Timeframe

Project kickoff is Friday, June 26th, and last day for development is Tuesday, June 30th.  We will be demoing our deployed applications on Wednesday, July 1st.

## Expectations

### You

As a student you should be doing the following things:

- **Wireframes**
  Create wireframes in advance for your application to prevent surprises as you develop it.

- **Version Control**  
  Use **git** and **github** for version control, and make frequent incremental commits to prevent large scale implosions.

- **Hosting**  
  Host your application on **Heroku**, and use the **mongolab** plugin to have a cloud-based mongodb.

### Us

Since your instructors will be assessing your work, they will look for the following things:

- **Project Workflow**  
Did you complete the user stories and wireframes, as specified above? Did you use source control as expected for the phase of the program you’re in (detailed above)?

- **Technical Requirements**  
Did you deliver a project that met all the technical requirements? Given what the class has covered so far, did you build something that was reasonably complex?

- **Creativity**  
Did you add a personal spin or creative element into your project submission? Did you deliver something of value to the end user (not just a login button and an index page)?

- **Code Quality**  
Did you follow code style guidance and best practices covered in class, such as spacing, modularity, and semantic naming? Did you comment your code as your instructors have in class?

- **Problem Solving**  
Are you able to defend why you implemented your solution in a certain way? Can you demonstrate that you thought through alternative implementations? (Note that this part of your feedback evaluation will take place during your one-on-one code review with your instructors, after you've completed the project.)

## Deliverables

By the time the project is over, we will expect the following from you:

* A **working app, built by you**, hosted somewhere on the internet
* A **link to your hosted working app** in the URL section of your Github repo
* A **git repository hosted on Github**, with a link to your hosted project,  and frequent commits dating back to the very beginning of the project
* **A ``readme.md`` file** with explanations of the technologies used, the approach taken, installation instructions, unsolved problems, etc.
* **Wireframes of your app** (at least one)
* A link in your ``readme.md`` to the **user stories you created**

Most importantly a **technical demonstration** of your app which:

* Is 5 minutes in length
* Shows off all features of the app
* Explains the technical details
* Explains the technical challenges
* Explains which improvements you might make
