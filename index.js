require("dotenv").config();

const routes = require("./routes/routes");
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
app.listen(8000, () => {
  console.log("Server is listening on PORT:8000 ");
});

app.use("/api", routes);
