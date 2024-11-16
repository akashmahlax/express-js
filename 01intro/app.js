const express = require('express') ;
const app = express();
 
//routes creates krna
   app.get("/", function(req, res){
    res.send("hello world by akash in express, nodemon222 ")
   })

   app.get("/about", function(req, res){
    res.send("hello world by akash in express , we have also instaleed nodemon ")
   })

   app.listen(3000);