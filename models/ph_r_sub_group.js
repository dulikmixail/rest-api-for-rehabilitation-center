const mongoose = require('mongoose')
    , Schema = mongoose.Schema;

let phRSubGroupSchema = new Schema({
    title: {
        type: String,
        require: true
    }
});

let PhRSubGroup = mongoose.model('PhRSubGroup', phRSubGroupSchema);