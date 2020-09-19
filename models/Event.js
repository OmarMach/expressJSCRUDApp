const Sequelize = require("sequelize");
const sequelize = require("../database");

const Event = sequelize.define("event", {
  id: {
    primaryKey: true,
    type: Sequelize.INTEGER,
    autoIncrement: true,
  },
  title: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  description: {
    type: Sequelize.STRING,
    allowNull: true,
  },
});

module.exports = Event;
