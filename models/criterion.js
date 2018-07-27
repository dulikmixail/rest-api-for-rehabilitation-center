const mongoose = require('mongoose')
    , Schema = mongoose.Schema;

let criterionSchema = new Schema({
    title: {
        type: String,
        require: true
    }
});

let Criterion = mongoose.model('Criterion', criterionSchema);