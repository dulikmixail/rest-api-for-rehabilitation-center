const mongoose = require('mongoose')
    , Schema = mongoose.Schema;

let psychologicalStatusSchema = new Schema({
    title: {
        type: String,
        required: true
    }
});

let PsychologicalStatus = mongoose.model('PsychologicalStatus', psychologicalStatusSchema);
module.exports = require('./crud_model')(PsychologicalStatus);