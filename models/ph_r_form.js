const mongoose = require('mongoose')
    , Schema = mongoose.Schema;

let phRFormSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    level : {
        type: [Schema.Types.ObjectId],
        ref: 'Ph_R_F_Level'
    }
});

let PhRForm = mongoose.model('Ph_R_Form', phRFormSchema);
module.exports = require('./crud_model')(PhRForm);