const mongoose = require('mongoose')
    , Schema = mongoose.Schema;

let mClInterventionSchema = new Schema({
    title: {
        type: String,
        required: true
    }
});

let MClIntervention = mongoose.model('MClIntervention', mClInterventionSchema);
module.exports = require('./crud_model')(MClIntervention);