var express = require('express');
var app = express();
app.use("/public",express.static(__dirname + "/public"));


console.log("Hello world");

/*app.get("/",function(req,resp){
    resp.send("Hello Express");
})*/

app.get("/",function(req,res){
    res.sendFile(__dirname + "/views/index.html");
})




































 module.exports = app;
