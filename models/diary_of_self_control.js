const mongoose = require('mongoose')
    , Schema = mongoose.Schema;

let diaryOfSelfControlSchema = new Schema({
    records: {
        type: [Schema.Types.ObjectId],
        ref: 'RCRecords'
    },
});

let DiaryOfSelfControl = mongoose.model('DiaryOfSelfControl', diaryOfSelfControlSchema);
module.exports = require('./crud_model')(DiaryOfSelfControl);