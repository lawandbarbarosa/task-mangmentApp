const mongoose = require("mongoose")

const Schema =  mongoose.Schema


const TaskSchema = new Schema({
    title: {
        required:true,
         type:String
    },
    description:{
        required: true,
        type : String
    },

},{timeStamp:true})


module.exports=mongoose.model("Tasks",TaskSchema)