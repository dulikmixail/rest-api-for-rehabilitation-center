const PhRFLITitleAndValues = require('../../models/all/ph_r_f_l_i_title_and_values');
const PhRFLIValue = require('../../models/all/ph_r_f_l_i_value');
const PhRFLITitle = require('../../models/all/ph_r_f_l_i_title');
const PromiseHelper = require('../promise_helper/index');

let oneToMany = function (modelOne, valueOne, modelMany, valuesMany) {
    Promise
        .all(
            PromiseHelper.getManyFindModel(modelMany, valuesMany)
        )
        .then(results => {
            modelOne.find(valueOne, (err, res) => {
                if (err) {
                    throw (err)
                } else {
                    PhRFLITitleAndValues.create({
                        title: res[0],
                        values: PromiseHelper.joinAllResults(results)
                    }, err => {
                        if (err) throw (err)
                    })
                }
            })
        });
};

oneToMany(
    PhRFLITitle,
    {title: 'Тривалість'},
    PhRFLIValue,
    [
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
);
oneToMany(
    PhRFLITitle,
    {title: 'Темп'},
    PhRFLIValue,
    [
        {title: 'не показаний'},
        {title: '2 м/сек (140 кр/хв)'},
        {title: 'повільний'},
        {title: 'помірний'},
        {title: 'без обмежень'},
        {title: 'середній'},
        {title: 'середній, швидкий'},
        {title: '70-80 кр/хв з 2-3 паузами по 5 хв'},
        {title: '80-90 кр/хв з 2-3 паузами по 5 хв'},
        {title: '5-6 км/год 100-110 кр/хв'},
        {title: '5-6 км/год до 120 кр/хв'},
    ]
);
oneToMany(
    PhRFLITitle,
    {title: 'Режим'},
    PhRFLIValue,
    [
        {title: 'не показаний'},
        {title: 'інтервальний'},
    ]
);
oneToMany(
    PhRFLITitle,
    {title: 'Види'},
    PhRFLIValue,
    [
        {title: 'Кегельбан, крокет, кільцекид'},
        {title: 'наст. теніс, волейбол, бадмінтон'},
        {title: 'будь які'},
    ]
);
oneToMany(
    PhRFLITitle,
    {title: 'Температура'},
    PhRFLIValue,
    [
        {title: '19-20͒° С'},
        {title: 'не нижче 20° С'},
        {title: 'без обмежень'},
    ]
);
oneToMany(
    PhRFLITitle,
    {title: 'Холодове навантаження'},
    PhRFLIValue,
    [
        {title: 'Слабка (20-25 ккал)'},
        {title: 'Середня (30-35 ккал)'},
        {title: 'Сильна (40-45 ккал)'},
        {title: 'Сильна (40-50 ккал)'},
        {title: 'Сильна ( до 50 ккал)'}
    ]
);
oneToMany(
    PhRFLITitle,
    {title: 'Середня експозиція'},
    PhRFLIValue,
    [
        {title: 'Від 15-20 до 30-80 хв'},
        {title: 'Від 20 хв до 1,5 години'},
        {title: 'Від 1 до 2 година'},
        {title: 'Від 1 до 2,5 година'},
        {title: '1-3 хв'},
        {title: '5-10 хв'},
        {title: '10 - 20 хв'},
    ]
);

oneToMany(
    PhRFLITitle,
    {title: 'Температура води'},
    PhRFLIValue,
    [
        {title: '>20͒° С'},
        {title: '>19° С'},
        {title: '16-17° С'},
        {title: '15-17° С'},
    ]
);
oneToMany(
    PhRFLITitle,
    {title: 'Темп плавання'},
    PhRFLIValue,
    [
        {title: 'повільний'},
        {title: 'Повільний і середній'},
        {title: 'середній'},
        {title: 'Середній і швидкий'},
    ]
);
oneToMany(
    PhRFLITitle,
    {title: 'Інтенсивність'},
    PhRFLIValue,
    [
        {title: 'РЭЭТ=18-29 С 5-20 кал 1/4-1 біодоза'},
        {title: 'РЭЭТ=18-29 С 10-40 кал 1/2-2,5 біодоза'},
        {title: 'РЭЭТ=18-29 С 10-70 кал 1/2-3 біодоза'},
        {title: 'РЭЭТ=18-29 С 20-100 кал 2-5 біодоза'},
        {title: '50-60 кал'},
        {title: '60-80 кал'},
        {title: 'до 80 кал'},
        {title: 'до 100 кал'},
    ]
);
oneToMany(
    PhRFLITitle,
    {title: 'Час доби'},
    PhRFLIValue,
    [
        {title: 'Ранок'},
        {title: 'Окрім 12-15 година'},
    ]
);
oneToMany(
    PhRFLITitle,
    {title: 'Метод проведення'},
    PhRFLIValue,
    [
        {title: 'Індивідуальний'},
        {title: 'Індивідуальний,  малогруповий'},
        {title: 'груповий'},
    ]
);
oneToMany(
    PhRFLITitle,
    {title: 'Місце проведення'},
    PhRFLIValue,
    [
        {title: 'Палата (на ліжку)'},
        {title: 'Палата'},
        {title: 'Коридор, Холл'},
    ]
);
oneToMany(
    PhRFLITitle,
    {title: 'Час проведення'},
    PhRFLIValue,
    [
        {title: 'Ранок'},
    ]
);
oneToMany(
    PhRFLITitle,
    {title: 'Вихідне положення'},
    PhRFLIValue,
    [
        {title: 'лежачи'},
        {title: 'лежачи, сидячи'},
        {title: 'лежачи, сидячи, стоячи'},
    ]
);
oneToMany(
    PhRFLITitle,
    {title: 'Кількість вправ'},
    PhRFLIValue,
    [
        {title: '4'},
        {title: '6'},
        {title: '8'},
        {title: '12'},
        {title: '16'},
        {title: '24'},
    ]
);

oneToMany(
    PhRFLITitle,
    {title: 'Кількість повторень вправ'},
    PhRFLIValue,
    [
        {title: '4-6'},
        {title: '6'},
        {title: '8'},
    ]
);
oneToMany(
    PhRFLITitle,
    {title: 'Складність рухів'},
    PhRFLIValue,
    [
        {title: 'В одній площині.Дрібні суглоби та м’язові групи'},
        {title: 'В одній площині послідовно.Дрібні та середні суглоби та м’язові групи'},
        {title: 'У всіх площинах послідовно. Усі суглоби та м’язові групи.Вправи на координацію рухів'},
        {title: 'В одній-двох площинах послідовно.Середні суглоби та м’язові групи'},
    ]
);
oneToMany(
    PhRFLITitle,
    {title: 'Контроль'},
    PhRFLIValue,
    [
        {title: 'Самоконтроль. Медична сестра'},
    ]
);
oneToMany(
    PhRFLITitle,
    {title: 'Співвідношення загально-зміцнювальних та дихальних вправ'},
    PhRFLIValue,
    [
        {title: '2:1'},
        {title: '1:1'},
    ]
);
oneToMany(
    PhRFLITitle,
    {title: 'Ступінь силового зусилля'},
    PhRFLIValue,
    [
        {title: 'М’язи розслаблені'},
        {title: 'Без силового зусилля'},
        {title: 'Без силового зусилля, у разі необхідності застосування засобів полегшення навантаження'},
        {title: 'Помірні силові зусилля. При захворюваннях ССС та дихальної системи натужування не показані'},

    ]
);
oneToMany(
    PhRFLITitle,
    {title: 'Максимально допустиме зростання ЧСС'},
    PhRFLIValue,
    [
        {title: 'до +24(до 30%)'},
        {title: 'до +4(до 5%)'},
        {title: 'до +8(до 10%)'},
        {title: 'до +12(до 15%)'},
        {title: 'до +16(до 20%)'},
        {title: 'до +24(до 30%)'},
    ]
);
oneToMany(
    PhRFLITitle,
    {title: 'Амплітуда'},
    PhRFLIValue,
    [
        {title: 'обмежена'},
        {title: 'середня'},
        {title: 'повна'},
    ]
);
oneToMany(
    PhRFLITitle,
    {title: 'Моторна щільність'},
    PhRFLIValue,
    [
        {title: '35 - 45 %'},
        {title: '45 - 50 %'},
        {title: '50 - 60 %'},
    ]
);
oneToMany(
    PhRFLITitle,
    {title: 'Співвідношення загально-зміцнювальних до спеціальних вправ'},
    PhRFLIValue,
    [
        {title: '3:1'},
        {title: '2:1'},
        {title: '1:1'},
    ]
);
oneToMany(
    PhRFLITitle,
    {title: 'Види вправ'},
    PhRFLIValue,
    [
        {title: 'Дихальні'},
        {title: 'Загальнофізичні до 16 вправ'},
        {title: 'Загальнофізичні більше 16 вправ'},
        {title: 'Загальнофізичні - індивідуальні'},
        {title: 'Дихальні та для дрібних м’язових груп'},
        {title: 'Загально фізичні, комплекс «Здоровя»'},
        {title: 'Будь-які, включаючи стрибки, біг, тренажери'},
    ]
);
oneToMany(
    PhRFLITitle,
    {title: 'Відстань'},
    PhRFLIValue,
    [
        {title: '2-3 км'},
        {title: '5 км'},
        {title: '12 км'},
        {title: '25км'},
        {title: 'до 3 км'},
        {title: 'до 5 км'},
        {title: 'до 12 км'},
        {title: 'до 25 км'},
        {title: 'не показаний'},
        {title: 'до 25 - 30 км'},
        {title: 'до 75 - 100 км'},
    ]
);
oneToMany(
    PhRFLITitle,
    {title: 'Швидкість'},
    PhRFLIValue,
    [
        {title: '3-5 км/год (80-90 кр/хв)'},
        {title: '4-5 км/год (80-90 кр/хв)'},
        {title: '5-6 км/год (100 - 110  кр/хв)'},
        {title: '5-6 км/год  до (120  кр/хв)'},
    ]
);
oneToMany(
    PhRFLITitle,
    {title: 'Характер місцевості'},
    PhRFLIValue,
    [
        {title: 'Рівна'},
        {title: 'Пересічна'},
    ]
);
oneToMany(
    PhRFLITitle,
    {title: 'Кут підйому'},
    PhRFLIValue,
    [
        {title: 'до 5'},
        {title: '5 - 10'},
        {title: 'до 15'},
        {title: 'більше 15'},
    ]
);
oneToMany(
    PhRFLITitle,
    {title: 'Характер, навантаження'},
    PhRFLIValue,
    [
        {title: 'Через кожні 4 дні збільшення'},
        {title: 'Поступовий'},
    ]
);
oneToMany(
    PhRFLITitle,
    {title: 'Частота'},
    PhRFLIValue,
    [
        {title: 'не показаний'},
        {title: '1-2 раз/тиждень'},
        {title: '1-3 денні походи'},
        {title: '3 денні походи'},
    ]
);
oneToMany(
    PhRFLITitle,
    {title: 'Висота'},
    PhRFLIValue,
    [
        {title: 'не показаний'},
        {title: 'до 600 - 800 м'},
        {title: 'до 2000 м'},
    ]
);
oneToMany(
    PhRFLITitle,
    {title: 'Енерговитрати'},
    PhRFLIValue,
    [
        {title: '100 ккал'},
        {title: '150 - 200 ккал'},
        {title: '260 - 300 ккал'},
        {title: '301 - 400 ккал'},
    ]
);
oneToMany(
    PhRFLITitle,
    {title: 'Належне максимальне споживання O2'},
    PhRFLIValue,
    [
        {title: '25%'},
        {title: '26 - 39 %'},
        {title: '40 - 59 %'},
        {title: '60 -75 %'},
    ]
);
oneToMany(
    PhRFLITitle,
    {title: 'Енергетичний рівень'},
    PhRFLIValue,
    [
        {title: '2,5 ккал/хв'},
        {title: '2,5 4 ккал/хв'},
        {title: '4,1 - 5,0 ккал/хв'},
        {title: '6,0 - 7,0 ккал/хв'},
    ]
);
oneToMany(
    PhRFLITitle,
    {title: 'Граничний вік'},
    PhRFLIValue,
    [
        {title: 'Чоловіки - 65р., Жінки - 60р'},
        {title: 'Чоловіки - 75 р., Жінки - 70р'},
        {title: 'Чоловіки - 55р., Жінки - 50р'},
        {title: 'Чоловіки - 50 р., Жінки - 45р'},
    ]
);