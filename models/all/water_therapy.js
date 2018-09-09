const mongoose = require('mongoose')
    , Schema = mongoose.Schema;


let waterTherapySchema = new Schema({
    title: {
        type: String,
        required: true
    }
}, {versionKey: false});

let Water_Therapy = mongoose.model('Water_Therapy', waterTherapySchema);
module.exports = require('../crud_model')(Water_Therapy);