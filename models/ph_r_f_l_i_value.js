const mongoose = require('mongoose')
    , Schema = mongoose.Schema;

let phRFLIValueSchema = new Schema({
    title: {
        type: String,
        required: true
    },
});


let PhRFLIValue = mongoose.model('PhRFLIValue',phRFLIValueSchema);
module.exports = require('./crud_model')(PhRFLIValue);