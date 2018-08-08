const mongoose = require('mongoose')
    , Schema = mongoose.Schema;


let physiotherapyEquipmentSchema = new Schema({
    title: {
        type: String,
        required: true
    }
});

let PhysiotherapyEquipment = mongoose.model('PhysiotherapyEquipment', physiotherapyEquipmentSchema);
module.exports = require('./crud_model')(PhysiotherapyEquipment);