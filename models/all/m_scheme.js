const mongoose = require('mongoose')
    , Schema = mongoose.Schema;

let mSchemeSchema = new Schema({
    title: {
        type: String,
        required: true
    }
}, {versionKey: false});

let M_Scheme = mongoose.model('M_Scheme',mSchemeSchema);
module.exports = require('../crud_model')(M_Scheme);