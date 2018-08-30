const mongoose = require('mongoose')
    , Schema = mongoose.Schema;

let mAllowedContraindicationsSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    subContraindications: {
        type: Schema.Types.ObjectId,
        ref: 'M_Allowed_Sub_Contraindications',
    }
});

let MAllowedSubContraindications = mongoose.model('M_Allowed_Sub_Contraindications', mAllowedContraindicationsSchema);
module.exports = require('../crud_model')(MAllowedSubContraindications);