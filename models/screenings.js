const mongoose = require("mongoose");
const ScreeningSchema = new mongoose.Schema({
  movieId: {
    type: String,
    required: true,
  },
  theaterId: {
    type: String,
    required: true,
  },
  time: Date,
  seats: [
    {
      row: Number,
      number: Number,
      status: Number,
    },
  ],
});

module.exports = mongoose.model("screenings", ScreeningSchema);
