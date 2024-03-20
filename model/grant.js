const mongoose = require("mongoose");

//Define the schema
const grantSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    application_id:{
        type: mongoose.Schema.Types.ObjectId,
	    ref: "application",
    }, 
    funding_opportunity_id:{
        type: mongoose.Schema.Types.ObjectId,
	    ref: "fundingopportunity",
    }, 

});

//export the model
module.exports = mongoose.model("grant", grantSchema);