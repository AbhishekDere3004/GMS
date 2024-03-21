const applicationreview = require("../model/applicationReview");
const fundingopportunity = require("../model/fundingOpportunity");

const applicationreviewController = async (req, res) => {
    try {
        const { name } = req.body;            
        const responce = await applicationreview.create({ name: name });
       
        console.log(responce);
        res.status(201).json(responce);
    } catch (error) {
        console.log("Internal server error:", error);
        res.status(500).json({ error: "Internal server error" });
    }
}

module.exports = applicationreviewController;

/*const Application = require("./applicationModel");

// Controller to handle creating new applications
async function createApplication(req, res) {
    try {
        const { name, funding_opportunity_id } = req.body;
        const newApplication = new Application({ name, funding_opportunity_id });
        const savedApplication = await newApplication.save();
        res.json(savedApplication);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

// Controller to handle fetching applications based on funding_opportunity_id
async function getApplicationsByFundingOpportunity(req, res) {
    try {
        const { funding_opportunity_id } = req.params; // Assuming it's in the URL params
        const applications = await Application.find({ funding_opportunity_id });
        res.json(applications);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

module.exports = {
    createApplication,
    getApplicationsByFundingOpportunity
};
 */