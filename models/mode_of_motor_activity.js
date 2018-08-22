const mongoose = require('mongoose')
    , Schema = mongoose.Schema;

let modeOfMotorActivitySchema = new Schema({
    title: {
        type: String,
        required: true
    }
});

let ModeOfMotorActivity = mongoose.model('Mode_Of_Motor_Activity', modeOfMotorActivitySchema);
module.exports = require('./crud_model')(ModeOfMotorActivity);