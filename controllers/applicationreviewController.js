const applicationreview = require("../model/applicationReview");

const applicationreviewController = async(req,res) =>{
     

     try {
        const {name} = req.body;
        
        const responce = await applicationreview.create({name: name});
  
        console.log(responce)
        res.status(201).json(responce);
     } catch (error) {
        console.log("internal server error  : " , error)
     }
}

module.exports= applicationreviewController
