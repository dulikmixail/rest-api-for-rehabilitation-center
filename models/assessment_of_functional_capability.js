const mongoose = require('mongoose')
    , Schema = mongoose.Schema;

let assessmentOfFunctionalCapabilitySchema = new Schema({
    title: {
        type: String,
        required: true
    }
});

let AssessmentOfFunctionalCapability = mongoose.model('AssessmentOfFunctionalCapability', assessmentOfFunctionalCapabilitySchema);
module.exports = require('./crud_model')(AssessmentOfFunctionalCapability);