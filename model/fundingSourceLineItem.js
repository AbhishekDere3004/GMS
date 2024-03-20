const mongoose = require("mongoose");

//Define the schema
const findingSourceLineItemSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    invoice_id:{
        type: mongoose.Schema.Types.ObjectId,
	    ref: "invoice",
    },
    funding_source_id:{
        type: mongoose.Schema.Types.ObjectId,
	    ref: "fundingSource",
    },
    grant_id:{
        type: mongoose.Schema.Types.ObjectId,
	    ref: "grant",
    }
    

});

//export the model
module.exports = mongoose.model("FindingSourceLineItem", findingSourceLineItemSchema);