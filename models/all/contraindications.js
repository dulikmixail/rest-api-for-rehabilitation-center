const mongoose = require('mongoose')
    , Schema = mongoose.Schema;

let contraindicationsSchema = new Schema({
    massageAllowed: {
        type: Schema.Types.ObjectId,
        ref: 'M_Allowed'
    }
});

let Contraindications = mongoose.model('Contraindications', contraindicationsSchema);
module.exports = require('../crud_model')(Contraindications);
