const mongoose = require('mongoose')
    , Schema = mongoose.Schema;
//Впервые / повторно
let howIncomingSchema = new Schema({
    title: {
        type: String
    }
});

let How_Incoming = mongoose.model('How_Incoming', howIncomingSchema);
module.exports = require('../crud_model')(How_Incoming);