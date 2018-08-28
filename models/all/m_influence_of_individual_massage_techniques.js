const mongoose = require('mongoose')
    , Schema = mongoose.Schema;

let mInfluenceOfIndividualMassageTechniquesSchema = new Schema({
    stroke: {
        type: Schema.Types.ObjectId,
        ref: 'M_Cl_Effects_On_Body'
    },
    rubbing: {
        type: Schema.Types.ObjectId,
        ref: 'M_Cl_Effects_On_Body'
    },
    petrissage: {
        type: Schema.Types.ObjectId,
        ref: 'M_Cl_Effects_On_Body'
    }
});

let MInfluenceOfIndividualMassageTechniques = mongoose.model('M_Influence_Of_Individual_Massage_Techniques', mInfluenceOfIndividualMassageTechniquesSchema);
module.exports = require('../crud_model')(MInfluenceOfIndividualMassageTechniques);