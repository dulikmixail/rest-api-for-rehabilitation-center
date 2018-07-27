const mongoose = require('mongoose')
    , Schema = mongoose.Schema;

let patientSchema = new mongoose.Schema({
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
    medicalCardNumber: {
        type: Number
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
        type: Boolean
    },
    gender: {
        type: Schema.Types.ObjectId,
        ref: 'Gender',
        required: true
    },
    login: {
        type: String,
        required: true
    },
    password: {
        type: String,
        select: false,
        required: true
    }
});

let Patient = mongoose.model('Patient', patientSchema);