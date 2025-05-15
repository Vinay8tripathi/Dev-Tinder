const express = require("express");

const app = express();

app.get("/user/:userId/:password",(req,res)=>{
    console.log(req.params);
    res.send("Got the data");
})

app.listen(7777, ()=>{
    console.log("server created for 7777 port")
})


