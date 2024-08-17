module.exports = {
  entry: {
    main: "./scripts/index.js",
    form: "./scripts/form.js",
    genre: "./scripts/genresRender.js"
  },

  output: {
    path: __dirname + "/public",
    filename: "[name].bundle.js",
  },
};
