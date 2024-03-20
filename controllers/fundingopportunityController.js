const fundingopportunity = require("../model/fundingOpportunity");

const fundingopportunityController = async(req,res) =>{
     

     try {
        const {name} = req.body;
        
        const responce = await fundingopportunity.create({name: name});
  
        console.log(responce)
        res.status(201).json(responce);
     } catch (error) {
        console.log("internal server error  : " , error)
     }
}

module.exports=  fundingopportunityController
