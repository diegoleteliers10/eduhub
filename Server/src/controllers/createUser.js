const User = require("../models/User.model");

const createUser = async (req,res)=>{
  const {fullname,username,email,password,phone,age,gender,university,year} = req.body;
  try {
    const userCreated = await User.create({
      fullname,
      username,
      email,
      password,
      phone,
      age,
      gender,
      university,
      year
    })

    res.status(201).json(userCreated)
  } catch (error) {
    res.status(500).json({error:error.message})
  }
}

module.exports = createUser;

