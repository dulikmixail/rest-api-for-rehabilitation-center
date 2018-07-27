const mongoose = require('mongoose')
    , Schema = mongoose.Schema;

let phRFLevelSchema = new Schema({
    difficulty: {
        type: Number,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    info: {
        type: [mongoose.Types.ObjectId],
        ref: 'PhRFLInfo'
    }
});

let PhRFLevel = mongoose.model('PhRFLevel', phRFLevelSchema);