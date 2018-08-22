const mongoose = require('mongoose')
    , Schema = mongoose.Schema;


let physiotherapyEquipmentSchema = new Schema({
    title: {
        type: String,
        required: true
    }
});

let PhysiotherapyEquipment = mongoose.model('Physiotherapy_Equipment', physiotherapyEquipmentSchema);
module.exports = require('./crud_model')(PhysiotherapyEquipment);