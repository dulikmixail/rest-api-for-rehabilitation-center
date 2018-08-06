const mongoose = require('mongoose')
    , Schema = mongoose.Schema;

let rehabilitationCardSchema = new Schema({
    records: {
        type: [mongoose.Types.ObjectId],
        ref: 'RCRecords'
    },
});

let RehabilitationCard = mongoose.model('RehabilitationCard', rehabilitationCardSchema);