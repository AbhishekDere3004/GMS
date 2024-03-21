const application = require("../model/application");
const grantproposal = require ("../model/grantProposal")

const  sendAllApplications= async (req, res)=> {
    const Application = await application.create({
        name:req.body.name,
        grant_proposal_id:req.body.grant_proposal_id,
        funding_opportunity_id:req.body.funding_opportunity_id
    });
    const ApplicationData = await Application.save();

    return res.send(ApplicationData)
}

const  AllIdbyApplications =async(req , res)=>{
    const ApplicationData = await application.findById(req.body.application_id)
            .populate("funding_opportunity_id")
            .populate("grant_proposal_id");
   res.send(ApplicationData);
}
module.exports={sendAllApplications, AllIdbyApplications};
