const express = require('express');
const router = express.Router();

const Employee = require('../models/employee');

router.post('/employees', function (req, res) {
    Employee.create(req.body, function (err, result) {
        err ? res.status(400).send(err) : res.send(result);
    })
});
router.post('/employees/filter', function (req, res) {
    Employee.find(req.body, function (err, result) {
        err ? res.status(500).send(err) : res.send(result);
    })
});

router.get('/employees/filter', function (req, res) {
    Employee.find(req.query, function (err, result) {
        err ? res.status(500).send(err) : res.send(result);
    })
});

router.get('/employees', function (req, res) {
    Employee.find({}, function (err, result) {
        err ? res.status(500).send(err) : res.send(result);
    })
});

router.get('/employees/:id', function (req, res) {
    Employee.findById(req.params.id, function (err, result) {
        err ? res.status(404).send({error: 'Entity not found'}) : res.send(result);
    })
});

router.put('/employees/:id', function (req, res) {
    if (Object.keys(req.body).length !== 0) {
        Employee.update({_id: req.params.id}, req.body, function (err, result) {
            err ? res.status(404).send({error: 'Entity not found and not update'}) :
                result.n === 0 ? res.status(400).send({error: 'Not valid body request'}) : res.send(result);
        });
    } else {
        res.status(400).send({
            error: 'Empty body request'
        })
    }
});

router.delete('/employees/:id', function (req, res) {
    Employee.delete({_id: req.params.id}, (err, result) => {
        err ? res.status(404).send({error: 'Entity not found and not deleted'}) : res.send(result);
    })
});

module.exports = router;