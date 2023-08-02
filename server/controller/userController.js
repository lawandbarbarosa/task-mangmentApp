const mongoose = require("mongoose")
const User = require("../model/userModel")
const jwt = require("jsonwebtoken")

const createToken = async(_id)=>{
 return jwt.sign({_id:_id},process.env.SECRET,{expiresIn:"3d"})
}


const loginUser = async(req,res)=>{
    const {email,password,username}= req.body;

    try{
        const user = await User.login(email,password,username)

        const token = await createToken(user._id)

        res.status(200).json({email,username,token})

    }catch(error){
     res.status(200).json({error:error.message})
    }

}


const signUpUser = async(req,res)=>{
    const {email,password,username}= req.body;

    try{
        const user = await User.signup(email,password,username)

        const token = await createToken(user._id)

        res.status(200).json({email,username,token})

    }catch(error){
    res.status(400).json({error:error.message})
    }
    
}

const geAllUsers = async(req,res)=>{
    
    const users = await User.find({}).sort({createAt:-1})

    res.status(200).json(users)
}

const deleteUser = async(req,res)=>{

    const {id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return  res.status(400).json({error:"Invalid user ID"})
    }


    const user = await User.findOneAndDelete({_id:id})

    if(!user){
        return res.status(200).json({error:"no such a user"})
    }

    res.status(200).json(user)
}

const UpdateUser = async(req,res)=>{
    const {id} = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(400).json({error:"no scu a user"})
    }

    const user = await User.findOneAndUpdate({_id:id})

    if(!user){
        return res.status(200).json({error:"no such user"})
    }

    res.status(200).json(user)
}

module.exports = {loginUser,signUpUser,geAllUsers,deleteUser,UpdateUser}