const mongoose = require('mongoose')
    , Schema = mongoose.Schema;


let historyIncomingSchema = new Schema({
    hospitalizationDate: {
        type: Date,
        required: true
    },
    senderMedicalFacility: {
        type: String
    },
    diagnosis: {
        type: String
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
    department: {
        type: Schema.Types.ObjectId,
        ref: 'Department',
    },
    typeIncoming: {
        type: Schema.Types.ObjectId,
        ref: 'TypeIncoming',
    },
    roomNumber: {
        type: String
    },
    note: {
        type: String,
    },
});

let HistoryIncoming = mongoose.model('HistoryIncoming',historyIncomingSchema);