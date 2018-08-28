const mongoose = require('mongoose')
    , Schema = mongoose.Schema;

let mClWorkerSchema = new Schema({
    title: {
        type: String,
        required: true
    }
});

let MClWorker = mongoose.model('M_Cl_Worker', mClWorkerSchema);
module.exports = require('../crud_model')(MClWorker);