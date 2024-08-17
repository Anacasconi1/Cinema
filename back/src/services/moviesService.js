const Movie = require("../models/Movie.js");

module.exports = {
  moviesRetorner: async () => {
    try {
      const movies = await Movie.find();
      return movies;
    } catch (error) {
      console.error("Cannot access to movies");
      throw error;
    }
  },
  postMovie: async (user) => {
    const newMovie = await Movie.create(user);
    return newMovie;
  },

};
