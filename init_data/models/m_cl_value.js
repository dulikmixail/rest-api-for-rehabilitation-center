const M_Cl_Value = require('../../models/all/m_cl_value');

module.exports = new Promise((resolve, reject) => {
    M_Cl_Value.create(
        [
            {title: 'Лікувальний'},
            {title: 'Гігієнічний'},
            {title: 'Спортивний'},
            {title: 'Косметичний'},

            {title: 'Мануальний масаж'},
            {title: 'Апаратний масаж'},
            {title: 'Гідромасаж'},
            {title: 'Вібромасаж'},

            {title: 'Масажист'},
            {title: 'Самомасаж'},

            {title: 'Класичний масаж'},
            {title: 'Сегментарно-рефлекторний масаж'},

            {title: 'Заспокійливий'},
            {title: 'Збудлививий'},
        ],
        (err, res) => {
            if (err) {
                reject(err)
            } else {
                resolve(res)
            }
        }
    );
});

