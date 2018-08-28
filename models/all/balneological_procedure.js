const mongoose = require('mongoose')
    , Schema = mongoose.Schema;


let balneologicalProcedureSchema = new Schema({
    title: {
        type: String,
        required: true
    }
});

let BalneologicalProcedure = mongoose.model('Balneological_Procedure', balneologicalProcedureSchema);
module.exports = require('../crud_model')(BalneologicalProcedure);