require('dotenv').config();
const { response } = require('express');
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
//middleware level root
app.use(function(req,res,next){
    console.log(`${req.method} ${req.path} - ${req.ip}`);
    next();
})
app.use("/public",express.static(__dirname + "/public"));
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json());

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

app.route("/name")
.get(function(req,res,next){
    res.json(getName(req.query.first,req.query.last)); 
}).post(function(req,res){
    res.json(getName(req.body.first,req.body.last)); 
})

function getName(firstName,lastName){
    return {
        name : `${firstName} ${lastName}`
    }
}

module.exports = app;
