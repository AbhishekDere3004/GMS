const mongoose = require("mongoose");

//Define the schema
const invoiceSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    grant_id:{
        type: mongoose.Schema.Types.ObjectId,
	    ref: "grant",
    }, 
    funding_Source_id:{
        type: mongoose.Schema.Types.ObjectId,
	    ref: "fundingSource",
    }
    
});

//export the model
module.exports = mongoose.model("invoice", invoiceSchema);