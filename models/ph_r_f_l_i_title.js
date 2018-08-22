const mongoose = require('mongoose')
    , Schema = mongoose.Schema;

let phRFLITitleSchema = new Schema({
    title: {
        type: String,
        required: true
    },
});


let PhRFLITitle = mongoose.model('Ph_R_F_L_I_Title',phRFLITitleSchema);
module.exports = require('./crud_model')(PhRFLITitle);
