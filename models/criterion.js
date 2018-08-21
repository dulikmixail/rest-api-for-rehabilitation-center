const mongoose = require('mongoose')
    , Schema = mongoose.Schema;

let criterionSchema = new Schema({
    title: {
        type: String,
        required: true
    }
});

let Criterion = mongoose.model('Criterion', criterionSchema);
module.exports = require('./crud_model')(Criterion);