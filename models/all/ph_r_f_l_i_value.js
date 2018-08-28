const mongoose = require('mongoose')
    , Schema = mongoose.Schema;

let phRFLIValueSchema = new Schema({
    title: {
        type: String,
        required: true
    },
});


let PhRFLIValue = mongoose.model('Ph_R_F_L_I_Value',phRFLIValueSchema);
module.exports = require('../crud_model')(PhRFLIValue);