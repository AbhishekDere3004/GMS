const mongoose = require("mongoose");

//Define the schema
const applicationReviewSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    funding_opportunity_id:{
        type: mongoose.Schema.Types.ObjectId,
	    ref: "fundingopportunity",
    }, 
    application_id:{
        type: mongoose.Schema.Types.ObjectId,
	    ref: "application",
    }, 
});

//export the model
module.exports = mongoose.model("applicationreview", applicationReviewSchema);