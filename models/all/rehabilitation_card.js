const mongoose = require('mongoose')
    , Schema = mongoose.Schema;

let rehabilitationCardSchema = new Schema({
    patient: {
        type: Schema.Types.ObjectId,
        ref: 'Patient'
    },
    records: {
        type: [Schema.Types.ObjectId],
        ref: 'RC_Records'
    },

}, {versionKey: false});

let Rehabilitation_Card = mongoose.model('Rehabilitation_Card', rehabilitationCardSchema);
module.exports = require('../crud_model')(Rehabilitation_Card);