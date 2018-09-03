const mongoose = require('mongoose')
    , Schema = mongoose.Schema;

let mAllowedLevelSchema = new Schema({
    title: {
        type: String,
        required: true
    }
});

let M_Allowed_Level = mongoose.model('M_Allowed_Level', mAllowedLevelSchema);
module.exports = require('../crud_model')(M_Allowed_Level);