const mongoose = require('mongoose')
    , Schema = mongoose.Schema;

let physicalPerformanceSchema = new Schema({
    difficulty: {
        type: Number,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    thresholdLoadInMen: {
        type: String,
        required: true
    },
    thresholdLoadInWomen: {
        type: String,
        required: true
    },
    loadValue: {
        type: String,
        required: true
    },
    trainingHeartRate: {
        type: Number,
        required: true
    }
});


let PhysicalPerformance = mongoose.model('PhysicalPerformance', physicalPerformanceSchema);