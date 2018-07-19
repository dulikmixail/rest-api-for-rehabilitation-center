const mongoose = require('mongoose')
    , Schema = mongoose.Schema;

let employeeSchema = new Schema({
    employmentDate: {
        type: Date,
        required: true,
    },
    expirationDate: {
        type: Date,
    },
    surname: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    middleName: {
        type: String,
        required: true
    },
    birthDate: {
        type: Date,
    },
    residencePlace: {
        type: String
    },
    educationFile: {
        data: Buffer,
        contentType: String
    },
    refresherCoursesDate: {
        type: Date
    },
    placeRefresherCoursesFile: {
        data: Buffer,
        contentType: String
    },
    branch: {
        type: String,
        required: true
    },
    reviews: {
        type: [String]
    },
    post: {
        type: Schema.Types.ObjectId,
        ref: 'Post',
        required: true
    }
});
let Employee = mongoose.model('Employee', employeeSchema);




//CRUD - Create Read Update Delete

//Create
module.exports.create = function (data, callback) {
    Employee
        .create(data, callback);
};

//Read
module.exports.find = function (filter, callback) {
    Employee
        .find(filter, callback)
        .populate('post');
};

module.exports.findById = function (id, callback) {
    Employee
        .findById(id, callback)
        .populate('post');
};

//Update
module.exports.update = function (filter, data, callback) {
    Employee
        .update(filter, data, callback)
        .populate('post');
};

//Delete
module.exports.delete = function (id, callback) {
    Employee
        .findByIdAndRemove(id, callback)
        .populate('post');
};