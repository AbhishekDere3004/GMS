const mongoose = require("mongoose");

//Define the schema
const closeOutSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
     grant_id:{
        type: mongoose.Schema.Types.ObjectId,
	    ref: "grant",
    }
});

//export the model
module.exports = mongoose.model("closeout", closeOutSchema);