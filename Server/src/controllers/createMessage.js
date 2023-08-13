const Message = require("../models/Message.model");
const User = require("../models/User.model");

const createMessage = async (req,res)=>{
  const {content,reciver, userSender} = req.body;
  try {
    const userFound = await User.findOne({where:{username:userSender}})

    const messageCreated = await Message.create({
      content,
      reciver,
      userId: userFound.id
    })

    res.status(201).json(messageCreated)
  } catch (error) {
    res.status(500).json({error:error.message})
  }
}

module.exports = createMessage;