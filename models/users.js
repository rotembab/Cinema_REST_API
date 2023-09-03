const mongoose = require("mongoose");
const dataSchema = new mongoose.Schema({
  name: {
    required: true,
    type: String,
  },
  username: {
    reuqired: true,
    type: String,
  },
  password: {
    reuqired: true,
    type: String,
  },
});

module.exports = mongoose.model("users", dataSchema);
