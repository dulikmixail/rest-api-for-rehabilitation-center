const mongoose = require('mongoose')
    , Schema = mongoose.Schema;
//Впервые / повторно
let typeIncomingSchema = new Schema({
    title: {
        type: String
    }
});

let Type_Incoming = mongoose.model('Type_Incoming', typeIncomingSchema);
module.exports = require('../crud_model')(Type_Incoming);