const User = require("../User.model");
const Post = require("../Post.model");
const Chat = require("../Chat.model");
const Message = require("../Message.model");


User.hasMany(Post);
Post.belongsTo(User);

User.belongsToMany(Chat, { through: 'UserChat' });
Chat.belongsToMany(User, { through: 'UserChat' });

Chat.hasMany(Message);
Message.belongsTo(Chat);

User.hasMany(Message);
Message.belongsTo(User);

module.exports= {
  User,
  Post,
  Chat,
  Message
}

