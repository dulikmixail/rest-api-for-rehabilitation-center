const express = require('express');
const mongoose = require('mongoose');
const config = require('config');
const morgan = require('morgan');
const app = express();
const db = mongoose.connection;

mongoose.connect(config.DBHost, {useNewUrlParser: true, keepAlive: 1, connectTimeoutMS: 30000});

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    console.log("Connect to DB " + config.DBHost + " SUCCESS");
    Promise.all(
        [
            require('./init_data')
        ]
    ).then(() => {
        console.log('Data initialization successful');
        // require('./test_data');
    })
});

app.set('port', process.env.PORT || 3000);

//не показывать логи в тестовом окружении
if (config.util.getEnv('NODE_ENV') !== 'test') {
    //morgan для вывода логов в консоль
    app.use(morgan('combined')); //'combined' выводит логи в стиле apache
}

app.use(express.urlencoded({extended: false}));
app.use(express.json());

const indexRouter = require('./routes/index');

function getRouters() {
    // 'MongooseModel', '/RoutPath'
    let crudRouters = [
        'assessment_of_functional_capability', '/assessment_of_functional_capabilities',
        'branch', '/branches',
        'employee', '/employees',
        'post', '/posts',
        'exercise_therapy_and_mechanotherapy_item', '/exercise_therapy_and_mechanotherapy_items'
    ];
    let routers = [];
    for (let i = 0; i < crudRouters.length; i += 2) {
        routers.push(require('./routes/crud_router')(crudRouters[i], crudRouters[i + 1]))
    }
    return routers;
}

app.use('/', indexRouter);
app.use('/api', getRouters());


//start server
app.listen(app.get('port'), () => {
    console.log('Server start localhost:' + app.get('port') + '. Go go next!')
});

module.exports = app; // for testing