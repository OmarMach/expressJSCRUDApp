var express = require("express");
var router = express.Router();

const controller = require("../controllers/event");

router.get("/", async function (req, res) {
  await controller.findEvents(req, res);
});

router.get("/:id", async function (req, res) {
  await controller.findEvents(req, res);
});

router.get("/category/:id", async function (req, res) {
  await controller.findEventsById(req, res);
});

router.post("/", async function (req, res) {
  await controller.addEvent(req, res);
});

module.exports = router;
