const fundingSource = require("../model/fundingSource");

const FundingSourcecontroller = async(req,res) =>{
     

     try {
        const {name} = req.body;
        
        const responce = await fundingSource.create({name: name});
  
        console.log(responce)
        res.status(201).json(responce);
     } catch (error) {
        console.log("internal server error  : " , error)
     }
}

module.exports= FundingSourcecontroller
