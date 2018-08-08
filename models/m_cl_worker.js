const mongoose = require('mongoose')
    , Schema = mongoose.Schema;

let mClWorkerSchema = new Schema({
    title: {
        type: String,
        required: true
    }
});

let MClWorker = mongoose.model('MClWorker', mClWorkerSchema);
module.exports = require('./crud_model')(MClWorker);