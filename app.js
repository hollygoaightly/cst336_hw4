const express = require("express");
const app = express();
app.engine('html', require('ejs').renderFile);
app.use(express.static("public"));
// faker
const faker = require('faker');
let randomEmail = faker.internet.email();

// routes
app.get("/", function(req, res){
    res.render("index.html", {"fakeEmail":randomEmail}); 
    
});

app.get("/ada", function(req, res){
    res.render("ada.html", {"fakeEmail":randomEmail}); 
});

app.get("/bombe", function(req, res){
    res.render("bombe.html", {"fakeEmail":randomEmail}); 
});

app.get("/grace", function(req, res){
    res.render("grace.html", {"fakeEmail":randomEmail}); 
});

// starting server
app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Express server is running...");
});