const mongoose = require('mongoose')
    , Schema = mongoose.Schema;

let examinationSchema = new Schema({
    title:{
        type: String,
        require: true
    },
    report: {
      type: String
    },
    use: {
        type: String
    },
    date:{
      type: Date
    },
    physicalRehabilitation: {
        type: Schema.Types.ObjectId,
        ref: 'PhysicalRehabilitation'
    }
});

let Examination = mongoose.model('Examination',examinationSchema);