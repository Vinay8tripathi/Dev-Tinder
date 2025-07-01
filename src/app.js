const express = require("express");
const  connectDB = require("./config/database");

const app = express();

connectDB()
.then(()=>{
    console.log("Database is connected ");
    app.listen(7777, ()=>{
    console.log("server created for 7777 port")
});
})
.catch((err)=>{
    console.error("Database is not connected");
})




