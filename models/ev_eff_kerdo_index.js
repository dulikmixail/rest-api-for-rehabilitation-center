const mongoose = require('mongoose')
    , Schema = mongoose.Schema;

let evEffKerdoIndexSchema = new Schema({
    after: {
        type: Schema.Types.ObjectId,
        ref: ''
    },
    before: {
        type: Schema.Types.ObjectId,
        ref: ''
    },
    afterSomeTime: {
        type: Schema.Types.ObjectId,
        ref: ''
    }
});


let EvEffKerdoIndex = mongoose.model('EvEffKerdoIndex', evEffKerdoIndexSchema);