const mongoose = require('mongoose')
    , Schema = mongoose.Schema;


let chamberSchema = new Schema({
    number: {
        type: Number,
        required: true
    }
}, {versionKey: false});

let Сhamber = mongoose.model('Сhamber', chamberSchema);
module.exports = require('../crud_model')(Сhamber);