const PhRFLITitleAndValues = require('../models/ph_r_f_l_i_title_and_values');
const PhRFLIValue = require('../models/ph_r_f_l_i_value');
const PhRFLITitle = require('../models/ph_r_f_l_i_title');


PhRFLITitleAndValues.deleteAll();

let getPromiseFindModel = function (model, filter) {
    return new Promise((resolve, reject) => {
        model.find(filter, (err, res) => {
            if (err) {
                reject(err)
            } else {
                resolve(res)
            }
        });
    })
};

let getManyPromiseFindModel = function (model, arrFilters) {
    let arr = [];
    arrFilters.forEach(item => {
        arr.push(getPromiseFindModel(model, item));
    });
    return arr;
};

Promise
    .all(
        getManyPromiseFindModel(
            PhRFLIValue, [
                {title: 'не показаний'},
                {title: '6-15 хв'},
                {title: 'до 30 хв'},
                {title: 'до 50 хв'},
                {title: 'до 2 год'},
                {title: 'до 15  хв'},
                {title: '15  хв'},
                {title: '20 хв'},
                {title: '20-30 хв, з 2-4 паузами по 3 хв'},
                {title: '30 - 40 хв'},
                {title: '1 година'}
            ]
        )
    )
    .then(value => {
        let newValue = [];
        value.forEach(item => {
            item.forEach(subItem => {
                newValue.push(subItem)
            })
        });
        PhRFLITitle.create({title: 'Тривалість'}, (err, res) => {
            if (err) {
                throw (err)
            } else {
                PhRFLITitleAndValues.create({
                    title: res,
                    value: newValue[0]
                })
            }
        })
    });

// PhRFLIValue.find({title: 'не показаний'}, (err,res)=>{
//
// });

