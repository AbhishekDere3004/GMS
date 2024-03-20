const invoice = require("../model/invoice");

const invoiceController = async(req,res) =>{
     

     try {
        const {name} = req.body;
        
        const responce = await invoice.create({name: name});
  
        console.log(responce)
        res.status(201).json(responce);
     } catch (error) {
        console.log("internal server error  : " , error)
     }
}

module.exports= invoiceController
