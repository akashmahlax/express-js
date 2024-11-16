const express = require("express");
const username = require("./username");
const app = express();



app.get("/create", async (req, res) => {
   let user1 =  await username.create({
        name : 'akash' ,
        email :'"alakhgh ghsgsg"',
        username : 'alkssh'
    })
    res.send(user1)
})

app.get("/", function(req, res){
    res.send('hii home ')
})


app.listen(3000)