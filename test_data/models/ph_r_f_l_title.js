const PhRFLTitle = require('../../models/all/ph_r_f_l_title');

let arr = [
    {title: 'Режим I (щадний)'},
    {title: 'Режим II (щадно-тренувальний)'},
    {title: 'Режим III (тренувальний)'},
    {title: 'Режим IV (інтенсивно-тренувальний)'},
    {title: 'Режим Суворий Ліжковий'},
    {title: 'Режим Ліжковий'},
    {title: 'Режим Палатний'},
    {title: 'Режим Вільний'},
];

module.exports = new Promise((resolve, reject) => {
    PhRFLTitle.create(arr, (err, res) => {
        if (err) {
            reject(err)
        } else {
            resolve(res)
        }
    });
});


