# Wiki.app
-- Built by Jerry Pallath


## Basic Structure of the App

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

## Basics
So as of this writing the server, the controllers, and session have all been made.  Now what is needed is to designate some users and some articles.  Along with that we need to set up some sort of stylings and some sort of way to make articles look nice during edits and during reading!

## Overview of `Wiki.app`

Henrietta is a business magnate and wants to create an internally facing wiki for her organization. She wants her employees to be able to write articles in order to inform colleagues about their insights.

## Project Details

### Necessary features

A basic implementation of this project must include:

1. All articles should be editable - this is a collaborative workplace! *CHECK*
2. All articles should display an author so that anyone who has questions about the contents of an article can contact the author *CHECK*
3. If an article is changed, the time of that change should be shown so that users can know how up to date an article is *CHECK*
4. Henrietta wants users to be able to add a category to an article so that articles can be organized *CHECK* SORTA
5. Henrietta really wants the application to look good OH YES

###  Advanced features

Going above and beyond the basic implementation is desirable, should you have the time.  Feel free to enhance your project with any of the following features:

1. Henrietta wants users to sign up with a username and password, and to login to the application before being able to use it. (session controllers + user models) *CHECKED*
2. Henrietta would really like the passwords to be secure. (node package: bcrypt) AWW
3. In order to keep users engaged, Henrietta would like a user to receive an email when an article that they've published is edited. (**HINT** [SendGrid](https://sendgrid.com/docs/Code_Examples/nodejs.html))
4. Henrietta is a fan of proper formatting. She wants everyone to write their articles in markdown format. (node package: marked) *CHECK*
5. Henrietta would love the articles to be printable!  The print version should be nicely formatted only showing the content. (CSS: media queries) *:( I LL DO THIS WHEN I EDIT THIS AFTER GA*
5. Henrietta thinks old changes should persist, rather than be overwritten, so you can see old versions of the article. *Will try this sometime later*
6. She would like users to be able to comment on changes, so they can discuss the pros and cons of a change. *:(*
7. **EXTRA FANCY** She would like changes to be ratified before becoming the default article.  The newest change with 80% approval is the current article version.


* Is 5 minutes in length
* Shows off all features of the app
* Explains the technical details
    My app is able to do the minimum requirements.  I spent a crazy amount of time to make the things look nice.  And based on my last project, this is significantly better.  I would say this has more of the design tendencies I delve into now than the ones seen in the BlackJack project, which would match the psyche of that of a 6 year old me.
    The project made me feel more comfortable with all of the tools we have learned thus far in GA.  I'm still uncomfortable doing advanced features through mongo/mongoose such as group/aggregate-- but i believe with more practice, I'll solve that.  I had a lot of fun piecing together middleware, and figuring out css.  
    One fun thing I would like to bring up is my lack of positioning knowledge in CSS.  Ask Matt (Short), he might remember how I used values like -1000 to make sure my text remained on screen.
    The CRUD used the typical MVC model, which I absolutely adore.  It makes organization completely intuitive.  EJS with one big Stylesheet was used to make all the pages look sexy and readable.
* Explains the technical challenges
    The biggest challenges can be seen right now as unachieved.  Such as the random article link, I just didnt know how to go about it.  The styling could always improve.  
    Other challenges include making the welcome page, which i eventually just gave up on, my aspirations were too high for my weak little mind to achieve.  Many of the challenges I overcame was solved through intuition and a lot of help from classmates.  The hardest part of coding is typos.  You can stare at a page for an hour and not know what's wrong with it (and it's just a typo :\ )
    Categories was wrongly implemented on my part.
* Explains which improvements you might make
    Every thing that looks incomplete, I wish I made a better attempt over the weekend.  I wish I could have acheived more of the reach goals.
    If I had more time, I would like to make the user have more interactivity, add a profile page with images and information more than just a cell phone (which was the first steps to the bigger picture I wanted to implement)
    I also wanted to implement an array instead of just the last author of an article so that you can see an accumulated list of editors whenever you look at an article.
