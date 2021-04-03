const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const movieSchema = new Schema({
  title: { type: String, required: true },
  poster: { type: String, required: true },
  body: String,
  date: { type: Date, default: Date.now },
  popularity: String,
  vote_average: String
});

const Movie = mongoose.model("Movie", movieSchema);

module.exports = Movie;
