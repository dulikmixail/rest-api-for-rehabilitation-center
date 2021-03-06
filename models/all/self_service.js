const mongoose = require('mongoose')
    , Schema = mongoose.Schema;

let selfServiceSchema = new Schema({
    title: {
        type: String,
        required: true
    }
}, {versionKey: false});

let Self_Service = mongoose.model('Self_Service', selfServiceSchema);
module.exports = require('../crud_model')(Self_Service);