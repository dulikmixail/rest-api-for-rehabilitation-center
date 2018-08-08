const mongoose = require('mongoose')
    , Schema = mongoose.Schema;

let mClAppointmentSchema = new Schema({
    title: {
        type: String,
        required: true
    }
});

let MClAppointment = mongoose.model('MClAppointment', mClAppointmentSchema);
module.exports = require('./crud_model')(MClAppointment);