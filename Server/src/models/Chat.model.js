const { DataTypes } = require("sequelize");
const sequelize = require("../db");

const Chat = sequelize.define("chat",{
  name:{
    type: DataTypes.STRING,
    allowNull: false,
  },
  unread_messages:{
    type: DataTypes.INTEGER,
    defaultValue: 0,
  }
});

module.exports = Chat;