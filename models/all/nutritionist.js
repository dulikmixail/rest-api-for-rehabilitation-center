const mongoose = require('mongoose')
    , Schema = mongoose.Schema;


let nutritionistSchema = new Schema({
    title: {
        type: String,
        required: true
    }
});

let Nutritionist = mongoose.model('Nutritionist', nutritionistSchema);
module.exports = require('../crud_model')(Nutritionist);