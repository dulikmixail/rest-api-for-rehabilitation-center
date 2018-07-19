const mongoose = require('mongoose')
    , Schema = mongoose.Schema;
//Впервые / повторно
let howIncomingSchema = new Schema({
    title: {
        type: String
    }
});

let HowIncoming = mongoose.model('HowIncoming', howIncomingSchema);