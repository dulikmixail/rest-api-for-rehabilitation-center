const mongoose = require('mongoose')
    , Schema = mongoose.Schema;

let evEffAdaptationPotentialBayevskySchema = new Schema({
    after: {
        type: Schema.Types.ObjectId,
        ref: 'EvEffAdPBMeasurement'
    },
    before: {
        type: Schema.Types.ObjectId,
        ref: 'EvEffAdPBMeasurement'
    },
    afterSomeTime: {
        type: Schema.Types.ObjectId,
        ref: 'EvEffAdPBMeasurement'
    }
});

let EvEffAdaptationPotentialBayevsky = mongoose.model('EvEffAdaptationPotentialBayevsky', evEffAdaptationPotentialBayevskySchema);