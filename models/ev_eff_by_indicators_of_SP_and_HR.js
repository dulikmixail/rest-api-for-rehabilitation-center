const mongoose = require('mongoose')
    , Schema = mongoose.Schema;

let evEffByIndicatorsOfSPAndHRSchema = new Schema({
    after: {
        type: Schema.Types.ObjectId,
        ref: 'EvEffByIndOfSpAndHrMeasurement'
    },
    before: {
        type: Schema.Types.ObjectId,
        ref: 'EvEffByIndOfSpAndHrMeasurement'
    }
});

let EvEffByIndicatorsOfSPAndHR = mongoose.model('EvEffByIndicatorsOfSPAndHR', evEffByIndicatorsOfSPAndHRSchema);