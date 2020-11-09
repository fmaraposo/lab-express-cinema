//model is a representation of what we want in our database

const mongoose = require('mongoose');
const { Schema, model} = mongoose;

const movieSchema = new Schema (
    //schema is a blueprint of a model
    {
        title: String,
        director: String,
        stars: Array,
        image: String,
        description: String,
        showtimes: Array
    },
    {
        timeStamps: true
    }
);

const Movie = model('Movie', movieSchema);

module.exports = Movie;
   