const mongoose = require('mongoose')
    , Schema = mongoose.Schema;

let mAllowedSchema = new Schema({
    allowedLevel: {
        type: Schema.Types.ObjectId,
        ref: 'M_Allowed_Level',
        required: true
    },
    description: {
        type: Schema.Types.ObjectId,
        ref: 'M_Classifier',
        required: true
    }
});

let MAllowed = mongoose.model('M_Allowed', mAllowedSchema);
module.exports = require('./crud_model')(MAllowed);