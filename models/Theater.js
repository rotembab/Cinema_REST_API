const mongoose = require("mongoose");
const TheaterSchema = new mongoose.Schema({
  theaterName: {
    type: String,
    required: true,
  },
  screenings: [
    {
      type: String,
      requried: true,
    },
  ],
});

module.exports = mongoose.model("theater", TheaterSchema);
