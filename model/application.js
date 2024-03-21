const mongoose = require("mongoose");

//Define the schema
const applicationSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    grant_proposal_id:{
        type: mongoose.Schema.Types.ObjectId,
	    ref: "grantproposal",
        required: true,
    }, 
    funding_opportunity_id:{
        type: mongoose.Schema.Types.ObjectId,
	    ref: "fundingopportunity",
        required: true,
    } ,

});

//export the model
module.exports = mongoose.model("application", applicationSchema);