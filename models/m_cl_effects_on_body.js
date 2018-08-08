const mongoose = require('mongoose')
    , Schema = mongoose.Schema;

let mClEffectsOnBodySchema = new Schema({
    title: {
        type: String,
        required: true
    }
});

let MClEffectsOnBody = mongoose.model('MClEffectsOnBody', mClEffectsOnBodySchema);
module.exports = require('./crud_model')(MClEffectsOnBody);