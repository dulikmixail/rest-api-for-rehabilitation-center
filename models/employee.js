const mongoose = require('mongoose')
    , Schema = mongoose.Schema;

let employeeSchema = new Schema({
    itemNo: {
        type: Number,
        required: true
    },
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
        type: String
    },
    refresherCoursesDate: {
        type: Date
    },
    placeRefresherCoursesFile: {
        type: String
    },
    branch: {
        type: [Schema.Types.ObjectId],
        ref: 'Branch'
    },
    reviews: {
        type: [Schema.Types.ObjectId],
        ref: 'Review'
    },
    post: {
        type: Schema.Types.ObjectId,
        ref: 'Post',
        required: true
    },
    login: {
        type: String,
        required: true
    },
    password: {
        type: String,
        select: false,
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