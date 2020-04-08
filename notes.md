## Why we use callbacks all the time? 

Because each mongoose/express method takes some time,
and we want to make sure some functions run afeter 
the function before is finished!

Example - seedDB:

If we create new object after remove method and not in the callback,
the removing will be finished after we add our new object into db.
And it will aslo remove this newly added object, what we don't want.

Therefore we always stick it into the callback!!!

## Error driven development
- we write some code we want to work
- we get an error
- we progress by fixing errors one by one until the code works

# Plan:
Sun: Comments, Seeding, Authentication
Mon: Pondbook Authentication, Update + Destroy
Tue: UI imporvements, Deploying
Wed: JS tricky stuff, ECMAScript 6
Thu: Final touch Pondbook, course
Fri: LinkedIn
Sat: Prepare Dominik's portfolio
Sun: -
Mon: Call Dominik
First  week: Portfolio
Second week: Mavi
Third  week: Mendix

# Why to learn web?

- possibly my work
- neccessary to know for CS
- easier in the second semester next year
- GET AN INTERNSHIP/JOB
- gain more understanding of CS
- FUN
- imporve ability to learn languages, technologies
- improve english, typing, googling
- skills themselves

## Require modules

- when we import installed node_modules, we don't need to care about the path, we just import useing the name of the package

- however, when requiring or own modules, we need to specify the path
    * absolute path (/)
    EX: 
    const Pond = require("/home/bublinec/Programming/Web/Pondbook/modules/pond");

    * We can use __dirname to get the current dir (where the app.js is)

    * relative path (./ - current dir (where the app.js is) or ../ - one dir up in the tree)

WE OBVIOUSLY CAN'T START WITHOUT /

## Nested routes

NEW     ponds/:id/commenss/new          GET
CREATE  ponds/:id/comments              POST

- I will not preceed accoring to RESTful routing in this case, because I want to display comments form on the SHOW page

## Middlewares

- functions which are run before callbacks
- we can add app.use(middleware) - to execute it on each route

EX:
We need to send current user to each template.
The easy way to do it is a middleware used on each route (app.use())

app.use - whatever function we provide inside will be run on each route

## Routes

- proper structure adds some lines to our code (require), but in the long term is beneficial to keep it structured

### DRYing I.

- create own directory, split by relations to models, require, use router
- index.js - for all purpose routes, that aren't related to particular model

- **router** - we create a variable (object?) type Router (instance of router)
    - and then we are adding all the routes to it (not to the app anymore)
    - then we need to require it in app.js and use it app.use

### DRYing II.
- app.use("/ponds", pondRoutes) - appends routes to /pond
- cleane up (group routes even more) and reduce code
- do not forget to set mergeParams to ture, otherwise it will not find our route parameters, and so will not pass them to the template
EX: router = express.Router({mergeParams: true}),

## Comment user association
- one:many
- we will store id and username as author in comment model
- we could possibly store only id and look up the name everytime
- but as we look up the username all the time it will be more efficient to store it - possible only in non relational db

