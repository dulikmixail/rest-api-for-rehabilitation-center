const AssessmentOfFunctionalCapability = require('../models/m_treatment');

AssessmentOfFunctionalCapability.deleteAll();
AssessmentOfFunctionalCapability.create([
    {title: 'Хворий перевищує свої функціональні можливості'},
    {title: 'Хворий недооцінює свої функціональні можливості'},
    {title: 'Хворий обєктивно оцінює свої функціональні можливості'},
]);
