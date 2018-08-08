const mongoose = require('mongoose')
    , Schema = mongoose.Schema;

let mStimulatingAndCalmingEffectsSchema = new Schema({
    intensity: {
        type: Schema.Types.ObjectId,
        ref: 'MClEffectsOnBody'
    },
    movementSpeed: {
        type: Schema.Types.ObjectId,
        ref: 'MClEffectsOnBody'
    },
    rateOfChangeIntensity: {
        type: Schema.Types.ObjectId,
        ref: 'MClEffectsOnBody'
    },
    amplitudeOfMovements: {
        type: Schema.Types.ObjectId,
        ref: 'MClEffectsOnBody'
    },
    durationOfIndividualSessions: {
        type: Schema.Types.ObjectId,
        ref: 'MClEffectsOnBody'
    },
    frequencyOfMovements: {
        type: Schema.Types.ObjectId,
        ref: 'MClEffectsOnBody'
    },
    siteOfImpact: {
        type: Schema.Types.ObjectId,
        ref: 'MClEffectsOnBody'
    },
    depthOfImpact: {
        type: Schema.Types.ObjectId,
        ref: 'MClEffectsOnBody'
    }

});

let MStimulatingAndCalmingEffects = mongoose.model('MStimulatingAndCalmingEffects', mStimulatingAndCalmingEffectsSchema);
module.exports = require('./crud_model')(MStimulatingAndCalmingEffects);