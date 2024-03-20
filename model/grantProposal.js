const mongoose = require("mongoose");

//Define the schema
const grantProposalSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    fundingopportunity_id:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "fundingopportunity",
    }

});

//export the model
module.exports = mongoose.model("grantproposal", grantProposalSchema);