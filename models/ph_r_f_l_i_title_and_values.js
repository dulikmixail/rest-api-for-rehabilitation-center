const mongoose = require('mongoose')
    , Schema = mongoose.Schema;

let phRFLITitleAndValuesSchema = new Schema({
    title: {
        type: Schema.Types.ObjectId,
        ref: 'Ph_R_F_L_I_Title',
        required: true
    },
    values: {
        type: [Schema.Types.ObjectId],
        ref: 'Ph_R_F_L_I_Value',
        required: true
    }
});


let PhRFLITitleAndValues = mongoose.model('Ph_R_F_L_I_Title_And_Values', phRFLITitleAndValuesSchema);
module.exports = require('./crud_model')(PhRFLITitleAndValues);