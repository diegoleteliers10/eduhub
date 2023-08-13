const { DataTypes } = require("sequelize");
const sequelize = require("../db");

const Chat = sequelize.define("chat",{
  unread_messages:{
    type: DataTypes.INTEGER,
    defaultValue: 0,
  }
});

module.exports = Chat;