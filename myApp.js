var express = require('express');
var app = express();

console.log("Hello world");

/*app.get("/",function(req,resp){
    resp.send("Hello Express");
})*/

app.get("/",function(req,res){
    res.sendFile(__dirname + "/views/index.html");
})



































 module.exports = app;
