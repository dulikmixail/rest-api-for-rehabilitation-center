const mongoose = require('mongoose')
    , Schema = mongoose.Schema;


let psychologistSchema = new Schema({
    title: {
        type: String,
        required: true
    }
});

let Psychologist = mongoose.model('Psychologist', psychologistSchema);
module.exports = require('../crud_model')(Psychologist);