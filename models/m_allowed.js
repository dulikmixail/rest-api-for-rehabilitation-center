const mongoose = require('mongoose')
    , Schema = mongoose.Schema;

let mAllowedSchema = new Schema({
    allowedLevel: {
        type: Schema.Types.ObjectId,
        ref: 'MAllowedLevel',
        required: true
    },
    description: {
        type: Schema.Types.ObjectId,
        ref: 'MClassifier',
        required: true
    }
});

let MAllowed = mongoose.model('MAllowed', mAllowedSchema);
module.exports = require('./crud_model')(MAllowed);