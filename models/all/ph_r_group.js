const mongoose = require('mongoose')
    , Schema = mongoose.Schema;

let phRGroupSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    subGroup: {
        type: [Schema.Types.ObjectId],
        ref: 'Ph_R_Sub_Group'
    }
});

let Ph_R_Group = mongoose.model('Ph_R_Group', phRGroupSchema);
module.exports = require('../crud_model')(Ph_R_Group);
