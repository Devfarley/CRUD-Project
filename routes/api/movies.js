const express = require('express');
const router = express.Router();
const {
    readMovies,
    createMovie,
    deleteMovie
} = require('../../data/movies');

router.get('/', (req, res, next) =>{
    readMovies().then(data => {
        res.send(data);
    });
});

router.post('/', (req, res, next) => {
    const body = req.body
    createMovie(body).then(data => res.send(data));
});

router.delete('/', (req, res, next) => {
    const id = req.body._id
    deleteMovie(id).then(data => res.send(data));
});

module.exports = router;