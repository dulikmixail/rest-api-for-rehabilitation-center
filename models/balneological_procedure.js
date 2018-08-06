const mongoose = require('mongoose')
    , Schema = mongoose.Schema;


let balneologicalProcedureSchema = new Schema({
    title: {
        type: String,
        required: true
    }
});

let BalneologicalProcedure = mongoose.model('BalneologicalProcedure', balneologicalProcedureSchema);