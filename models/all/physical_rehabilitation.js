const mongoose = require('mongoose')
    , Schema = mongoose.Schema;


let physicalRehabilitationSchema = new Schema({
    group: {
        type: Schema.Types.ObjectId,
        ref: 'Ph_R_Group'
    },
    forms: {
        type: [Schema.Types.ObjectId],
        ref: 'Ph_R_Form'
    },
    allowed: {
        type: Schema.Types.ObjectId,
        ref: 'Ph_R_Allowed'
    }
});

let Physical_Rehabilitation = mongoose.model('Physical_Rehabilitation', physicalRehabilitationSchema);
module.exports = require('../crud_model')(Physical_Rehabilitation);