const application = require("../model/application");

const applicationController = async(req,res) =>{
     

     try {
        const {name} = req.body;
        
        const responce = await application.create({name: name});
  
        console.log(responce)
        res.status(201).json(responce);
     } catch (error) {
        console.log("internal server error  : " , error)
     }
}

module.exports=applicationController
