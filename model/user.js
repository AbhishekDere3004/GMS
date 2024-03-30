const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name:{
            firstname:{
                type:String,
                required:true,
            },
            lastname:{
                type:String,
                required:true,
            },    
        },
    email:{
        type:String,
        required:true,
    },
    contactnumber:{
        type:String,
        required:true,
    },
    address: {
        street: {
            type: String,
            required: true
        },
        city: {
            type: String,
            required: true
        }
    },
    state:{
        type:String,
        required:true,
    },
    country:{
        type:String,
        required:true,
    },
    username:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
    },
    confirmpassword:{
        type:String,
        required:true,
    }


});

module.exports = mongoose.model("user", userSchema);
