require('dotenv').config();
const { response } = require('express');
var express = require('express');
var app = express();
//middleware level root
app.use(function(req,res,next){
    console.log(`${req.method} ${req.path} - ${req.ip}`);
    next();
})
app.use("/public",express.static(__dirname + "/public"));


console.log("Hello world");


/*app.get("/",function(req,resp){
    resp.send("Hello Express");
})*/

app.get("/",function(req,res){
    res.sendFile(__dirname + "/views/index.html");
})

app.get("/json",function(req,res){
   res.json((process.env.MESSAGE_STYLE == 'uppercase')?{
        "message":'Hello json'.toUpperCase()
    }:{
        "message":'Hello json'  
    })
})

module.exports = app;
