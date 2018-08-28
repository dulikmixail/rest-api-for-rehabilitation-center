const mongoose = require('mongoose')
    , Schema = mongoose.Schema;

let phRSubGroupSchema = new Schema({
    title: {
        type: String,
        required: true
    }
});

let PhRSubGroup = mongoose.model('Ph_R_Sub_Group', phRSubGroupSchema);
module.exports = require('../crud_model')(PhRSubGroup);