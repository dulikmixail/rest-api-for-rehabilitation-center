const PhRForm = require('../models/ph_r_form');
const PhRFLevel = require('../models/ph_r_f_level');
const PhRFLInfo = require('../models/ph_r_f_l_info');
const PhRFLIExercise = require('../models/ph_r_f_l_s_of_ex_image');

PhRForm.deleteAll();
PhRFLevel.deleteAll();
PhRFLInfo.deleteAll();
PhRFLIExercise.deleteAll();

PhRForm.create([
    {
        title: 'РГ - Ранкова гімнастика'
    },
    {
        title: 'ЛГ - Лікувальна гімнастика'
    },
    {
        title: 'СЗ - Самостійні заняття'
    },
    {
        title: 'Механо-терапія'
    },
    {
        title: 'Фізіотерапія'
    },
    {
        title: 'Бальнео-терапія'
    },
    {
        title: 'Харчування'
    },
    {
        title: 'Масаж'
    },
    {
        title: 'Мультимедійні засоби'
    },
    {
        title: 'Теренкур'
    },
    {
        title: 'Прогулянки'
    },
    {
        title: 'Їзда на велосипеді'
    },
    {
        title: 'Катання верхи'
    },
    {
        title: 'Катання на лижах'
    },
    {
        title: 'Ходьба (Нордична)'
    },
], (err, res) => {
    // console.log(res);
});





let promise1 = new Promise((resolve, reject) => {
    PhRFLInfo.create(
        [
            {
                title: 'Тривалість',
                value: 'не показаний'
            },
            {
                title: 'Темп',
                value: 'не показаний'
            },
            {
                title: 'Режим',
                value: 'не показаний'
            },

        ],
        (err, res) => {
            PhRFLevel.create(
                {
                    difficulty: 1,
                    title: 'Режим I (щадний)',
                    info: res
                },
                (err, res) => {
                    err ? reject(err) : resolve(res);
                }
            )
        }
    )
});

let promise2 = new Promise((resolve, reject) => {
    PhRFLInfo.create(
        [
            {
                title: 'Тривалість',
                value: 'не показаний'
            },
            {
                title: 'Темп',
                value: 'не показаний'
            },
            {
                title: 'Режим',
                value: 'не показаний'
            },

        ],
        (err, res) => {
            PhRFLevel.create(
                {
                    difficulty: 2,
                    title: 'Режим II (щадно-тренувальний)',
                    info: res
                },
                (err, res) => {
                    err ? reject(err) : resolve(res);
                }
            )
        }
    )
});

let promise3 = new Promise((resolve, reject) => {
    PhRFLInfo.create(
        [
            {
                title: 'Тривалість',
                value: '6-15 хв'
            },
            {
                title: 'Темп',
                value: '2 м/сек (140 кр/хв)'
            },
            {
                title: 'Режим',
                value: 'інтервальний'
            },

        ],
        (err, res) => {
            PhRFLevel.create(
                {
                    difficulty: 3,
                    title: 'Режим III (тренувальний)',
                    info: res
                },
                (err, res) => {
                    err ? reject(err) : resolve(res);
                }
            )
        }
    )
});

let promise4 = new Promise((resolve, reject) => {
    PhRFLInfo.create(
        [
            {
                title: 'Тривалість',
                value: '6-15 хв'
            },
            {
                title: 'Темп',
                value: '2 м/сек (140 кр/хв)'
            },
            {
                title: 'Режим',
                value: 'інтервальний'
            },

        ],
        (err, res) => {
            PhRFLevel.create(
                {
                    difficulty: 4,
                    title: 'Режим IV (інтенсивно-тренувальний)',
                    info: res
                },
                (err, res) => {
                    err ? reject(err) : resolve(res);
                }
            )
        }
    )
});


Promise.all([promise1, promise2, promise3, promise4]).then(values => {
    PhRForm.create(
        {
            title: 'Біг',
            level: values
        },
    );
});

let promise5 = new Promise((resolve, reject) => {
    PhRFLInfo.create(
        [
            {
                title: 'Темп',
                value: 'повільний'
            },
            {
                title: 'Види',
                value: 'Кегельбан, крокет, кільцекид'
            },
            {
                title: 'Тривалість',
                value: 'до 30 хв'
            },

        ],
        (err, res) => {
            PhRFLevel.create(
                {
                    difficulty: 1,
                    title: 'Режим I (щадний)',
                    info: res
                },
                (err, res) => {
                    err ? reject(err) : resolve(res);
                }
            )
        }
    )
});

let promise6 = new Promise((resolve, reject) => {
    PhRFLInfo.create(
        [
            {
                title: 'Темп',
                value: 'повільний'
            },
            {
                title: 'Види',
                value: 'наст. теніс, волейбол, бадмінтон'
            },
            {
                title: 'Тривалість',
                value: 'до 50 хв'
            },

        ],
        (err, res) => {
            PhRFLevel.create(
                {
                    difficulty: 2,
                    title: 'Режим II (щадно-тренувальний)',
                    info: res
                },
                (err, res) => {
                    err ? reject(err) : resolve(res);
                }
            )
        }
    )
});

