const express = require("express");

const app = express();

app.use("/",(req,res)=>{
    res.send("Namaste from the dashboard");
})

app.use("/test",(req,res)=>{
    res.send("Hello from the sever");
})
app.use("/hello",(req,res)=>{
    res.send("hello hello hello");
})

app.listen(7777, ()=>{
    console.log("server created for 7777 port")
})


