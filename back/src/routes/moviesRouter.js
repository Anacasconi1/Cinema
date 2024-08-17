const {principalController, postController} = require("../controllers/index.js");
const {Router} = require("express");
const movieValidator = require("../middleware/moviesValidator.js");

const moviesRouter = Router();

moviesRouter.get("/", principalController);
moviesRouter.post("/", movieValidator, postController);

module.exports = moviesRouter;