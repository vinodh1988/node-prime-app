const express = require("express")
const route = express.Router()
const people =require("./schema")

route.get("/people",function(request,response){
    people.find({},{_id:0},function(err,data){
        if(err)
           response.status(500).send("Internal Server Error")
        else
           response.send(data)
    })
})


route.post("/people",function(request,response){
    people.insertMany(request.body,function(err,data){
        if(err)
           response.status(500).send("Internal Server Error")
        else
           response.status(201).send("succesfully inserted")
    })
})

route.put("/people/:sno",function(request,response){
    people.updateMany({sno:request.params.sno},{$set:request.body},function(err,data){
        if(err)
           response.status(500).send("Internal Server Error")
        else
           response.status(200).send("succesfully updated")
    })
})

route.delete("/people/:sno",function(request,response){
    people.remove({sno:request.params.sno},function(err,data){
        if(err)
           response.status(500).send("Internal Server Error")
        else
           response.status(200).send("succesfully deleted")
    })
})
module.exports= route