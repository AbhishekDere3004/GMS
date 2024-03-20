const mongoose = require("mongoose");

//Define the schema
const fundingOpportunitySchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    }
});

//export the model
module.exports = mongoose.model("fundingopportunity", fundingOpportunitySchema);

