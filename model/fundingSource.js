const mongoose = require("mongoose");

//Define the schema
const fundingSourceSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    }
});

//export the model
module.exports = mongoose.model("fundingSource", fundingSourceSchema);