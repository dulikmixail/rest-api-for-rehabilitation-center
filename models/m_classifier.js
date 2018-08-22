const mongoose = require('mongoose')
    , Schema = mongoose.Schema;

let mClassifierSchema = new Schema({
    appointment: {
        type: Schema.Types.ObjectId,
        ref: 'M_Cl_Appointment'
    },
    intervention: {
        type: Schema.Types.ObjectId,
        ref: 'M_Cl_Intervention'
    },
    worker: {
        type: Schema.Types.ObjectId,
        ref: 'M_Cl_Worker'
    },
    type: {
        type: Schema.Types.ObjectId,
        ref: 'M_Cl_Type'
    },
    effectsOnBody: {
        type: Schema.Types.ObjectId,
        ref: 'M_Cl_Effects_On_Body'
    },
    characterAndForm: {
        type: Schema.Types.ObjectId,
        ref: 'M_Cl_Effects_On_Body'
    },
    conditionOfPatient: {
        type: Schema.Types.ObjectId,
        ref: 'M_Cl_Effects_On_Body'
    },
    toneOfSympathoadrenalSystem: {
        type: Schema.Types.ObjectId,
        ref: 'M_Cl_Effects_On_Body'
    },
    individualSigns: {
        type: Schema.Types.ObjectId,
        ref: 'M_Cl_Individual_Signs'
    }
});


let MClassifier = mongoose.model('M_Classifier', mClassifierSchema);
module.exports = require('./crud_model')(MClassifier);