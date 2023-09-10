const mongoose = require("mongoose");
const Movie = require("./movie");
const ScreeningSchema = new mongoose.Schema({
  movieName: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Movie",
  },
  time: Date,
});

module.exports = mongoose.model("screenings", ScreeningSchema);
