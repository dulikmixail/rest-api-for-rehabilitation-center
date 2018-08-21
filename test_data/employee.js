const Employee = require('../models/employee');
const Post = require('../models/post');

Employee.deleteAll();
Post.find({}, (err, posts) => {
    let employees = [];
    for (let i = 0; i < 10; i++) {
        employees.push(
            {
                itemNo: i,
                employmentDate: '2012-04-23',
                surname: 'Фамилия' + i,
                name: 'Имя' + i,
                middleName: 'Отчество' + i,
                birthDate: new Date,
                residencePlace: 'Постоянное место жительства' + i,
                educationFile: 'url/url/' + i + '.jpg',
                post: posts[Math.floor(Math.random() * posts.length)],
                login: 'employee' + i,
                password: 'p' + i
            },
        )
    }

    Employee.create(employees);
});

