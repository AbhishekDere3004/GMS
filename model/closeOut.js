const mongoose = require("mongoose");

//Define the schema
const closeoutSchema = new mongoose.Schema({
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
module.exports = mongoose.model("closeout", closeoutSchema);