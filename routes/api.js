const dbops=require("../db/dbops")
const express = require("express")
const route = express.Router()

route.get("/people",function(request,response){
    dbops.getPeople(function(err,data){
        if(err)
           response.status(500).send("Unable to retrieve")
        else
           response.json(data)
    })
})


route.get("/people/:sno",function(request,response){
    let sno=request.params.sno
    dbops.getPerson(sno,function(err,data){
        if(err)
           response.status(500).send("Unable to retrieve")
        else
           response.json(data[0]?data[0]:"{}")
    })
})

route.delete("/people/:sno",function(request,response){
    let sno=request.params.sno
    dbops.deletePerson(sno,function(err,data){
        if(err)
           response.status(500).send("Unable to retrieve")
        else
           response.send("successfully Deleted");
    })
})

route.put("/people/:sno",function(request,response){
    let sno=request.params.sno

 dbops.getPerson(sno,function(err,data){
     if(err){
        response.status(500).send("no data to update")
     }
else{
    let now={
        name:request.body.name?request.body.name: data.name,
        city:request.body.city?request.body.city: data.city
    }
    dbops.updatePerson(sno,now.name,now.city,function(err,data){
        if(err)
           response.status(500).send("Unable to retrieve")
        else
           response.send("successfully updated");
    })
 }
})
})


route.post("/people",function(request,response){
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
          response.status(201).send("data Successfully inserted")
})
})


module.exports =route

/* package

  CRUD 

     create
     retrieve
     update
     delete
*/