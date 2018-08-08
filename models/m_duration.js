const mongoose = require('mongoose')
    , Schema = mongoose.Schema;

let mDurationSchema = new Schema({
    title: {
        type: String,
        require: true
    },
    numberOfUnits:{
        type: Number,
        require: true
    },
    minutes: {
        type: Number,
        require: true
    }
});


let MDuration = mongoose.model('MDuration',mDurationSchema);
module.exports = require('./crud_model')(MDuration);