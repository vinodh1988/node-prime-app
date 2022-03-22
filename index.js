const express = require("express")
 const app = express()

 app.get("/",function(request,response){
     response.send("Node js is working...!!!")
 })

 app.listen("8000",function(){
     console.log("server is running on port 8000")
 })