const mongoose = require('mongoose')
    , Schema = mongoose.Schema;

let phRFLSetOfExercisesSchema = new Schema({
    exercise: {
        type: [Schema.Types.ObjectId],
        ref: 'PhRFLSOfExImage'
    }
});

let PhRFLSetOfExercises = mongoose.model('PhRFLSetOfExercises', phRFLSetOfExercisesSchema);
module.exports = require('./crud_model')(PhRFLSetOfExercises);