const MTreatment = require('../models/m_treatment');

MTreatment.deleteAll();
MTreatment.create([
    {title: 'Лікарняний'},
    {title: 'Після лікарняний '},
]);
