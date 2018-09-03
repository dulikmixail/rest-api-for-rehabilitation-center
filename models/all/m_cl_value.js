const mongoose = require('mongoose')
    , Schema = mongoose.Schema;

let mClValueSchema = new Schema({
    title: {
        type: String,
        required: true
    },
});


let M_Cl_Value = mongoose.model('M_Cl_Value', mClValueSchema);
module.exports = require('../crud_model')(M_Cl_Value);