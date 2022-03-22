const express = require("express")
 const app = express()
 const path =require("path")

 app.use(express.static(path.join(__dirname,"public/styles")))
 app.use(express.static(path.join(__dirname,"public/scripts")))
 app.get("/",function(request,response){
     response.send("Node js is working...!!!")
 })

 app.get("/home",function(request,response){
     response.sendFile(path.join(__dirname,'public/index.html'))
 })
/*
 app.get("/styles/index.css",function(request,response){
    response.sendFile(path.join(__dirname,'public/styles/index.css'))
})*/
 app.listen("8000",function(){
     console.log("server is running on port 8000")
 })