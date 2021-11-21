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
//middleware chain for method
app.get("/now",function(req,res,next){
    req.time = new Date().toString();
    next()
},function(req,res){
    res.send({time:req.time})
})

app.get("/:word/echo",function(req,res){
    res.json({
        echo:req.params.word
    })
})

module.exports = app;
