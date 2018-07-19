const mongoose = require('mongoose')
    , Schema = mongoose.Schema;

let patientSchema = new mongoose.Schema({
    hospitalizationDate: {
        type: Date
    },
    surname: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    middleName: {
        type: String,
        required: true
    },
    birthDate: {
        type: Date
    },
    relativesAddress: {
        type: String
    },
    phoneNumbers: {
        type: [String],
        required: true
    },
    senderMedicalFacility: {
        type: String
    },
    medicalRecord: {
        type: Schema.Types.ObjectId,
        ref: 'MedicalRecord',
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
    note: {
        type: String,
    },
    workplace: {
        type: String
    },
    workPost: {
        type: String
    },
    isActive: {
        type: boolean
    },
    department: {
        type: Schema.Types.ObjectId,
        ref: 'Department',
    },
    gender: {
        type: Schema.Types.ObjectId,
        ref: 'Gender',
        required: true
    },
    typeIncoming: {
        type: Schema.Types.ObjectId,
        ref: 'TypeIncoming',
    },
    roomNumber: {
        type: String
    },
    procedures: {
        type: [Schema.Types.ObjectId],
        ref: 'Procedure'
    },
    login: {
        type: String
    },
    password: {
        type: String,
        select: false
    }
});

let Patient = mongoose.model('Patient', patientSchema);