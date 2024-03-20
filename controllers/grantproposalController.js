const grantproposal = require("../model/grantProposal");

const grantproposalController = async(req,res) =>{
     

     try {
        const {name} = req.body;
        
        const responce = await grantproposal.create({name: name});
  
        console.log(responce)
        res.status(201).json(responce);
     } catch (error) {
        console.log("internal server error  : " , error)
     }
}

module.exports= grantproposalController
