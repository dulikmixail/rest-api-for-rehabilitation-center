const mongoose = require('mongoose')
    , Schema = mongoose.Schema;

let mInfluenceOfIndividualMassageTechniquesSchema = new Schema({
    stroke: {
        type: Schema.Types.ObjectId,
        ref: 'MClEffectsOnBody'
    },
    rubbing: {
        type: Schema.Types.ObjectId,
        ref: 'MClEffectsOnBody'
    },
    petrissage: {
        type: Schema.Types.ObjectId,
        ref: 'MClEffectsOnBody'
    }
});

let MInfluenceOfIndividualMassageTechniques = mongoose.model('MInfluenceOfIndividualMassageTechniques', mInfluenceOfIndividualMassageTechniquesSchema);
module.exports = require('./crud_model')(MInfluenceOfIndividualMassageTechniques);