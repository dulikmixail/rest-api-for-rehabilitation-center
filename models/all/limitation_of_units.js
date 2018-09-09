const mongoose = require('mongoose')
    , Schema = mongoose.Schema;


let limitationOfUnitsSchema = new Schema({
    titles: {
        type: [String],
        required: true
    }
}, {versionKey: false});

let Limitation_Of_Units = mongoose.model('Limitation_Of_Units', limitationOfUnitsSchema);
module.exports = require('../crud_model')(Limitation_Of_Units);