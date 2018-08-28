const mongoose = require('mongoose')
    , Schema = mongoose.Schema;


let waterTherapySchema = new Schema({
    title: {
        type: String,
        required: true
    }
});

let WaterTherapy = mongoose.model('Water_Therapy', waterTherapySchema);
module.exports = require('../crud_model')(WaterTherapy);