const validator = require('validator');
const validateSignUpData = (req)=>{
    const{firstName,lastName, emailId,password} = req.body;

if(!firstName || !lastName){
    throw new Error("Not a valid Name");
}
else if(!validator.isEmail(emailId)){
    throw new Error("This email id is not valid");
}
else if(!validator.isStrongPassword(password)){
    throw new Error("Please enter the strong password");
}
}
module.exports={
    validateSignUpData,
}