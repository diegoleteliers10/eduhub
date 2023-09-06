const User = require("../models/User.model");
//agregar parte del auth para crear el usuario al hacer register
const loginUser = async (req,res)=>{
  const {username,email,password} = req.body;
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

module.exports = loginUser;