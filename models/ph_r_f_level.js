const mongoose = require('mongoose')
    , Schema = mongoose.Schema;

let phRFLevelSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    info: {
        type: [Schema.Types.ObjectId],
        ref: 'PhRFLInfo'
    },
    set_of_exercises: {
        type: Schema.Types.ObjectId,
        ref: 'PhRFLSetOfExercises'
    },
    mode_of_motor_activity: {
        type: Schema.Types.ObjectId,
        ref: 'ModeOfMotorActivity'
    }

});

let PhRFLevel = mongoose.model('PhRFLevel', phRFLevelSchema);
module.exports = require('./crud_model')(PhRFLevel);