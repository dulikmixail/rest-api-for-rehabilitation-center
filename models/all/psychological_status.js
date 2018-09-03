const mongoose = require('mongoose')
    , Schema = mongoose.Schema;

let psychologicalStatusSchema = new Schema({
    title: {
        type: String,
        required: true
    }
});

let Psychological_Status = mongoose.model('Psychological_Status', psychologicalStatusSchema);
module.exports = require('../crud_model')(Psychological_Status);