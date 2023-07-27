const { DataTypes } = require('sequelize');
const sequelize = require("../db");

const Chats = sequelize.define('chats', {
  name: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  unread_messages: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
});
module.exports = Chats;