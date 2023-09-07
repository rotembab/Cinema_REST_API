const model = require("../models/news");
const express = require("express");

const router = express.Router();

module.exports = router;

router.get("/", async (req, res) => {
  try {
    const data = await model.find();
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const data = await model.findById(req.params.id);
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
  res.send(req.params.id);
});

router.post("/", async (req, res) => {
  const data = new model({
    heading: req.body.heading,
    imgSrc: req.body.imgSrc,
  });
  try {
    const dataToSave = await data.save();
    res.status(200).json(dataToSave);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.patch("/update/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const updatedData = req.body;
    const options = { new: true };
    const result = await model.findByIdAndUpdate(id, updatedData, options);
    res.send("Updated: " + result);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.delete("/delete/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const data = await model.findByIdAndDelete(id);
    res.send("Successfuly deleted document" + data.name);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
  res.send("Delete by id");
});
