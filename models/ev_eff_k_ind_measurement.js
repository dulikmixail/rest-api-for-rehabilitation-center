const mongoose = require('mongoose')
    , Schema = mongoose.Schema;

let evEffKIndMeasurementSchema = new Schema({
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
    diastolicPressure: {
        type: Number
    },
    kerdoIndex: {
        type: String
    },
    conclusions: {
        type: String
    },
    recommendation: {
        type: String
    }
});

let EvEffKIndMeasurement = mongoose.model('EvEffKIndMeasurement', evEffKIndMeasurementSchema);
module.exports = require('./crud_model')(EvEffKIndMeasurement);