const mongoose = require('mongoose')
    , Schema = mongoose.Schema;

let mStimulatingAndCalmingEffectsSchema = new Schema({
    intensity: {
        type: Schema.Types.ObjectId,
        ref: 'M_Cl_Effects_On_Body'
    },
    movementSpeed: {
        type: Schema.Types.ObjectId,
        ref: 'M_Cl_Effects_On_Body'
    },
    rateOfChangeIntensity: {
        type: Schema.Types.ObjectId,
        ref: 'M_Cl_Effects_On_Body'
    },
    amplitudeOfMovements: {
        type: Schema.Types.ObjectId,
        ref: 'M_Cl_Effects_On_Body'
    },
    durationOfIndividualSessions: {
        type: Schema.Types.ObjectId,
        ref: 'M_Cl_Effects_On_Body'
    },
    frequencyOfMovements: {
        type: Schema.Types.ObjectId,
        ref: 'M_Cl_Effects_On_Body'
    },
    siteOfImpact: {
        type: Schema.Types.ObjectId,
        ref: 'M_Cl_Effects_On_Body'
    },
    depthOfImpact: {
        type: Schema.Types.ObjectId,
        ref: 'M_Cl_Effects_On_Body'
    }

});

let MStimulatingAndCalmingEffects = mongoose.model('M_Stimulating_And_Calming_Effects', mStimulatingAndCalmingEffectsSchema);
module.exports = require('./crud_model')(MStimulatingAndCalmingEffects);