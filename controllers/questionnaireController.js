const questionnaire = require("../model/Questionnaire");

const questionnaireController = async(req,res) =>{
     

     try {
        const {name} = req.body;
        
        const responce = await questionnaire.create({name: name});
  
        console.log(responce)
        res.status(201).json(responce);
     } catch (error) {
        console.log("internal server error  : " , error)
     }
}

module.exports= questionnaireController
