const mongoose = require('mongoose')
    , Schema = mongoose.Schema;

let phRAllowedSchema = new Schema({
    isAllowed: {
        type: Boolean,
        required: true
    },
    description: {
        type: String
    }
});

let PhRAllowed = mongoose.model('PhRAllowed', phRAllowedSchema);