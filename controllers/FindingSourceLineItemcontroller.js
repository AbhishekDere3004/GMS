const FindingSourceLineItem = require("../model/fundingSourceLineItem");

const FindingSourceLineItemcontroller = async(req,res) =>{
     

     try {
        const {name} = req.body;
        
        const responce = await FindingSourceLineItem.create({name: name});
  
        console.log(responce)
        res.status(201).json(responce);
     } catch (error) {
        console.log("internal server error  : " , error)
     }
}

module.exports= FindingSourceLineItemcontroller
