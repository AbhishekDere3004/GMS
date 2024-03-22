const express = require("express");
const FundingSourcecontroller = require("../controllers/fundingSourceController");
const fundingSourceLineItemcontroller = require("../controllers/FundingSourceLineItemcontroller");
const invoiceController = require("../controllers/invoiceController");
const grantController = require("../controllers/grantController");
const grantproposalController = require("../controllers/grantproposalController");
// const applicationController = require("../controllers/applicationController");
const fundingopportunityController = require("../controllers/fundingopportunityController");
const applicationreviewController = require("../controllers/applicationreviewController");
const progressreportController = require("../controllers/progressreportController");
const questionnaireController = require("../controllers/questionnaireController");
const closeoutController = require("../controllers/closeoutController");
const { sendApplication, deleteApplication, updateApplicationbyId } = require("../controllers/applicationController");


const router = express.Router();

router.post("/fundingSource",FundingSourcecontroller);

router.post("/fundingSourceLineItem",fundingSourceLineItemcontroller);

router.post("/invoice",invoiceController);

router.post("/grant",grantController);

router.post("/grantproposal",grantproposalController);

// router.post("/application",applicationController);

router.post("/fundingopportunity",fundingopportunityController);

router.post("/applicationreview",applicationreviewController);

// router.get("/applications" , getAllApplications);


//  Application Routers post

router.post("/sendApplication" , sendApplication);

//  Application Routers update(put)
router.put("/updateApplication/:id", updateApplicationbyId);

//  Application Routers delete
router.delete("/deleteApplication/:id" , deleteApplication);




// router.post("/AllIdbyApplications",AllIdbyApplications)

router.post("/progressreport",progressreportController);

router.post("/questionnaire",questionnaireController);

router.post("/closeout",closeoutController);

module.exports=router;