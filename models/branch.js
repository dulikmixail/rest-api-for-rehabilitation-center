const mongoose = require('mongoose')
    , Schema = mongoose.Schema;


let branchSchema = new Schema({
    title: {
        type: String,
        required: true
    }
});

let Branch = mongoose.model('Branch', branchSchema);