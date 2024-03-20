const mongoose = require("mongoose");

//Define the schema
const progressReportSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    grant_id:{
        type: mongoose.Schema.Types.ObjectId,
	    ref: "grant",
    }, 
    closeout_id:{
        type: mongoose.Schema.Types.ObjectId,
	    ref: "closeout",
    }, 
});

//export the model
module.exports = mongoose.model("progressreport", progressReportSchema);