const mongoose = require('mongoose');
const { Schema, model} = mongoose;

const movieSchema = new Schema (
    {
        title: String,
        director: String,
        starts: [],
        image: String,
        description: String,
        showtimes: []
    },
    {
        timeStamps: true
    }
);

const Movie = model('Movie', movieSchema)

module.exports = Movie;
   