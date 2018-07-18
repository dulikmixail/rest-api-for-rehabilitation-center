const mongoose = require('mongoose');

let postSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    }
});

let Post = mongoose.model('Post', postSchema);


//CRUD - Create Read Update Delete

//Create
module.exports.create = function (data, callback) {
    Post.create(data, callback);
};

//Read
module.exports.find = function (filter, callback) {
    Post.find(filter, callback);
};

module.exports.findById = function (id, callback) {
    Post.findById(id, callback);
};

//Update
module.exports.update = function (filter, data, callback) {
    Post.findByIdAndUpdate(filter, data, callback);
};

//Delete
module.exports.delete = function (id, callback) {
    Post.findByIdAndRemove(id, callback);
};

