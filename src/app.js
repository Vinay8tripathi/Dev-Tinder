const express = require("express");

const app = express();

const {auth,userAuth} = require("./middlewares/auth");
// const {userAuth} = require("./middlewares/userAuth");
app.use("/admin",auth);
app.get("/user/data",userAuth,(req,res,next)=>{
    res.send("All data sent of user")
});

app.delete("/user/data",userAuth,(req,res,next)=>{
    res.send("All data deleted of user")
});

app.use("/admin/getData",(req,res,next)=>{
    res.send("All data sent")
});

app.get("/user")

app.use("/admin/deleteData",(req,res,next)=>{
    res.send("Deleted the requested data");
});



app.listen(7777, ()=>{
    console.log("server created for 7777 port")
})


