const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    firstName : {
        type: String,
        required: true,
        minLength:4,
    },
    
    lastName: {
        type : String
    },
    emailId : {
        type : String,
        required: true,
        lowercase: true,
        trim:true,
        unique: true,
    },
    password : {
        type : String,
        required: true,
    },
    age : {
        type : Number,
        min: 18,
    },
    gender: {
        type : String,
        validate(value){
            if(!["male","female","others"].includes(value)){
                throw new Error("gender is not valid");
                
            }
        }
    },

    photo:{
        type: String,
        default: "https://toppng.com/uploads/preview/instagram-default-profile-picture-11562973083brycehrmyv.png"
    },

    about:{
        type: String,
        default:"this is th default value",
    },
    
    skills:{
        type: [String],
    },
},{
    timestamps: true,
}) ;

const User = mongoose.model("User",userSchema);

module.exports = User;
