const mongoose = require('mongoose')
    , Schema = mongoose.Schema;

let phRFLITitleSchema = new Schema({
    title: {
        type: String,
        required: true
    },
});


let PhRFLITitle = mongoose.model('PhRFLITitle',phRFLITitleSchema);
module.exports = require('./crud_model')(PhRFLITitle);
