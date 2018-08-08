const mongoose = require('mongoose')
    , Schema = mongoose.Schema;

let rCRecordsSchema = new Schema({
    date: {
        type: Date,
        required: true
    },
    program: {
        type: [mongoose.Types.ObjectId],
        ref: 'PhysicalRehabilitation'
    },
    complaints: {
        type: [String]
    },
    alterLoad: {
        type: [mongoose.Types.ObjectId],
        ref: 'Measurement'
    },
    beforeLoad: {
        type: [mongoose.Types.ObjectId],
        ref: 'Measurement'
    },
    afterSomeTime: {
        type: [mongoose.Types.ObjectId],
        ref: 'Measurement'
    },
    fullRestoreTime: {
        type: String
    },
    ECGAfterLoad: {
        type: String
    },
    ECGBeforeLoad: {
        type: String
    },
    conclusion: {
        type: String
    }
});

let RCRecords = mongoose.model('RCRecords', rCRecordsSchema);
module.exports = require('./crud_model')(RCRecords);