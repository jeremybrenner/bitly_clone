//require express, body-parser, and path module
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path")
//define ./views as a variable
var views = path.join(process.cwd(), "views")
var urlArr = [];

//define app as express 'instance'
var app = express();
//read form data
app.use(bodyParser.urlencoded({extended:true}));

//sets a root route
app.get("/", function(req, res){
	var homePath = path.join(views, "home.html")
	res.sendFile(homePath);
});

//gets the index as the index of requested params.
app.get("/submit/:index", function(req, res){
	var indexPath = urlArr[req.params.index]
	res.redirect(indexPath);
})

app.post("/submit", function(req, res){
	var urlObj= req.body.redirect.url;
	urlArr.push(urlObj);
	var index = urlArr.length-1
	res.send("View your URL at localhost:3000/submit/" + index)
});

//creates the server on port 3000
app.listen(3000, function(req, res){
	console.log("Working")
});

//get to view a form
//post /urls to submit a url to shorten
//get /urls/:id
//when express server receives, push into n array
//when server responds, use the index of the url from urls
//to find the associated array as the id:
// View your url at localhost:3000/urls/0
//when user goes to /urls/:id, look up the :id param in 
// thge urls array to find the associated url and then
//reditect to it
