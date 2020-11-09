const express = require('express');
const router = express.Router();
const Movie = require ('../models/Movie.model');

/* GET home page */
router.get('/', (req, res, next) => {
    console.log('Hello from the index');
    res.render('index');
});

// List the Movies

router.get('/movies', (req,res,next) => {
    console.log('Hello from the movies route')
    res.render('movies')
});

module.exports = router;
