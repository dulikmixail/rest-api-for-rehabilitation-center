const express = require('express');
const router = express.Router();

const Post = require('../models/all/post');


router.post('/posts', function (req, res) {
    Post.create(req.body, function (err, result) {
        err ? res.status(400).send(err) : res.send(result);
    })
});
router.post('/posts/filter', function (req, res) {
    Post.find(req.body, function (err, result) {
        err ? res.status(500).send(err) : res.send(result);
    })
});

router.get('/posts/filter', function (req, res) {
    Post.find(req.query, function (err, result) {
        err ? res.status(500).send(err) : res.send(result);
    })
});

router.get('/posts', function (req, res) {
    Post.find({}, function (err, result) {
        err ? res.status(500).send(err) : res.send(result);
    })
});

router.get('/posts/:id', function (req, res) {
    Post.findById(req.params.id, function (err, result) {
        err ? res.status(404).send({error: 'Entity not found'}) : res.send(result);
    })
});

router.put('/posts/:id', function (req, res) {
    if (Object.keys(req.body).length !== 0) {
        Post.update({_id: req.params.id}, req.body, function (err, result) {
            err ? res.status(404).send({error: 'Entity not found and not update'}) :
                result.n === 0 ? res.status(400).send({error: 'Not valid body request'}) : res.send(result);
        });
    } else {
        res.status(400).send({
            error: 'Empty body request'
        })
    }
});

router.delete('/posts/:id', function (req, res) {
    Post.delete({_id: req.params.id}, (err, result) => {
        err ? res.status(404).send({error: 'Entity not found and not deleted'}) : res.send(result);
    })
});


module.exports = router;
