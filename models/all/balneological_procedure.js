const mongoose = require('mongoose')
    , Schema = mongoose.Schema;


let balneologicalProcedureSchema = new Schema({
    title: {
        type: String,
        required: true
    }
});

let Balneological_Procedure = mongoose.model('Balneological_Procedure', balneologicalProcedureSchema);
module.exports = require('../crud_model')(Balneological_Procedure);