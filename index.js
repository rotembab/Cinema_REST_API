const cors = require("cors");
require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const mongoString = process.env.DB_URL;

mongoose.connect(mongoString);
const database = mongoose.connection;

database.on("error", (error) => {
  console.log(error);
});

database.once("connected", () => {
  console.log("Connected to DB");
});

const app = express();
app.use(express.json());
app.use(cors());

const movieRoutes = require("./routes/movieRoutes");
const userRoutes = require("./routes/userRoutes");
const newsRoutes = require("./routes/newsRoutes");
app.use("/api/movies", movieRoutes);
app.use("/api/users", userRoutes);
app.use("/api/news", newsRoutes);

app.listen(8000, () => {
  console.log("Server is listening on PORT:8000 ");
});
