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
    // Get Movies from Mongo and pass to the view
    Movie.find()
        .then((allMoviesFromDB) => {
            console.log(`Movies from DB ${allMoviesFromDB}`);
            res.render('movies', {movies:allMoviesFromDB});
        });
});

router.get('/movie/:movieId', (req,res) => {
    let movieId = req.params.movieId;
    Movie.findById(movieId)
        .then((movieFound) => {
            console.log('Helo Music iD');
            res.render('movies-id', {movies:movieFound});
        });
});

/* router.get('/books/:bookId', (req, res) => {
    let bookId = req.params.bookId;
    Book.findById(bookId)
      .then((theBookFound) => {
        res.render('book-details', { book: theBookFound});
      })
      .catch((err) => {
        res.render('error', { err });
      });
  }); */

module.exports = router;
