const mongoose = require('mongoose')
    , Schema = mongoose.Schema;

let phRFLSOfExImageSchema = new Schema({
    url: {
        type: String
    },
    description: {
        type: String
    }
});

let PhRFLSOfExImage = mongoose.model('PhRFLSOfExImage', phRFLSOfExImageSchema);
module.exports = require('./crud_model')(PhRFLSOfExImage);