const mongoose = require('mongoose')
    , Schema = mongoose.Schema;


let exerciseTherapyAndMechanotherapyItemSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    time: {
        type: [Number]
    },
    break: {
        type: Number
    },
    compatibility: {
        type: String
    },

});

let Exercise_Therapy_And_Mechanotherapy_Item = mongoose.model('Exercise_Therapy_And_Mechanotherapy_Item', exerciseTherapyAndMechanotherapyItemSchema);
module.exports = require('../crud_model')(Exercise_Therapy_And_Mechanotherapy_Item);