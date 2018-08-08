const mongoose = require('mongoose')
    , Schema = mongoose.Schema;

let mClassifierSchema = new Schema({
    appointment: {
        type: Schema.Types.ObjectId,
        ref: 'MClAppointment'
    },
    intervention: {
        type: Schema.Types.ObjectId,
        ref: 'MClIntervention'
    },
    worker: {
        type: Schema.Types.ObjectId,
        ref: 'MClWorker'
    },
    type: {
        type: Schema.Types.ObjectId,
        ref: 'MClType'
    },
    effectsOnBody: {
        type: Schema.Types.ObjectId,
        ref: 'MClEffectsOnBody'
    },
    characterAndForm: {
        type: Schema.Types.ObjectId,
        ref: 'MClEffectsOnBody'
    },
    conditionOfPatient: {
        type: Schema.Types.ObjectId,
        ref: 'MClEffectsOnBody'
    },
    toneOfSympathoadrenalSystem: {
        type: Schema.Types.ObjectId,
        ref: 'MClEffectsOnBody'
    },
    individualSigns: {
        type: Schema.Types.ObjectId,
        ref: 'MClIndividualSigns'
    }
});


let MClassifier = mongoose.model('MClassifier', mClassifierSchema);
module.exports = require('./crud_model')(MClassifier);