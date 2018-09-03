const M_Treatment = require('../../models/all/m_treatment');

M_Treatment.create([
    {
        title: 'Малий',
        duration: [10, 12]
    },
    {
        title: 'Середній',
        duration: [14, 16]
    },
    {
        title: 'Максимальний',
        duration: [16, 20]
    },
    (err, res) => {
        if (err) throw err;
    }
]);
