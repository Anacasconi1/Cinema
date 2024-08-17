const { moviesRetorner, postMovie } = require("../services/moviesService.js");

const principalController = async (req, res) => {
  try {
    const retorner = await moviesRetorner()
    res
        .status(200)
        .json(retorner);
  } catch (error) {
    console.error("Cannot response with movies");
    throw error
  }
};

const postController = async (req, res)=> {
  try {
    const {title, duration, director, year, poster, rate, genre} = req.body;
    const newMovie = await postMovie({title, duration, director, year, poster, rate, genre});
    return res.status(201).json(newMovie);
  } catch (error) {
    throw error;
  }
}

module.exports = {
  principalController,
  postController
};
