const mongoose = require('mongoose')
    , Schema = mongoose.Schema;

let modeOfMotorActivitySchema = new Schema({
    title: {
        type: String,
        require: true
    }
});

let ModeOfMotorActivity = mongoose.model('ModeOfMotorActivity', modeOfMotorActivitySchema);