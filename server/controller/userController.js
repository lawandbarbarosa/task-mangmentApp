const User = require("../model/userModel")


const loginUser = (req,res)=>{
    const {email,password,username}= req.body;


}


const signUpUser = (req,res)=>{
    const {email,password,username}= req.body;

    
}

module.exports = {loginUser,signUpUser}