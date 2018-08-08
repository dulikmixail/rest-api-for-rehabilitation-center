const mongoose = require('mongoose')
    , Schema = mongoose.Schema;


let physicalRehabilitationSchema = new Schema({
    group: {
        type: Schema.Types.ObjectId,
        ref: 'PhRGroup'
    },
    forms: {
        type: [Schema.Types.ObjectId],
        ref: 'PhRForm'
    },
    allowed: {
        type: Schema.Types.ObjectId,
        ref: 'PhRAllowed'
    }
});

let PhysicalRehabilitation = mongoose.model('PhysicalRehabilitation', physicalRehabilitationSchema);
module.exports = require('./crud_model')(PhysicalRehabilitation);