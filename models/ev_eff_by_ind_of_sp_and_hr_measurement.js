const mongoose = require('mongoose')
    , Schema = mongoose.Schema;

let evEffByIndOfSpAndHrMeasurementSchema = new Schema({
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
    characteristicsOfStateOfSSS: {
        type: String
    },
    evaluation: {
        type: String
    },
    recommendation: {
        type: String
    }
});

let EvEffByIndOfSpAndHrMeasurement = mongoose.model('EvEffByIndOfSpAndHrMeasurement', evEffByIndOfSpAndHrMeasurementSchema);
module.exports = require('./crud_model')(EvEffByIndOfSpAndHrMeasurement);