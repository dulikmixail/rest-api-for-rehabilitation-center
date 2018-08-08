const mongoose = require('mongoose')
    , Schema = mongoose.Schema;

let phRFLIExerciseSchema = new Schema({
    imageFile: {
        type: String
    },
    description: {
        type: String
    }
});

let PhRFLIExercise = mongoose.model('PhRFLIExercise', phRFLIExerciseSchema);
module.exports = require('./crud_model')(PhRFLIExercise);