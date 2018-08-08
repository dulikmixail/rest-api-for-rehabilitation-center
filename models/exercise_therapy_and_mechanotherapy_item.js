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

let ExerciseTherapyAndMechanotherapyItem = mongoose.model('ExerciseTherapyAndMechanotherapyItem', exerciseTherapyAndMechanotherapyItemSchema);
module.exports = require('./crud_model')(ExerciseTherapyAndMechanotherapyItem);