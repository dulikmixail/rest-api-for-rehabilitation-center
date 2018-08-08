const mongoose = require('mongoose')
    , Schema = mongoose.Schema;


let genderSchema = new Schema({
    title: {
        type: String,
        required: true
    }
});

let Gender = mongoose.model('Gender', genderSchema);
module.exports = require('./crud_model')(Gender);