const express = require("express")

const router = express()
const {
   getAllTasks,
   getSingleTask,
   createTask,
   deleteTask,
   UpdateTask} = require("../controller/taskController")

// get all tasks
router.get("/",getAllTasks)

// get an task
router.get("/:id",getSingleTask)
 
// posting task
 router.post("/",createTask)


 // deleting task
 router.delete("/:id",deleteTask)

  // updateing task
  router.patch("/:id",UpdateTask)


 module.exports = router
