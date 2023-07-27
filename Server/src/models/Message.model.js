const { DataTypes } = require("sequelize");
const sequelize = require("../db");

const Message = sequelize.define('message', {
  content: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
});

module.exports = Message;