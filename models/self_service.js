const mongoose = require('mongoose')
    , Schema = mongoose.Schema;

let selfServiceSchema = new Schema({
    title: {
        type: String,
        required: true
    }
});

let SelfService = mongoose.model('SelfService', selfServiceSchema);
module.exports = require('./crud_model')(SelfService);