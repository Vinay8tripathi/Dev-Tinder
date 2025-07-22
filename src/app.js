const express = require("express");
const  connectDB = require("./config/database");
const User  = require("./models/user");
const app = express();



//post API
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

//get API
    app.get("/feed", async (req,res)=>{
    try{  
        const users = await User.find({});
            res.send(users);
    }

    // app.get("/users", async (req,res)=>{
    // const userEmail = req.body.emailId;

//get api by email using find() 
     // try{
    //     const user = await User.find({emailId:userEmail});
    //     if(user.length === 0){
    //         res.status(404).send("user doesnt  exists");
    //     }
    //     else{
    //         res.send(user);
    //     }
     // }

//get api by email using finOne()
     // try{  
//     //     const user = await User.findOne({emailId:userEmail});
//     //     if(user.length === 0){
//     //         res.status(404).send("user doesnt  exists");
//     //     }
//     //     else{
//     //         res.send(user);
//     //     }
//     // }
 catch(err){
        res.status(400).send("data not found");
    }
})

//delete API
app.delete("/user", async(req,res)=>{
    const userId = req.body.userId;
    // const userss = await User.findByIdAndDelete({_id:userId});
    const userss = await User.findByIdAndDelete(userId);
    try{
        res.send("user deleted succesfully");
    }
    catch{
        res.status(400).send("data not available");
    }
})

//update API
app.patch("/user/:userId", async (req,res)=>{
    const userId  = req.params?.userId;
    const data = req.body;
    
    try{
        const user = await User.findByIdAndUpdate({_id:userId},data,{returnDocument:'after',
        runValidators: true,
    });
        const ALLOWED_UPDATES = [
            "photo","skills","about","age","gender"
        ]
        const isUpdateAllowed = Object.keys(data).every((k)=>ALLOWED_UPDATES.includes(k));
        if(!isUpdateAllowed){
            throw new Error("update not allowed");
        }

        res.send("user is udated succesfully");
        console.log(user);
    }
    catch(err){
        res.status(400).send("UPDATE FAILED"+ err.message);
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
    




