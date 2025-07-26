const mongoose = require('mongoose');
const validator = require('validator') ;

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
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error("Email id is not valid")
            }
        }
    },
    password : {
        type : String,
        required: true,
        validate(value){
            if(!validator.isStrongPassword(value)){
                throw new Error("password is not strong");
            }
        }
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
        // default: "https://toppng.com/uploads/preview/instagram-default-profile-picture-11562973083brycehrmyv.png",
        validate(value){
            if(!validator.isURL(value)){
                throw new Error("URL is not valid");
            }
        }
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
