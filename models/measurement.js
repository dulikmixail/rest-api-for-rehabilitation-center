const mongoose = require('mongoose')
    , Schema = mongoose.Schema;

let measurementSchema = new Schema({
    respiratoryRate: {
        type: String,
        require: true
    },
    systolicPressure: {
        type: Number,
        require: true
    },
    diastolicPressure: {
        type: Number,
        require: true
    },
    heartRate: {
        type: Number,
        require: true
    },
    signsOfFatigue:{
        type: String
    }
});

let Measurement = mongoose.model('Measurement', measurementSchema);