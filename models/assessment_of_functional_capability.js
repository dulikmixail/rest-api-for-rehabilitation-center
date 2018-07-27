const mongoose = require('mongoose')
    , Schema = mongoose.Schema;

let assessmentOfFunctionalCapabilitySchema = new Schema({
    title: {
        type: String,
        require: true
    }
});

let AssessmentOfFunctionalCapability = mongoose.model('AssessmentOfFunctionalCapability', assessmentOfFunctionalCapabilitySchema);