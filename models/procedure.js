const mongoose = require('mongoose')
    , Schema = mongoose.Schema;
//Впервые / повторно
let procedureSchema = new Schema({
    title: {
        type: String
    }
});

let Procedure = mongoose.model('Procedure', procedureSchema);