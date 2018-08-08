const mongoose = require('mongoose')
    , Schema = mongoose.Schema;

let massageSchema = new Schema({
    allowed: {
        type: Schema.Types.ObjectId,
        ref: 'MAllowed'
    },
    classifier: {
        type: Schema.Types.ObjectId,
        ref: 'MClassifier'
    },
    duration: {
        type: [Schema.Types.ObjectId],
        ref: 'MDuration'
    },
    treatment: {
        type: Schema.Types.ObjectId,
        ref: 'MTreatment'
    },
    influenceOfIndividualMassageTechniques: {
        type: Schema.Types.ObjectId,
        ref: 'MInfluenceOfIndividualMassageTechniques'
    },
    stimulatingAndCalmingEffects:{
        type: Schema.Types.ObjectId,
        ref: 'MStimulatingAndCalmingEffects'
    },
    scheme: {
        type: Schema.Types.ObjectId,
        ref: 'MScheme'
    }
});

let Massage = mongoose.model('Massage',massageSchema);
module.exports = require('./crud_model')(Massage);