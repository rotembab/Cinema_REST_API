const mongoose = require("mongoose");
const dataSchema = new mongoose.Schema({
  heading: {
    required: true,
    type: String,
  },
  imgSrc: {
    reuqired: true,
    type: String,
  },
});

module.exports = mongoose.model("news", dataSchema);
