//During the test the env variable is set to test
process.env.NODE_ENV = 'test';

const Employee = require('../models/all/employee');
const app = require('../app');
const chai = require('chai');
const chaiHttp = require('chai-http');
const should = chai.should();

chai.use(chaiHttp);

describe('Employee', () => {
    beforeEach((done) => { //Перед каждым тестом чистим базу
        Employee.deleteAll();
    });
});
/*
  * Test the /GET route
  */
describe('/GET employees', () => {
    it('it should GET all the employee', (done) => {
        chai.request(app)
            .get('/api/employees')
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('array');
                res.body.length.should.be.eql(0);
                done();
            });
    });
});
/*
 * Test the /POST route
 */
