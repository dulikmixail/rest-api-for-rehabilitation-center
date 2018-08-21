const mongoose = require('mongoose')
    , Schema = mongoose.Schema;

let phRFormSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    level : {
        type: [Schema.Types.ObjectId],
        ref: 'PhRFLevel'
    }
});

let PhRForm = mongoose.model('PhRForm', phRFormSchema);
module.exports = require('./crud_model')(PhRForm);