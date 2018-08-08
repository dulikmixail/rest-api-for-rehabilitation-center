const mongoose = require('mongoose')
    , Schema = mongoose.Schema;

let martineKushelevskyMeasurementSchema = new Schema({
    heartRate1min: {
        type: Number
    },
    heartRate2min: {
        type: Number
    },
    heartRate3min: {
        type: Number
    },
    systolicPressure1min: {
        type: String
    },
    systolicPressure3min: {
        type: String
    },
    diastolicPressure1min: {
        type: String
    },
    diastolicPressure3min: {
        type: String
    },
    pulsePressure1min: {
        type: String
    },
    pulsePressure3min: {
        type: String
    }
});


let MartineKushelevskyMeasurement = mongoose.model('MartineKushelevskyMeasurement', martineKushelevskyMeasurementSchema);
module.exports = require('./crud_model')(MartineKushelevskyMeasurement);