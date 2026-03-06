const User = require("../models/User")
const bcrypt = require("bcryptjs")
const generateToken = require("../utils/generateToken")



exports.register = async (req, res) => {

 try {

  const { name, email, password, role } = req.body

  if (!name || !email || !password) {
 return res.status(400).json({
  success:false,
  message: "All fields are required"
 })
}

if(password.length < 6){
 return res.status(400).json({
  success:false,
  message:"Password must be at least 6 characters"
 })
}

const emailRegex = /^\S+@\S+\.\S+$/

if(!emailRegex.test(email)){
 return res.status(400).json({
  success:false,
  message:"Invalid email format"
 })
}

  const userExists = await User.findOne({ email })

  if (userExists) {
   return res.status(400).json({
    success:false,
    message:"User already exists"
   })
  }

  const hashedPassword = await bcrypt.hash(password,10)

  const user = await User.create({
   name,
   email,
   password:hashedPassword,
   role: "user"
  })

  const token = generateToken(user._id)

  res.status(201).json({
   success:true,
   message:"User registered successfully",
   data:{
    id:user._id,
    name:user.name,
    email:user.email,
    role:user.role,
    token
   }
  })

 } catch (error) {

  res.status(500).json({
   success:false,
   message:error.message
  })

 }

}



exports.login = async (req, res) => {

 try {

  const { email, password } = req.body

  if (!email || !password) {
   return res.status(400).json({
    success:false,
    message:"Email and password required"
   })
  }

  const user = await User.findOne({ email }).select("+password")

  if (!user) {
   return res.status(404).json({
    success:false,
    message:"User not found"
   })
  }

  const isMatch = await bcrypt.compare(password, user.password)

  if (!isMatch) {
   return res.status(401).json({
    success:false,
    message:"Invalid credentials"
   })
  }

  const token = generateToken(user._id)

  res.status(200).json({
   success:true,
   message:"Login successful",
   data:{
    id:user._id,
    name:user.name,
    email:user.email,
    role:user.role,
    token
   }
  })

 } catch (error) {

  res.status(500).json({
   success:false,
   message:"Server error",
   error:error.message
  })

 }

}