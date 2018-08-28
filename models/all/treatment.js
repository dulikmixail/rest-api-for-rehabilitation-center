const mongoose = require('mongoose')
    , Schema = mongoose.Schema;

let treatmentSchema = new Schema({
    title: {
        type: String,
        required: true
    }
});

let Treatment = mongoose.model('Treatment', treatmentSchema);
module.exports = require('../crud_model')(Treatment);