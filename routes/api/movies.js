const express = require('express');
const router = express.Router();
const {
    readMovies,
} = require('../../data/movies');

router.get('/', (req, res, next) =>{
    readMovies().then(data => {
        res.send(data);
    });
})


module.exports = router;