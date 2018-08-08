const express = require('express');
const router = express.Router();

const Branch = require('../models/branch');

router.post('/branches', function (req, res) {
    Branch.create(req.body, function (err, result) {
        err || !result ? res.status(404).send(err) : res.send(result);
    })
});
router.post('/branches/filter', function (req, res) {
    Branch.find(req.body, function (err, result) {
        err || !result ? res.status(404).send(err) : res.send(result);
    })
});

router.get('/branches/filter', function (req, res) {
    Branch.find(req.query, function (err, result) {
        err || !result ? res.status(404).send(err) : res.send(result);
    })
});

router.get('/branches', function (req, res) {
    Branch.find({}, function (err, result) {
        err || result.length === 0 ? res.status(404).send(err) : res.send(result);
    })
});

router.get('/branches/:id', function (req, res) {
    Branch.findById(req.params.id, function (err, result) {
        err || !result ? res.status(404).send({error: 'Entity not found'}) : res.send(result);
    })
});

router.put('/branches/:id', function (req, res) {
    if (Object.keys(req.body).length !== 0) {
        Branch.update({_id: req.params.id}, req.body, function (err, result) {
            err ? res.status(404).send({error: 'Entity not found and not update'}) :
                result.n === 0 ? res.status(400).send({error: 'Not valid body request'}) : res.send(result);
        });
    } else {
        res.status(400).send({
            error: 'Empty body request'
        })
    }
});

router.delete('/branches/:id', function (req, res) {
    Branch.delete({_id: req.params.id}, (err, result) => {
        err ? res.status(404).send({error: 'Entity not found and not deleted'}) : res.send(result);
    })
});

module.exports = router;