<h1>Your First Expres.js Application</h1>

### Table of contents
- [Table of contents](#table-of-contents)
- [Introduction](#introduction)
- [What is HTTP](#what-is-http)
- [What is HTML](#what-is-html)
- [Creating our first HTML page.](#creating-our-first-html-page)
- [What is CSS](#what-is-css)
- [What is Nodejs](#what-is-nodejs)
- [What is Express.js](#what-is-expressjs)
- [Setting up an Express server](#setting-up-an-express-server)
- [Deploying your express app](#deploying-your-express-app)
- [Resources](#resources)


### Introduction
This workshop will go through the basics of settings up a Nodejs server powered with Express.js. We'll go over what each of the components does and how they all work together to build a server.
Before we get into the code an introduction about what HTTP is, HTML and CSS is necessary.
In HTTP, requests are initiated by the recipient, the server can choose whether or not to respond and how to respond. You'll get a better understanding of this as we develop our own application.

### What is HTTP
HTTP stands for HyperText Transfer Protocol.
It is a set of rules for transferring files (such as text, images, videos and more ). It is the foundation of any data exchange on the Web and it is a client-server protocol.
In the HTTP protocol a client sends a request to a specific server, the server validates and can choose to respond to that request. The concept of request/response is fundamental.
I won't go into many details but you'll find resources at the bottom of this markdown that got into more details.

### What is HTML
HTML stands for HyperText Markup Language.
You can think of HTML as just plain text, it is plain text in way. Only it has a set of elements and tags that give it much more power than plain text. For example you write `<h1>Hello friends</h1>` the text `Hello Friends` will be a `header`. It therefore has a predetermined size and styling. We'll get into this later when we create our own HTML.

### Creating our first HTML page.
(In some way, this markdown in intended to be reproducible so I'll list the steps we'll go through to make our first html)
* Go ahead and create a .html file. Name it as you wish.
* Put the HTML tags in there.
* Write a couple of headers, bold text and perhaps embbed images if you'd like.
* Open that file in your browser, let's see how it looks.

### What is CSS
If you've played around with HTML for the first time you'll notice that it's limited and tends to get dull.
CSS stands for Cascading Style Sheets. I don't know what that means to be honest and I suck at CSS so I'll leave that to the people who are good at it but I'll tell you that CSS allows you to style your HTML code. You can add colors, backgroud colors, transitions and many more cool things.
* Try adding some CSS to that HTML file you created, see what terrible results you get.

### What is Nodejs
This markdown is meant for beginners so I won't try to go into many details but I'll state what I think is important to know.
The name is "Nodejs", "js" stands for `JavaScript`. Javascript is a scripting programming language that was initially developed for front end development, meaning it would run on the browser. It would be used for enhancing the browsing experience. In 2009 Ryan Dahl rolled out Nodejs which would enable running Javascript outside the browser.
You'll find an installation guide in the resources.
* Our first eval in nodejs.
* Ways Javascript is different than C.
* Javascript weirdness.. don't be a kiddy :D
* Execute a script.

### What is Express.js
Again, what I've shown you so far is pretty limited.. we need a way to extend it.
Express.js is a framework that will enable us to create our own server, very easily and very fast. It is a very widely used framework for back end development in Node.
The way Express is used is that you define routes and you define your server's behaviour upon receiving a request on that route. For instance, the route can be `/user/Yassir` and the server's response would be `Yassir is a student at 1337 and an Entrepreuneur`. You can send it in plain text as I wrote it but that's usually not how it's done.
The behaviour I described here is for a `GET` request. Later on Inshaallah we'll see another type of requests, `POST` request.

### Setting up an Express server

**Important Note: In this tutorial ( if you wish to call it that.. ) we'll go directly to setting up the server. However you should know that there are many steps that precede this, we're skipping those. A good developer does not only know how to use the technology but has a solid understanding of the underlying infrastructure, implementation specific knowledge and should not mind digging the source code when things get hairy.**


Steps:

1. Create a node app. Run `npm init` in your terminal.

NPM is the package manager for Nodejs, we'll use it to install some packages and manage our application.
Runnign `npm init` will create a `package.json` file in your directory, this file is used by NPM to track and configure a number of things. Among the things it tracks is what packages you are using, along with the package versions and other details. You can also define a couple of scripts which we'll look at later.

2. Install Express by running `npm install expressjs`.

After it's done take a look at the package.json file again. you'll see tha package name and the package version there.
Also, you might notice that a file called package-lock.json was created, you might want to do some research on this too (This is basically my way of saying I have no idea what this is for and I am too lazy to look it up).

3. Create your entry Javascript file, the extension is `.js`. I'll name it `app.js`

    1. Inside you `app.js` require `expressjs`.
    2. Call the `express()` method to create an express app instance.
    3. Define a port. I'll use `3000`.
    4. Listen on that port.
    5. Define a route and a response method. The method usually looks like this: `(req, res) => { // Your code goes here};`
    6. Listen on the port you defined earlier.
    7. Believe it or not, that's it.

### Deploying your express app


Follow the instructions on: https://devcenter.heroku.com/articles/deploying-nodejs





# Resources
https://developer.mozilla.org/en-US/docs/Web/HTTP/Overview


<h3>Thank you</h3>
