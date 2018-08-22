const mongoose = require('mongoose')
    , Schema = mongoose.Schema;

let rCRecordsSchema = new Schema({
    date: {
        type: Date,
        required: true
    },
    program: {
        type: [Schema.Types.ObjectId],
        ref: 'Physical_Rehabilitation'
    },
    complaints: {
        type: [String]
    },
    alterLoad: {
        type: [Schema.Types.ObjectId],
        ref: 'Measurement'
    },
    beforeLoad: {
        type: [Schema.Types.ObjectId],
        ref: 'Measurement'
    },
    afterSomeTime: {
        type: [Schema.Types.ObjectId],
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

let RCRecords = mongoose.model('RC_Records', rCRecordsSchema);
module.exports = require('./crud_model')(RCRecords);