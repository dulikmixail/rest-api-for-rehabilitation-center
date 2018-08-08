const mongoose = require('mongoose')
    , Schema = mongoose.Schema;


let postSchema = new Schema({
    title: {
        type: String,
        required: true
    }
});

let Post = mongoose.model('Post', postSchema);
module.exports = require('./crud_model')(Post);

