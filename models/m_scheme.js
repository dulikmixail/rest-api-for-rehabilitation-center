const mongoose = require('mongoose')
    , Schema = mongoose.Schema;

let mSchemeSchema = new Schema({
    title: {
        type: String,
        required: true
    }
});

let MScheme = mongoose.model('M_Scheme',mSchemeSchema);
module.exports = require('./crud_model')(MScheme);