const mongoose = require('mongoose')
    , Schema = mongoose.Schema;

let psychologicalStatusSchema = new Schema({
    title: {
        type: String,
        required: true
    }
});

let PsychologicalStatus = mongoose.model('Psychological_Status', psychologicalStatusSchema);
module.exports = require('./crud_model')(PsychologicalStatus);