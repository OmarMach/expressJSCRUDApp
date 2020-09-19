const Sequelize = require("sequelize");
const sequelize = require("../database");

const Category = sequelize.define("category", {
  id: {
    primaryKey: true,
    type: Sequelize.INTEGER,
    autoIncrement: true,
  },
  categoryName: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

module.exports = Category;
