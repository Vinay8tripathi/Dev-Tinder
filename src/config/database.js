const mongoose = require('mongoose');

const connectDB = async()=>{
    await mongoose.connect(
    "mongodb+srv://NamasteDev:qwertyuiopQWE@namastenodejs.awlh6sz.mongodb.net/devTinder"  
);
}

module.exports = connectDB;

