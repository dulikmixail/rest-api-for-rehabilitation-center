const mongoose = require('mongoose')
    , Schema = mongoose.Schema;
//Впервые / повторно
let typeIncomingSchema = new Schema({
    title: {
        type: String
    }
});

let TypeIncoming = mongoose.model('TypeIncoming', typeIncomingSchema);
module.exports = require('./crud_model')(TypeIncoming);