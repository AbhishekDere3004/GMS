const express = require("express");
const FundingSourcecontroller = require("../controllers/fundingSourceController");
const router = express.Router();

router.post("/fundingSource",FundingSourcecontroller);

module.exports=router;