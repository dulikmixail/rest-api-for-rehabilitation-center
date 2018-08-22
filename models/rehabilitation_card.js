const mongoose = require('mongoose')
    , Schema = mongoose.Schema;

let rehabilitationCardSchema = new Schema({
    records: {
        type: [Schema.Types.ObjectId],
        ref: 'RC_Records'
    },
});

let RehabilitationCard = mongoose.model('Rehabilitation_Card', rehabilitationCardSchema);
module.exports = require('./crud_model')(RehabilitationCard);