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

let MClassifier = mongoose.model('MClassifier', mClassifierSchema);

let MClIndividualSigns = mongoose.model('MClIndividualSigns', mClIndividualSignsSchema);


let mClAppointmentSchema = new Schema({
    title: {
        type: String,
        required: true
    }
});

let MClAppointment = mongoose.model('MClAppointment', mClAppointmentSchema);


let mClInterventionSchema = new Schema({
    title: {
        type: String,
        required: true
    }
});

let MClIntervention = mongoose.model('MClIntervention', mClInterventionSchema);

let mClWorkerSchema = new Schema({
    title: {
        type: String,
        required: true
    }
});

let MClWorker = mongoose.model('MClWorker', mClWorkerSchema);

let mClTypeSchema = new Schema({
    title: {
        type: String,
        required: true
    }
});

let MClType = mongoose.model('MClType', mClTypeSchema);

let mClEffectsOnBodySchema = new Schema({
    title: {
        type: String,
        required: true
    }
});

let MClEffectsOnBody = mongoose.model('MClEffectsOnBody', mClEffectsOnBodySchema);