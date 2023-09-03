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
    type: Number, //In minutes
  },
  lang: {
    required: true,
    type: String,
  },
  options: [
    {
      required: true,
      enum: ["2D", "3D", "4DX", "SCREENX", "IMAX"],
      type: String,
    },
  ],
  ageStrict: {
    required: false,
    type: Number,
  },
});

module.exports = mongoose.model("Movies", dataSchema);
