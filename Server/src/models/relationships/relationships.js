
const User = require("../User.model");
const Post = require("../Post.model");
const Chat = require("../Chat.model");
const Message = require("../Message.model");

User.hasMany(Message, { foreignKey: 'senderId', as: 'sentMessages' });
User.hasMany(Message, { foreignKey: 'receiverId', as: 'receivedMessages' });
Chat.belongsToMany(Users, { through: 'ChatParticipants', foreignKey: 'chatId' });
User.belongsToMany(Chats, { through: 'ChatParticipants', foreignKey: 'userId' });
Post.belongsTo(Users, { foreignKey: 'userId' });
Message.belongsTo(Users, { foreignKey: 'senderId', as: 'sender' });
Message.belongsTo(Users, { foreignKey: 'receiverId', as: 'receiver' });
Message.belongsTo(Chats, { foreignKey: 'chatId' });

module.exports = {
  User,
  Chat,
  Message,
  Post
}