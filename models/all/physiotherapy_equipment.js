const mongoose = require('mongoose')
    , Schema = mongoose.Schema;


let physiotherapyEquipmentSchema = new Schema({
    title: {
        type: String,
        required: true
    }
});

let Physiotherapy_Equipment = mongoose.model('Physiotherapy_Equipment', physiotherapyEquipmentSchema);
module.exports = require('../crud_model')(Physiotherapy_Equipment);