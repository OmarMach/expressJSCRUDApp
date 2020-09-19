var express = require("express");
var router = express.Router();

var postFunc = function (req, res) {
  res.render("index", { title: "Hello world" });
};

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express - Get Req" });
});

router.post("/", postFunc);

router.all(
  "/secret",
  function (req, res, next) {
    console.log("Accessing the secret section ...");
    next(); // pass control to the next handler
  },
  function (req, res) {
    postFunc(req, res);
  }
);

router.get("/users/:userId/books/:bookId", function (req, res) {
  console.log("The user is : " + req.params.userId);
  console.log("The user is : " + req.params["userId"]);
  res.send(req.params);
});

module.exports = router;
