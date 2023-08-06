const mongoose = require("mongoose")
const bcrypt = require("bcrypt")
const validator = require("validator")

const Schema = mongoose.Schema

const Users = new Schema({
    email:{
        type:String,
        require:true,
        unique:true
    },
    password:{
        type:String,
        require:true,
    },
    username:{
        type : String,
        required:true
    }
})


Users.statics.login = async function(email,password,urname){

    if(!email || !password){
        throw Error("please fill all the field")
    }

    const user = await this.findOne({email})

    if(!user){
        throw Error("email is invalid")
    }

    const match = await bcrypt.compare(password,user.password)

    if(!match){
        throw Error("invalid password")
    }

    return user;
}


Users.statics.signup = async function(email,password,username){

    if(!email || !password || !username){
        throw Error ("Please fill all the fields")
    }

    if(!validator.isEmail(email)){
        throw Error ("invalid email")
    }

    if(!validator.isStrongPassword(password)){
        throw Error ('Password is too weak please yari asni pebka')
    }

   const exist = await this.findOne({email})

   if(exist){
    throw Error("this email already exist")
   }

   const salt = await bcrypt.genSalt(10)
   const hash = await bcrypt.hash(password,salt)

   const user = await this.create({email,password:hash,username})

   return user;
}


module.exports = mongoose.model("Users",Users)