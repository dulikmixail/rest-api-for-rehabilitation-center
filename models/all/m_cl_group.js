const mongoose = require('mongoose')
    , Schema = mongoose.Schema;

let mClGroupSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    classifier:{
        type: [Schema.Types.ObjectId],
        ref: 'M_Cl_Group'
    },
    children: {
        type: [Schema.Types.ObjectId],
        ref: 'M_Classifier'
    }
}, {versionKey: false});


let M_Cl_Group = mongoose.model('M_Cl_Group', mClGroupSchema);
module.exports = require('../crud_model')(M_Cl_Group);