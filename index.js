const express = require("express")
 const app = express()
 const path =require("path")

 app.get("/",function(request,response){
     response.send("Node js is working...!!!")
 })

 app.get("/home",function(request,response){
     response.sendFile(path.join(__dirname,'public/index.html'))
 })

 app.listen("8000",function(){
     console.log("server is running on port 8000")
 })