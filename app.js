var createError = require("http-errors");
var express = require("express");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

//models
var Event = require("./models/Event");
var Category = require("./models/Category");

//routes
var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
var eventsRouter = require("./routes/event");
var categoriesRouter = require("./routes/category");

var sequelize = require("./database");

var app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/event", eventsRouter);
app.use("/category", categoriesRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.send(res.locals.error);
});

app.get("/", function (req, res) {
  res.send("Hello World!");
});

// Relations
Event.belongsTo(Category);

// sequelize.sync({ force: true });
sequelize.sync();

module.exports = app;
