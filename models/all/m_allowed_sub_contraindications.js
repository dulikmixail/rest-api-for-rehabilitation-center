const mongoose = require('mongoose')
    , Schema = mongoose.Schema;

let mAllowedSubContraindicationsSchema = new Schema({
    title: {
        type: String,
        required: true
    },
});

let M_Allowed_Sub_Contraindications = mongoose.model('M_Allowed_Sub_Contraindications', mAllowedSubContraindicationsSchema);
module.exports = require('../crud_model')(M_Allowed_Sub_Contraindications);