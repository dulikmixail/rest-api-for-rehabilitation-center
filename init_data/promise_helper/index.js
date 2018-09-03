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

let joinAllArrayResults = function (results) {
    let allResults = [];
    results.forEach(item => {
        item.forEach(subItem => {
            allResults.push(subItem)
        })
    });
    return allResults;
};

let oneToOne = function (model1, values1, model2, values2, callback) {
    Promise.all(
        [
            new Promise(resolve => {
                Promise.all(getManyPromiseFindModel(model1, values1)).then(values => {
                    resolve(joinAllArrayResults(values))
                });
            }),
            new Promise(resolve => {
                Promise.all(getManyPromiseFindModel(model2, values2)).then(values => {
                    resolve(joinAllArrayResults(values))
                });
            })
        ]
    ).then(values => {
        callback(values)
    });
};

module.exports.getFindModel = getPromiseFindModel;
module.exports.getManyFindModel = getManyPromiseFindModel;
module.exports.joinAllResults = joinAllArrayResults;
module.exports.oneToOne = oneToOne;