const SelfService = require('../models/m_treatment');

SelfService.deleteAll();
SelfService.create([
    {title: 'Не обмежена'},
    {title: 'З використанням допоміжних засобів'},
    {title: 'З використанням допоміжних засобів та з допомогою інших осіб'},
    {title: 'Не здатність до самообслуговування та повна залежність від інших осіб'},
]);
