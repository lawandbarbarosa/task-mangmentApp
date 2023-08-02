require("dotenv").config(); // Load environment variables from .env file
const express = require("express")

const taks = require("../server/routes/route")

const mongoose = require("mongoose")

const app = express()
const cors = require("cors")



app.use(express.json())



// middleware
app.use((req,res,next)=>{
 console.log(req.path,req.method)
 next(); // call the next function in stack to continue execution of middlewares and routes
})

app.use(cors({
    origin: "http://localhost:5173"
}))

// geting route 
app.use("/api/tasks",taks)


mongoose.connect(process.env.MONGO_URI)
.then(() => {
    app.listen(4500,()=>{
        console.log(`Server started on port 4500`)
    })
})
.catch(err => {
    console.log(err);
});

