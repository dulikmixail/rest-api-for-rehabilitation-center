const mongoose = require('mongoose')
    , Schema = mongoose.Schema;

let medicalRecordSchema = new Schema({
    number: {
        type: String
    }
});

let MedicalRecord = mongoose.model('MedicalRecord', medicalRecordSchema);
