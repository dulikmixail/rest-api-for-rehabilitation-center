const mongoose = require('mongoose')
    , Schema = mongoose.Schema;

let measurementSchema = new Schema({
    respiratoryRate: {
        type: String,
        require: true
    },
    systolicPressure: {
        type: String,
        require: true
    },
    diastolicPressure: {
        type: String,
        require: true
    },
    heartRate: {
        type: String,
        require: true
    },
    signsOfFatigue:{
        type: String
    }
});

let Measurement = mongoose.model('Measurement', measurementSchema);