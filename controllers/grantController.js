const grant = require("../model/grant");

const grantController = async(req,res) =>{
     

     try {
        const {name} = req.body;
        
        const responce = await grant.create({name: name});
  
        console.log(responce)
        res.status(201).json(responce);
     } catch (error) {
        console.log("internal server error  : " , error)
     }
}

module.exports= grantController
