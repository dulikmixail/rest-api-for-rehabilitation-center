const mongoose = require('mongoose')
    , Schema = mongoose.Schema;

let treatmentSchema = new Schema({
    title: {
        type: String,
        required: true
    }
});

mongoose.model('Treatment', treatmentSchema)