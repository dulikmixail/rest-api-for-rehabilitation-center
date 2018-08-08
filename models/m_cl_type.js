const mongoose = require('mongoose')
    , Schema = mongoose.Schema;

let mClTypeSchema = new Schema({
    title: {
        type: String,
        required: true
    }
});

let MClType = mongoose.model('MClType', mClTypeSchema);
module.exports = require('./crud_model')(MClType);