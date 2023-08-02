const User = require("../model/userModel")
const jwt = require("jsonwebtoken")

const createToken = async(_id)=>{
  jwt.sign({_id:_id},process.env.SECRET,{expiresIn:"3d"})
}


const loginUser = async(req,res)=>{
    const {email,password,username}= req.body;

    try{
        const user = await User.login(email,password,username)

        const token = await createToken(user._id)

        res.status(200).json({email,token})

    }catch(error){
     res.status(200).json({error:error.message})
    }




}


const signUpUser = async(req,res)=>{
    const {email,password,username}= req.body;

    try{
        const user = await User.signup(email,password,username)

        const token = await createToken(user._id)

        res.status(200).json({email,token})

    }catch(error){
    res.status(400).json({error:error.message})
    }
    
}

module.exports = {loginUser,signUpUser}