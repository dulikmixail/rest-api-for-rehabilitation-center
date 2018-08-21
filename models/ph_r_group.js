const mongoose = require('mongoose')
    , Schema = mongoose.Schema;

let phRGroupSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    subGroup: {
        type: [Schema.Types.ObjectId],
        ref: 'PhRSubGroup'
    }
});

let PhRGroup = mongoose.model('PhRGroup', phRGroupSchema);
module.exports = require('./crud_model')(PhRGroup);
