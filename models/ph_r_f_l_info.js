const mongoose = require('mongoose')
    , Schema = mongoose.Schema;

let phRFLInfoSchema = new Schema({
    title: {
        type: String,
        require: true
    },
    value: {
        type: String,
        require:true
    },
    exercises: {
        type: [mongoose.Types.ObjectId],
        ref: 'PhRFLIExercise'
    }
});


let PhRFLInfo = mongoose.model('PhRFLInfo',phRFLInfoSchema);
module.exports = require('./crud_model')(PhRFLInfo);