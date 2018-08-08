const mongoose = require('mongoose')
    , Schema = mongoose.Schema;

let evEffOrthostaticTestSchema = new Schema({
    after: {
        type: Schema.Types.ObjectId,
        ref: 'EvEffRIndMeasurement'
    },
    before: {
        type: Schema.Types.ObjectId,
        ref: 'EvEffRIndMeasurement'
    },
    difference: {
        type: Schema.Types.ObjectId,
        ref: 'EvEffRIndMeasurement'
    },
    conclusion: {
        type: Schema.Types.ObjectId,
        ref: 'EvEffRIndMeasurement'
    }
});

let EvEffOrthostaticTest = mongoose.model('EvEffOrthostaticTest', evEffOrthostaticTestSchema);
module.exports = require('./crud_model')(EvEffOrthostaticTest);