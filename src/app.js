const express = require("express");
const  connectDB = require("./config/database");
const User  = require("./models/user");
const app = express();

app.use(express.json());


app.post("/signup",async (req,res)=>{
    

    const user = new User(req.body); 
    try{
    await  user.save();
    res.send("user data  added successfully")
    }
    catch(err){
        res.status(400).send("Error saving the user"+err.message);
    }
    
})

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




