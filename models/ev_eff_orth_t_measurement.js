const mongoose = require('mongoose')
    , Schema = mongoose.Schema;

let evEffRIndMeasurementSchema = new Schema({
    typeOfLoad: {
        type: String
    },
    signal: {
        type: String
    },
    date: {
        type: Date
    },
    heartRate: {
        type: Number
    },
    systolicPressure: {
        type: Number
    },
    diastolicPressure: {
        type: Number
    },
    pulsePressure: {
        type: Number
    },
    vegetativeReactions: {
        type: String
    }
});

let EvEffRIndMeasurement = mongoose.model('EvEffRIndMeasurement', evEffRIndMeasurementSchema);
module.exports = require('./crud_model')(EvEffRIndMeasurement);