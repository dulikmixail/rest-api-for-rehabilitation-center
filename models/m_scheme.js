const mongoose = require('mongoose')
    , Schema = mongoose.Schema;

let mSchemeSchema = new Schema({
    title: {
        type: String,
        required: true
    }
});

let MScheme = mongoose.model('MScheme',mSchemeSchema);