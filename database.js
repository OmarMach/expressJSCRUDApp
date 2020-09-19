const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("testing_expressjs", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

module.exports = sequelize;
