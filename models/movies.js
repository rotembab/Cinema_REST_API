const mongoose = require("mongoose");
const dataSchema = new mongoose.Schema({
  name: {
    required: true,
    type: String,
  },
  describtion: {
    required: true,
    type: String,
  },
  imgSrc: {
    required: true,
    type: String,
  },
  releaseDate: {
    required: true,
    type: Date,
  },
  movieLen: {
    required: true,
    type: Number,
  },
  lang: {
    required: true,
    type: String,
  },
  options: ["2D", "3D", "4DX", "SCREENX", "IMAX"],
  ageStrict: {
    required: false,
    type: Number,
  },
});

module.exports = mongoose.model("movies", dataSchema);
