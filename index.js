const fs = require("fs")
const obj = require("./second")

console.log(obj.members);
obj.fun();

fs.readFile("package.json","utf-8",function(err,data){
  if(err) 
     console.log(err)
  else
     console.log(data)
})

console.log("Other part of the app")