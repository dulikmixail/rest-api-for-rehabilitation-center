const mongoose = require('mongoose')
    , Schema = mongoose.Schema;

let mAllowedLevelSchema = new Schema({
    title: {
        type: String,
        required: true
    }
});

let MAllowedLevel = mongoose.model('MAllowedLevel', mAllowedLevelSchema);
module.exports = require('./crud_model')(MAllowedLevel);