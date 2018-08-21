const mongoose = require('mongoose')
    , Schema = mongoose.Schema;

let phRSubGroupSchema = new Schema({
    title: {
        type: String,
        required: true
    }
});

let PhRSubGroup = mongoose.model('PhRSubGroup', phRSubGroupSchema);
module.exports = require('./crud_model')(PhRSubGroup);