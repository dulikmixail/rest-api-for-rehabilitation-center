const mongoose = require('mongoose')
    , Schema = mongoose.Schema;

let phRAllowedSchema = new Schema({
    isAllowed: {
        type: Boolean,
        required: true
    },
    description: {
        type: String
    }
});

let PhRAllowed = mongoose.model('Ph_R_Allowed', phRAllowedSchema);
module.exports = require('./crud_model')(PhRAllowed);