const express = require("express");

const app = express();

app.get("/user",(req,res)=>{
    res.send("Got the data");
})

app.post("/user",(req,res)=>{
    res.send("posted the data");
})
app.delete("/user",(req,res)=>{
    res.send("deleted the data");
})

app.patch("/user",(req,res)=>{
    res.send("patched the data");
})

app.listen(7777, ()=>{
    console.log("server created for 7777 port")
})


