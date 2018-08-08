const mongoose = require('mongoose')
    , Schema = mongoose.Schema;


let chamberSchema = new Schema({
    number: {
        type: Number,
        required: true
    }
});

let Сhamber = mongoose.model('Сhamber', chamberSchema);
module.exports = require('./crud_model')(Сhamber);