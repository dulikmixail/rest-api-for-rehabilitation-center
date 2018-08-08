const mongoose = require('mongoose')
    , Schema = mongoose.Schema;

let evEffRobinsonIndexSchema = new Schema({
    after: {
        type: Schema.Types.ObjectId,
        ref: 'EvEffRIndMeasurement'
    },
    before: {
        type: Schema.Types.ObjectId,
        ref: 'EvEffRIndMeasurement'
    },
    afterSomeTime: {
        type: Schema.Types.ObjectId,
        ref: 'EvEffRIndMeasurement'
    }
});


let EvEffRobinsonIndex = mongoose.model('EvEffRobinsonIndex', evEffRobinsonIndexSchema);
module.exports = require('./crud_model')(EvEffRobinsonIndex);