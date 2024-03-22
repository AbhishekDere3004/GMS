const mongoose = require("mongoose");

//Define the schema
const applicationSchema = new mongoose.Schema({

    Address_c: {
        type:String,
    },
    Address_Geolocation_c: {
        type:String,
    },
    Agency_Capability_c:{
        type:String,
    },
    Agency_Name_c:{
        type:String,
    },
    Agreement_to_T_and_C_c:{
        type:Boolean,
    },
    Applicable_Jurisdictions_c : {
        type:String,
    },
    GMS_Application_Date_c : {
        type:Date,
    },
    Application_has_confidential_information_c : {
        type:Boolean,
    },
    Application_Review_Total_Score_c : {
        type:Number,
    },
    ApplicationTitle_c : {
        type:String,
    },
    Are_you_non_profit_organization_c : {
        type:String,
    },
    Are_you_with_any_partner_organization_c : {
        type:Boolean,
    },
    AssignedTo_c : {
        type:String,
    },
    Authorized_Representative_c : {
        type:String,
    },
    AuthorizedRepresentative_c : {
        type:String,
    },
    CA_Tax_ID_Number_c : {
        type:String,
    },
    CEAN_Number_c : {
        type:String,
    },
    CEIN_Number_c : {
        type:String,
    },
    City_c : {
        type:String,
    },
    GMS_Close_Date_c : {
        type:Date,
    },
    GMS_Close_reason_c : {
        type:String,
    },
    Comments_c : {
        type:String,
    },
    Contract_Amount_c : {
        type:Number,
    },
    Contract_Number_c : {
        type:String,
    },
    Contract_Terms_c : {
        type:String,
    },
    Contract_Term_End_Date_c : {
        type:Date,
    },
    Contract_Term_Start_Date_c : {
        Type:Date,
    },
    Counties_c : {
        type:String,
    },
    County_c : {
        type:String,
    },
    GMS_CPCN_U_Number_c : {
        type:String,
    },
    CreatedById : {
        type:mongoose.Schema.Types.ObjectId,
    },
    Date_c : {
        type:Date,
    },
    Description_c : {
        type:String,
    },
    DUNS_Number_c : {
        type:String,
    },
    Email_c : {
        type:String,
    },
    Employment_New_Employees_c : {
        type:Number,
    },
    End_Use_Customers_c : {
        type:String,
    },
    Federal_Id_Number_c : {
        type:String,
    },
    FiscalContactEmail_c : {
        type:String,
    },
    FiscalContactTelephoneNumber_c : {
        type:String,
    },
    FiscalContactTitle_c : {
        type:String,
    },
    FiscalContact_c : {
        type:String,
    },
    Funding_Opportunity_c : {
        type:String,
    },
    PreApplication_c : {
        type:String,
    },
    In_Kind_Match_c : {
        type:String,
    },
    Indirect_Cost_Rate_c : {
        type:Number,
    },
    Initiative_of_Original_Project_c : {
        type:String,
    },
    Internal_OrgURL_c : {
        type:String,
    },
    InternalUniqueID_c : {
        type:String,
    },
    IRS_Tax_ID_Number_c : {
        type:String,
    },
    KeyContactEmail_c : {
        type:String,
    },
    KeyContactLastName_c : {
        type:String,
    },
    KeyContactName_c : {
        type:String,
    },
    LastModifiedById : {
        type:mongoose.Schema.Types.ObjectId,
    },
    Lead_Agency_Applicant_c : {
        type:String,
    },
    Lead_Agency_Applicant_Name_c : {
        type:String,
    },
    Mailing_Address_c : {
        type:String,
    },
    Mailing_City_c : {
        type:String,
    },
    Mailing_Country_c : {
        type:String,
    },
    Mailing_Zipcode_c : {
        type:String,
    },
    Match_c : {
        type:String,
    },
    Name_c : {
        type:String,
    },
    OrgURL_c : {
        type:String,
    },
    OwnerId : {
        type:mongoose.Schema.Types.String,
    },
    Phone_c : {
        type:String,
    },
    Point_of_Contact_c : {
        type:String,
    },
    Post_secondary_Education_c : {
        type:String,
    },
    PrimaryContactEmail_c : {
        type:String,
    },
    PrimaryContactTelephoneNumber_c : {
        type:String,
    },
    PrimaryContactTitle_c : {
        type:String,
    },
    PrintView_c : {
        type:String,
    },
    ProjectAbstract_c : {
        type:String,
    },
    Project_Director_c : {
        type:String,
    },
    ProjectDirector_c : {
        type:String,
    },
    Name : {
        type:String,
    },
    ProjectPeriodEndDate_c : {
        type:Date,
    },
    ProjectPeriodStartDate_c : {
        type:Date,
    },
    GMS_Project_Title_c : {
        type:String,
    },
    GMS_Project_Type_c : {
        type:String,
    },
    Re_opened_for_Edit_c : {
        type:Boolean,
    },
    Read_Only_Application_c : {
        type:Boolean,
    },
    ReasonforDenial_c : {
        type:String,
    },
    Recommended_Award_Amount_c : {
        type:Number,
    },
    RecordTypeId : {
        type:mongoose.Schema.Types.ObjectId,
    },
    Requested_Amount_c : {
        type:Number,
    },
    GMS_Requested_For_c : {
        type:String,
    },
    Save_Screen_Step_Status_c : {
        type:String,
    },
    Scope_of_Work_c : {
        type:String,
    },
    Signature_c : {
        type:String,
    },
    Status_c : {
        type:String,
    },
    Status_Indicator_c : {
        type:String,
    },

});

//export the model
module.exports = mongoose.model("application", applicationSchema);