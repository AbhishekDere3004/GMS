const application = require("../model/application");
const grantproposal = require("../model/grantProposal")

const sendApplication = async (req, res) => {
    try {
        const { Address_c,
            Address_Geolocation_c,
            Agency_Capability_c,
            Agency_Name_c,
            Agreement_to_T_and_C_c,
            Applicable_Jurisdictions_c,
            GMS_Application_Date_c,
            Application_has_confidential_information_c,
            Application_Review_Total_Score_c,
            ApplicationTitle_c,
            Are_you_non_profit_organization_c,
            Are_you_with_any_partner_organization_c,
            AssignedTo_c,
            Authorized_Representative_c,
            AuthorizedRepresentative_c,
            CA_Tax_ID_Number_c,
            CEAN_Number_c,
            CEIN_Number_c,
            City_c,
            GMS_Close_Date_c,
            GMS_Close_reason_c,
            Comments_c,
            Contract_Amount_c,
            Contract_Number_c,
            Contract_Terms_c,
            Contract_Term_End_Date_c,
            Contract_Term_Start_Date_c,
            Counties_c,
            County_c,
            GMS_CPCN_U_Number_c,
            CreatedById,
            Date_c,
            Description_c,
            DUNS_Number_c,
            Email_c,
            Employment_New_Employees_c,
            End_Use_Customers_c,
            Federal_Id_Number_c,
            FiscalContactEmail_c,
            FiscalContactTelephoneNumber_c,
            FiscalContactTitle_c,
            FiscalContact_c,
            Funding_Opportunity_c,
            PreApplication_c,
            In_Kind_Match_c,
            Indirect_Cost_Rate_c,
            Initiative_of_Original_Project_c,
            Internal_OrgURL_c,
            InternalUniqueID_c,
            IRS_Tax_ID_Number_c,
            KeyContactEmail_c,
            KeyContactLastName_c,
            KeyContactName_c,
            LastModifiedById,
            Lead_Agency_Applicant_c,
            Lead_Agency_Applicant_Name_c,
            Mailing_Address_c,
            Mailing_City_c,
            Mailing_Country_c,
            Mailing_Zipcode_c,
            Match_c,
            Name_c,
            OrgURL_c,
            OwnerId,
            Phone_c,
            Point_of_Contact_c,
            Post_secondary_Education_c,
            PrimaryContactEmail_c,
            PrimaryContactTelephoneNumber_c,
            PrimaryContactTitle_c,
            PrintView_c,
            ProjectAbstract_c,
            Project_Director_c,
            ProjectDirector_c,
            Name,
            ProjectPeriodEndDate_c,
            ProjectPeriodStartDate_c,
            GMS_Project_Title_c,
            GMS_Project_Type_c,
            Re_opened_for_Edit_c,
            Read_Only_Application_c,
            ReasonforDenial_c,
            Recommended_Award_Amount_c,
            RecordTypeId,
            Requested_Amount_c,
            GMS_Requested_For_c,
            Save_Screen_Step_Status_c,
            Scope_of_Work_c,
            Signature_c,
            Status_c,
            Status_Indicator_c,
        } = req.body;
        const responce = await application.create(req.body);

        console.log(responce);
        res.status(201).json(responce);
    } catch (error) {
        console.log("Internal server error:", error);
        res.status(500).json({ error: "Internal server error" });
    }

};

// delete application by id

const deleteApplication = async(req, res ) =>{
    try {
        const { id } = req.params;  

        const deletedApplication = await application.findByIdAndDelete(id);
       
        if (!deletedApplication) {
            return res.status(404).json({ error: "Application not found" });
        }
        res.status(200).json({ message: "Application deleted successfully" });
    } catch (error) {
        console.log("Internal server error:", error);
        res.status(500).json({ error: "Internal server error" });
    }
};

// update application by id

const updateApplicationbyId = async (req, res) => {
    try {
        const { id } = req.params;
        const update = req.body;

        const updatedApplication = await application.findByIdAndUpdate(id, update, { new: true });

        if (!updatedApplication) {
            return res.status(404).json({ error: "Application not found" });
        }

        res.status(200).json(updatedApplication);
    } catch (error) {
        console.log("Internal server error:", error);
        res.status(500).json({ error: "Internal server error" });
    }
};
module.exports = {sendApplication , deleteApplication ,updateApplicationbyId}
