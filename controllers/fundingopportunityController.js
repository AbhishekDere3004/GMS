const fundingopportunity = require("../model/fundingOpportunity");

const fundingopportunityController = async(req,res) =>{
     

     try {
        const {Additional_Information_on_Eligibility_c,

         Agency_c,
         
         Agency_Name_c,
         
         ApplicationDueDate_c,
         
         Application_Information__c,
         
         Application_Owner__c,
         
         ArchiveDate__c,
         
         CreatedById,
         
         Description__c,
         
         Eligibility_and_Selection__c,
         
         Eligible_Applicants__c,
         
         End_Date__c,
         
         Funding_Opportunity_Code__c,
   
         Funding_Opportunity_Title_Image__c,
         
         Name,
         
         Grants_gov_Url__c,
         
         InternalUniqueID__c,
         
         Is_PreApplication_Available__c,
         
         LastModifiedById,
         
         Meetings_and_Trainings__c,
         
         OwnerId,
         
         Program__c,
         
         Program_Name__c,
         
         Purpose__c,
         
         Questionnaire__c,
         
         RecordTypeId,
         
         Funded_Amount__c,
         
         Start_Date__c,
         
         Status__c,
         
         Total_Allocated_amount__c,
         
         Total_Award__c,
         
         Total_Quarter__c,
         
         Type__c,
         } = req.body;

       
            const response = await fundingopportunity.create(req.body);
          
  
        console.log(response)
        res.status(201).json(response);
     } catch (error) {
        console.log("internal server error  : " , error)
     }
}

module.exports=  fundingopportunityController
