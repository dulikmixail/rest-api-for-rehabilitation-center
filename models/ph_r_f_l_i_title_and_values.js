const mongoose = require('mongoose')
    , Schema = mongoose.Schema;

let phRFLITitleAndValuesSchema = new Schema({
    title: {
        type: Schema.Types.ObjectId,
        ref: 'PhRFLITitle',
        required: true
    },
    values: {
        type: [Schema.Types.ObjectId],
        ref: 'PhRFLIValue',
        required: true
    }
});


let PhRFLITitleAndValues = mongoose.model('PhRFLITitleAndValues', phRFLITitleAndValuesSchema);
module.exports = require('./crud_model')(PhRFLITitleAndValues);