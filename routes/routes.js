const express = require("express");

const router = express.Router();

module.exports = router;

//TODO: Complete these functions
router.get("/getAll", (req, res) => {
  res.send("Get All");
});

router.get("/getOne/:id", (req, res) => {
  res.send("Get by id");
});

router.post("/post", (req, res) => {
  res.send("Post ");
});

router.patch("/update/:id", (req, res) => {
  res.send("Update by id");
});

router.delete("/delete/:id", (req, res) => {
  res.send("Delete by id");
});
