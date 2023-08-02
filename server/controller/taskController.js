
const Tasks = require("../model/taskModel")
const mongoose = require("mongoose")



//get all tasks
const getAllTasks = async(req, res) => {


    const task = await Tasks.find({}).sort({ createdAt: -1 });

    res.status(200).json(task);
};

// get single task
const getSingleTask = async(req,res)=>{
    const {id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
    return res.status(404).json({error:"no such task"})
    }
 
    const task = await Tasks.findById(id)

    if(!task){
     res.status(404).json({error:"no such workout"})
    }

    res.status(200).json(task)

}


const createTask = async(req,res)=>{
    const {title,description} = req.body

    try{
    const user_id = req.body
    const task = await Tasks.create({title,description,user_id})
    res.status(200).json(task)
    }catch(error){
    res.status(400).json({error:error.message})
    }
}

// delete a task
const deleteTask = async(req,res)=>{
    const {id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(400).json({error:"no such task"})
    }

    const task = await Tasks.findOneAndDelete({_id:id})

    if(!task){
       return res.status(400).json({error:"No Task Found with that ID."})
    }

    res.status(200).json(task)
}


const UpdateTask = async(req,res)=>{
    const {id} = req.params
    
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:'Invalid Id'})
    }

    const task = await Tasks.findOneAndUpdate({_id:id},{
        ...req.body
    })

    if (!task) {
  return res.status(404).json({ error: "kwra da wanabet" });
}

    res.status(200).json(task)
}

module.exports = {
    getAllTasks,
    getSingleTask,
    createTask,
    deleteTask,
    UpdateTask
}