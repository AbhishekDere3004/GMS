const applicationFields = require("../json/applicationFields");
const application = require("../model/application");
const grantproposal = require("../model/grantProposal")

const sendApplication = async (req, res) => {
    try {
       const applicationData ={};
       applicationFields.forEach((field)=>{
        applicationData[field] = req.body[field];
       })
        const responce = await application.create(applicationData);

        console.log(responce);
        res.status(201).json(responce);
    } catch (error) {
        console.log("Internal server error:", error);
        res.status(500).json({ error: "Internal server error" });
    }

};

// delete application by id

const deleteApplication = async(req, res ) =>{
    try {
        const { id } = req.params;  

        const deletedApplication = await application.findByIdAndDelete(id);
       
        if (!deletedApplication) {
            return res.status(404).json({ error: "Application not found" });
        }
        res.status(200).json({ message: "Application deleted successfully" });
    } catch (error) {
        console.log("Internal server error:", error);
        res.status(500).json({ error: "Internal server error" });
    }
};

// update application by id

const updateApplicationbyId = async (req, res) => {
    try {
        const { id } = req.params;
        const update = req.body;

        const updatedApplication = await application.findByIdAndUpdate(id, update, { new: true });

        if (!updatedApplication) {
            return res.status(404).json({ error: "Application not found" });
        }

        res.status(200).json(updatedApplication);
    } catch (error) {
        console.log("Internal server error:", error);
        res.status(500).json({ error: "Internal server error" });
    }
};
module.exports = {sendApplication , deleteApplication ,updateApplicationbyId}
