const mongoose = require('mongoose')
    , Schema = mongoose.Schema;

let mDurationSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    numberOfUnits:{
        type: Number,
        required: true
    },
    minutes: {
        type: Number,
        required: true
    }
});


let MDuration = mongoose.model('M_Duration',mDurationSchema);
module.exports = require('../crud_model')(MDuration);