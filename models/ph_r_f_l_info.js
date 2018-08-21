const mongoose = require('mongoose')
    , Schema = mongoose.Schema;

let phRFLInfoSchema = new Schema({
    title: {
        type: Schema.Types.ObjectId,
        ref: 'PhRFLITitle',
        required: true
    },
    value: {
        type: Schema.Types.ObjectId,
        ref: 'PhRFLIValue',
        required:true
    },

});


let PhRFLInfo = mongoose.model('PhRFLInfo',phRFLInfoSchema);
module.exports = require('./crud_model')(PhRFLInfo);