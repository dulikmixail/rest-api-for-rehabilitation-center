const M_Cl_Group = require('../../models/all/m_cl_group');
const M_Classifier = require('../../models/all/m_classifier');
const PromiseHelper = require('../promise_helper/index');

let oneToMany = function (valueOne, valuesMany) {
    Promise.all(
        PromiseHelper.getManyFindModel(
            M_Classifier,
            valuesMany
        )
    ).then(values => {
        M_Cl_Group.create(
            {
                title: valueOne.title,
                classifier: PromiseHelper.joinAllResults(values),
            },
            err => {
                if (err) throw err;
            }
        )
    });

};

oneToMany(
    {title: 'Головна група'},
    [
        {
            title: 'За призначенням'
        },
        {
            title: 'За засобами впливу'
        },
        {
            title: 'Залежно від того, хто виконує масаж'
        },
        {
            title: 'За видом'
        },
        {
            title: 'За впливом на організм'
        },
    ]
);

oneToMany(
    {title: 'Метод впливу залежно від клінічних проявів захворювання'},
    [
        {
            title: 'Характер і форма захворювання'
        },
        {
            title: 'Стан хворого'
        },
    ]
);

oneToMany(
    {title: 'Алергічна готовність організму'},
    [
        {
            title: 'Підвищується тонуу симпато-адреналової системи'
        },
        {
            title: 'Понижується тонус симпато-адреналової системи'
        },
    ]
);

oneToMany(
    {title: 'Індивідуальні ознаки'},
    [
        {
            title: 'Стать'
        },
        {
            title: 'Вік'
        },
        {
            title: 'Тілобудова, фізична сила'
        },
        {
            title: 'Місце проживання'
        },
        {
            title: 'Професія'
        },
        {
            title: 'Характер'
        },
        {
            title: 'Відношення до температури зовнішнього середовища'
        },
        {
            title: 'Шкіра'
        },
    ]
);

oneToMany(
    {title: 'Шляхи досягнення збуджувального та заспокійливого впливу'},
    [
        {
            title: 'Погладжування'
        },
        {
            title: 'Розтирання'
        },
        {
            title: 'Розминання'
        },
        {
            title: 'Сила впливу'
        },
        {
            title: 'Швидкість рухів'
        },
        {
            title: 'Швидкість зміни сили впливу'
        },
        {
            title: 'Амплітуда рухів'
        },
        {
            title: 'Тривалість виконання окремих прийомів'
        },
        {
            title: 'Частота рухів'
        },
        {
            title: 'Ділянка впливу'
        },
        {
            title: 'Глибина впливу'
        },
    ]
);