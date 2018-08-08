const mongoose = require('mongoose')
    , Schema = mongoose.Schema;


let historyIncomingSchema = new Schema({
    hospitalizationDate: {
        type: Date,
        required: true
    },
    senderMedicalFacility: {
        type: String,
        required: true
    },
    diagnosis: {
        type: String,
        required: true
    },
    finalDiagnosis: {
        type: String
    },
    howIncoming: {
        type: Schema.Types.ObjectId,
        ref: 'HowIncoming',
    },
    issuanceDate: {
        type: Date
    },
    typeIncoming: {
        type: Schema.Types.ObjectId,
        ref: 'TypeIncoming',
    },
    department: {
        type: Schema.Types.ObjectId,
        ref: 'Department',
    },
    chamber: {
        type: Schema.Types.ObjectId,
        ref: 'Сhamber',
    },
    note: {
        type: String,
    },
    examination: {
        type: Schema.Types.ObjectId,
        ref: 'Examination'
    }
});

let HistoryIncoming = mongoose.model('HistoryIncoming',historyIncomingSchema);
module.exports = require('./crud_model')(HistoryIncoming);