let promise7 = new Promise((resolve, reject) => {
    PhRFLInfo.create(
        [
            {
                title: 'Темп',
                value: 'без обмежень'
            },
            {
                title: 'Види',
                value: 'будь які'
            },
            {
                title: 'Тривалість',
                value: 'до 2 год'
            },

        ],
        (err, res) => {
            PhRFLevel.create(
                {
                    difficulty: 3,
                    title: 'Режим III (тренувальний)',
                    info: res
                },
                (err, res) => {
                    err ? reject(err) : resolve(res);
                }
            )
        }
    )
});

let promise8 = new Promise((resolve, reject) => {
    PhRFLInfo.create(
        [
            {
                title: 'Темп',
                value: 'без обмежень'
            },
            {
                title: 'Види',
                value: 'будь які'
            },
            {
                title: 'Тривалість',
                value: 'до 2 год'
            },

        ],
        (err, res) => {
            PhRFLevel.create(
                {
                    difficulty: 4,
                    title: 'Режим IV (інтенсивно-тренувальний)',
                    info: res
                },
                (err, res) => {
                    err ? reject(err) : resolve(res);
                }
            )
        }
    )
});


Promise.all([promise5, promise6, promise7, promise8]).then(values => {
    PhRForm.create(
        {
            title: 'Ігрові вправи',
            level: values
        },
    );
});

let promise9 = new Promise((resolve, reject) => {
    PhRFLInfo.create(
        [
            {
                title: 'Температура',
                value: '9-20͒° С'
            },
            {
                title: 'Холодове навантаження ',
                value: 'Слабка (20-25 ккал)'
            },
            {
                title: 'Середня експозиція',
                value: 'Від 15-20 до 30-80 хв'
            },

        ],
        (err, res) => {
            PhRFLevel.create(
                {
                    difficulty: 1,
                    title: 'Режим I (щадний)',
                    info: res
                },
                (err, res) => {
                    err ? reject(err) : resolve(res);
                }
            )
        }
    )
});

let promise10 = new Promise((resolve, reject) => {
    PhRFLInfo.create(
        [
            {
                title: 'Температура',
                value: 'не нижче 20° С'
            },
            {
                title: 'Холодове навантаження ',
                value: 'Середня (30-35 ккал)'
            },
            {
                title: 'Середня експозиція',
                value: 'Від 20 хв до 1,5 години'
            },

        ],
        (err, res) => {
            PhRFLevel.create(
                {
                    difficulty: 2,
                    title: 'Режим II (щадно-тренувальний)',
                    info: res
                },
                (err, res) => {
                    err ? reject(err) : resolve(res);
                }
            )
        }
    )
});

let promise11 = new Promise((resolve, reject) => {
    PhRFLInfo.create(
        [
            {
                title: 'Температура',
                value: 'Без обмежень'
            },
            {
                title: 'Холодове навантаження ',
                value: 'Сильна (40-45 ккал)'
            },
            {
                title: 'Середня експозиція',
                value: 'Від 1 до 2 година'
            },

        ],
        (err, res) => {
            PhRFLevel.create(
                {
                    difficulty: 3,
                    title: 'Режим III (тренувальний)',
                    info: res
                },
                (err, res) => {
                    err ? reject(err) : resolve(res);
                }
            )
        }
    )
});

let promise12 = new Promise((resolve, reject) => {
    PhRFLInfo.create(
        [
            {
                title: 'Температура',
                value: 'Без обмежень'
            },
            {
                title: 'Холодове навантаження ',
                value: 'Сильна (40-50 ккал)'
            },
            {
                title: 'Середня експозиція',
                value: 'Від 1 до 2,5 година'
            },

        ],
        (err, res) => {
            PhRFLevel.create(
                {
                    difficulty: 4,
                    title: 'Режим IV (інтенсивно-тренувальний)',
                    info: res
                },
                (err, res) => {
                    err ? reject(err) : resolve(res);
                }
            )
        }
    )
});

Promise.all([promise9, promise10, promise11, promise12]).then(values => {
    PhRForm.create(
        {
            title: 'Гартування на повітрі',
            level: values
        },
    );
});

let promise13 = new Promise((resolve, reject) => {
    PhRFLInfo.create(
        [
            {
                title: 'Температура води',
                value: '>20͒° С'
            },
            {
                title: 'Холодове навантаження',
                value: 'Слабка (20-25 ккал)'
            },
            {
                title: 'Середня експозиція',
                value: '1-3 хв'
            },

        ],
        (err, res) => {
            PhRFLevel.create(
                {
                    difficulty: 1,
                    title: 'Режим IV (інтенсивно-тренувальний)',
                    info: res
                },
                (err, res) => {
                    err ? reject(err) : resolve(res);
                }
            )
        }
    )
});

// Promise.all([promise13, promise14, promise15, promise16]).then(values => {
//     PhRForm.create(
//         {
//             title: 'Гартування на повітрі',
//             level: values
//         },
//     );
// });