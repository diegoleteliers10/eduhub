const { DataTypes } = require("sequelize");
const sequelize = require("../db");

const Posts = sequelize.define('post', {
  text: {
    type: DataTypes.STRING(5000),
    allowNull: false,
  },
  likes: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  images: {
    type: DataTypes.ARRAY(DataTypes.STRING),
    allowNull: true,
  },
  comments: {
    type: DataTypes.ARRAY(DataTypes.STRING(5000)),
    allowNull: true,
  },
});

module.exports = Posts;