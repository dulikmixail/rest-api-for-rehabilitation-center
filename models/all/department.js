const mongoose = require('mongoose')
    , Schema = mongoose.Schema;


let departmentSchema = new Schema({
    title: {
        type: String,
        required: true
    }
});

let Department = mongoose.model('Department', departmentSchema);
module.exports = require('../crud_model')(Department);