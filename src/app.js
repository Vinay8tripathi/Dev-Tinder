const express = require("express");

const app = express();

app.get("/user",
    [(req,res,next)=>{
        console.log("routHandlers1");
        next();
},
    (req,res,next)=>{
        console.log("routHandlers1");
        next();
}],
(req,res,next)=>{
        console.log("routHandlers1");
        next();
},

(req,res)=>{
        console.log("routHandlers1");
        res.send("got the routHandler");
        
},


);

app.listen(7777, ()=>{
    console.log("server created for 7777 port")
})


