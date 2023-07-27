const { DataTypes } = require("sequelize");
const sequelize = require("../db");

const Message = sequelize.define('message', {
  content: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  timestamp: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW,
  },
});

module.exports = Message;