const mongoose = require('mongoose')
    , Schema = mongoose.Schema;

let selfServiceSchema = new Schema({
    title: {
        type: String,
        require: true
    }
});

mongoose.model('SelfService', selfServiceSchema)