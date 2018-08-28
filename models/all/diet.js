const mongoose = require('mongoose')
    , Schema = mongoose.Schema;


let dietSchema = new Schema({
    title: {
        type: String,
        required: true
    }
});

let Diet = mongoose.model('Diet', dietSchema);
module.exports = require('../crud_model')(Diet);