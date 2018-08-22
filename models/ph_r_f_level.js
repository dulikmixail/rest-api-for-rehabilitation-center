const mongoose = require('mongoose')
    , Schema = mongoose.Schema;

let phRFLevelSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    info: {
        type: [Schema.Types.ObjectId],
        ref: 'Ph_R_F_L_Info'
    },
    set_of_exercises: {
        type: Schema.Types.ObjectId,
        ref: 'Ph_R_F_L_Set_Of_Exercises'
    },
    mode_of_motor_activity: {
        type: Schema.Types.ObjectId,
        ref: 'Mode_Of_Motor_Activity'
    }

});

let PhRFLevel = mongoose.model('Ph_R_F_Level', phRFLevelSchema);
module.exports = require('./crud_model')(PhRFLevel);