const closeout = require("../model/closeout");

const closeoutController = async(req,res) =>{
     

     try {
        const {name} = req.body;
        
        const responce = await closeout.create({name: name});
  
        console.log(responce)
        res.status(201).json(responce);
     } catch (error) {
        console.log("internal server error  : " , error)
     }
}

module.exports= closeoutController
