const mongoose = require("mongoose");

//Define the schema
const questionnaireSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    application_review_id:{
        type: mongoose.Schema.Types.ObjectId,
	    ref: "applicationreview",
    }, 
    application_id:{
        type: mongoose.Schema.Types.ObjectId,
	    ref: "application",
    }, 
    grant_proposal_id:{
        type: mongoose.Schema.Types.ObjectId,
	    ref: "grantproposal",
    }, 
    progress_report_id:{
        type: mongoose.Schema.Types.ObjectId,
	    ref: "progressreport",
    }, 
   

});

//export the model
module.exports = mongoose.model("questionnaire", questionnaireSchema);