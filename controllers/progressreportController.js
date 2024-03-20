const progressreport = require("../model/progressReport");

const progressreportController = async(req,res) =>{
     

     try {
        const {name} = req.body;
        
        const responce = await progressreport.create({name: name});
  
        console.log(responce)
        res.status(201).json(responce);
     } catch (error) {
        console.log("internal server error  : " , error)
     }
}

module.exports= progressreportController
