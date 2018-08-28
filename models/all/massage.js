const mongoose = require('mongoose')
    , Schema = mongoose.Schema;

let massageSchema = new Schema({
    allowed: {
        type: Schema.Types.ObjectId,
        ref: 'M_Allowed'
    },
    classifier: {
        type: Schema.Types.ObjectId,
        ref: 'M_Classifier'
    },
    duration: {
        type: [Schema.Types.ObjectId],
        ref: 'M_Duration'
    },
    treatment: {
        type: Schema.Types.ObjectId,
        ref: 'M_Treatment'
    },
    influenceOfIndividualMassageTechniques: {
        type: Schema.Types.ObjectId,
        ref: 'M_Influence_Of_Individual_Massage_Techniques'
    },
    stimulatingAndCalmingEffects:{
        type: Schema.Types.ObjectId,
        ref: 'M_Stimulating_And_Calming_Effects'
    },
    scheme: {
        type: Schema.Types.ObjectId,
        ref: 'M_Scheme'
    }
});

let Massage = mongoose.model('Massage',massageSchema);
module.exports = require('../crud_model')(Massage);