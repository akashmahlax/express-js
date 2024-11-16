const express = require("express");
const path = require("path");
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended : true}));
app.set('view engine', 'ejs')
app.use(express.static(path.join(__dirname, 'public')));

app.get("/", function(req, res){
    res.render('index')
})

app.get("/profile/:username", function(req, res){
    res.send(`lecome  ,${req.params.username}`)
})

app.listen(3001)