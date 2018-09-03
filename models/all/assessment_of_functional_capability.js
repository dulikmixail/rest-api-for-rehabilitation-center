const mongoose = require('mongoose')
    , Schema = mongoose.Schema;

let assessmentOfFunctionalCapabilitySchema = new Schema({
    title: {
        type: String,
        required: true
    }
});

let Assessment_Of_Functional_Capability = mongoose.model('Assessment_Of_Functional_Capability', assessmentOfFunctionalCapabilitySchema);
module.exports = require('../crud_model')(Assessment_Of_Functional_Capability);