const M_Scheme = require('../../models/all/m_scheme');

M_Scheme.create(
    [
        {
            title: 'Заспокійлива методика',
        },
        {
            title: 'Помірно-заспокійлива методикою',
        },
        {
            title: 'Збудлива методика',
        },
        {
            title: 'Помірно-збудлива методика',
        },
        {
            title: 'Гармонізуюча методика',
        },
    ],
    (err, res) => {
        if (err) throw err;
    }
);