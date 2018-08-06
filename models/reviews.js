const mongoose = require('mongoose')
    , Schema = mongoose.Schema;

let reviewSchema = new Schema({
    comment: {
        type: String,
        require: true
    },
    mark: {
        type: Number,
        min: 1,
        max: 5
    },
    patient: {
        type: Schema.Types.ObjectId,
        ref: 'Patient'
    }
});

let Review = mongoose.model('Review', reviewSchema);
