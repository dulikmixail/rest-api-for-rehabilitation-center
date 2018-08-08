const mongoose = require('mongoose')
    , Schema = mongoose.Schema;

let mClIndividualSignsSchema = new Schema({
    gender: {
        type: Schema.Types.ObjectId,
        ref: 'MClEffectsOnBody'
    },
    age: {
        type: Schema.Types.ObjectId,
        ref: 'MClEffectsOnBody'
    },
    physique: {
        type: Schema.Types.ObjectId,
        ref: 'MClEffectsOnBody'
    },
    location: {
        type: Schema.Types.ObjectId,
        ref: 'MClEffectsOnBody'
    },
    profession: {
        type: Schema.Types.ObjectId,
        ref: 'MClEffectsOnBody'
    },
    character: {
        type: Schema.Types.ObjectId,
        ref: 'MClEffectsOnBody'
    },
    relationToTemperatureOfEnvironment: {
        type: Schema.Types.ObjectId,
        ref: 'MClEffectsOnBody'
    },
    skin: {
        type: Schema.Types.ObjectId,
        ref: 'MClEffectsOnBody'
    }
});


let MClIndividualSigns = mongoose.model('MClIndividualSigns', mClIndividualSignsSchema);
module.exports = require('./crud_model')(MClIndividualSigns);