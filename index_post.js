var express = require('express')
var app = express()
app.listen(7777,()=>{
    console.log('listening on')
})
var bodyParser =require('body-parser')
app.use(bodyParser.urlencoded({ extended:true}))
app.use(bodyParser.json())

app.get("/",(req, res)=>{
    res.sendFile(__dirname+'/login.html')
})
app.post("/login",(req, res)=>{
    console.log(req.body);
    if(req.body.uname =="skill" && req.body.upwd == "qode"){
        res.send("login succes")
    }
    else{
        res.send("login failed")
    }
})
app.use("/",(req, res)=>{
    res.send("no pages found")
})