const express = require("express");
const  connectDB = require("./config/database");
const {validateSignUpData} = require("./utils/validation");
const User  = require("./models/user");
const bcrypt = require('bcrypt');
const app = express();
app.use(express.json());

//sign-up API

app.post("/signup",async (req,res)=>{
    try{
//validation(by making helper function)        
    validateSignUpData(req);
const {firstName,lastName,emailId,password} = req.body;
//encrypting the password
const passwordHash = await bcrypt.hash(password,10);
console.log(passwordHash);
//creating instance of the user model
    const user = new User({
        firstName,
        lastName,
        emailId,
        password:passwordHash,
    }); 
    await  user.save();
    res.send("user data  added successfully")
    }
    catch(err){
        res.status(400).send("Error : "+err.message);
    }
})

//login API

app.post("/login", async (req, res) => {
    try {
        const { emailId, password } = req.body;
        //check for email 
        const user = await User.findOne({ emailId: emailId });
    
        if (!user) {
            throw new Error("Invalid credentials");
        }
        //check for password
        const isPasswordValid = await bcrypt.compare(password, user.password);

        if (isPasswordValid) {
            res.send("Login successful!!");
        } else {
            throw new Error("Invalid credentials");
        }
    } catch (err) {
        res.status(400).send("Login failed: " + err.message);
    }
});


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
    catch(err){
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
    




