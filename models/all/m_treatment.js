const mongoose = require('mongoose')
    , Schema = mongoose.Schema;

    let mTreatmentSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    duration: {
        type: [Number],
        required: true
    }

});

let MTreatment = mongoose.model('M_Treatment', mTreatmentSchema);
module.exports = require('../crud_model')(MTreatment);