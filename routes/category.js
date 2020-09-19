var express = require("express");
var router = express.Router();

const controller = require("../controllers/category");

router.get("/", async function (req, res) {
  await controller.fetchCatgory(req, res);
});

router.post("/", async function (req, res) {
  try {
    await controller.addCategory(req, res);
  } catch (error) {
    console.log(error);
  }
});

router.post("/:id", async function (req, res) {
  try {
    await controller.fetchCatgoryByID(req, res);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
