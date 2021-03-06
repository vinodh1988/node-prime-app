const dbops=require("../db/dbops")
const express = require("express")
const route = express.Router()

route.post("/store",function(request,response){
const data=
    {
     sno:request.body.sno,
     name:request.body.name,
     city:request.body.city
    }
   dbops.insert(data.sno,data.name,data.city,function(err,data){
       if(err)
         response.status(500).send("Unable to insert")
       else
         response.send("data Successfully inserted")
   })
})


route.get("/report",function(request,response){
  dbops.getPeople(function(err,data){
             if(err)
                response.send("Unable to load data")
             else
                response.render("people",{people:data,programmer:"Joseph"})
  })
})

//render will call template mentioned in the parameter
//it will look for file called people with extension of configured template engines
//template engine is something which takes a script input executes it and produces html output

module.exports = route
