const mongoose = require('mongoose')
    , Schema = mongoose.Schema;

let phRFLSetOfExercisesSchema = new Schema({
    exercise: {
        type: [Schema.Types.ObjectId],
        ref: 'Ph_R_F_L_S_Of_Ex_Image'
    }
});

let PhRFLSetOfExercises = mongoose.model('Ph_R_F_L_Set_Of_Exercises', phRFLSetOfExercisesSchema);
module.exports = require('../crud_model')(PhRFLSetOfExercises);