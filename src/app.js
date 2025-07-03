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

//get  full dataset
app.get("/feed", async (req,res)=>{
    const userEmail = req.body;
    try{  
        const user = await User.find({});
            res.send(user);
    }

    //get api by email using finOne()

    // try{  
    //     const user = await User.findOne({emailId:userEmail});
    //     if(user.length === 0){
    //         res.status(404).send("user doesnt  exists");
    //     }
    //     else{
    //         res.send(user);
    //     }
    // }

   // get api by email using find() 

    // try{
    //     const user = await User.find({emailId:userEmail});
    //     if(user.length === 0){
    //         res.status(404).send("user doesnt  exists");
    //     }
    //     else{
    //         res.send(user);
    //     }
    // }
    catch(err){
        res.status(400).send("data not found");
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




