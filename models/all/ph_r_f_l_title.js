const mongoose = require('mongoose')
    , Schema = mongoose.Schema;

let phRFLTitleSchema = new Schema({
    title: {
        type: String,
        required: true
    },
});

let Ph_R_F_L_Title = mongoose.model('Ph_R_F_L_Title', phRFLTitleSchema);
module.exports = require('../crud_model')(Ph_R_F_L_Title);