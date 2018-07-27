const mongoose = require('mongoose')
    , Schema = mongoose.Schema;

let rehabilitationCardSchema = new Schema({
    records: {
        type: [mongoose.Types.ObjectId],
        ref: 'RCRecords'
    },
    patient: {
        type: mongoose.Types.ObjectId,
        ref: 'Patient'
    }
});

let RehabilitationCard = mongoose.model('RehabilitationCard', rehabilitationCardSchema);