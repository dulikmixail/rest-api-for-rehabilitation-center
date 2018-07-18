const express = require('express');
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/rc-bd', {useNewUrlParser: true});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    console.log("Db connect")
    // we're connected!
});

const app = express();
app.set('port', process.env.PORT || 3000);

app.use(express.urlencoded({extended: false}));
app.use(express.json());


const indexRouter = require('./routes/index');
const employeeRouter = require('./routes/employee');
const postRouter = require('./routes/post');


app.use('/', indexRouter);
app.use('/api', employeeRouter, postRouter);


//start server
app.listen(app.get('port'), () => {
    console.log('Server start localhost:' + app.get('port') + '. Go go next!')
});

