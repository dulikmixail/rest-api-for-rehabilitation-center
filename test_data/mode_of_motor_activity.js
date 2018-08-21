const ModeOfMotorActivity = require('../models/mode_of_motor_activity');

ModeOfMotorActivity.deleteAll();
ModeOfMotorActivity.create([
    {title: 'Суворий ліжковий'},
    {title: 'Розширений ліжковий'},
    {title: 'Палатний'},
    {title: 'Вільний'},
    {title: 'Щадний'},
    {title: 'Щадно-тренувальний'},
    {title: 'Тренувальний'},
    {title: 'Інтенсивно тренувальний'},
]);
