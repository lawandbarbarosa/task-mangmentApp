import React, { useEffect, useState } from 'react';
import "./add.css";
import { useDispatch } from "react-redux";
import { json, useNavigate } from 'react-router-dom';

import { createTask } from "../redux/taskSlice";

function AddingTask({showTask,setShowTask}) {


  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState(false);

  const dispatch = useDispatch();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const tasks = {title,description}

     const response =  await fetch("http://localhost:4500/api/tasks",{
      method:"POST",
      body:JSON.stringify(tasks),
      headers:{
        "Content-Type":"application/json"
      }
     })
     const data = await response.json()

     if(response.ok){
      dispatch(createTask(tasks))
      setTitle("")
      setDescription("")
      setError(null)
      console.log("new task added",data)
     }
     if(!response.ok){
      setError(data.error)
     }
  };


  const handleShowTask = ()=>{
    setShowTask(!showTask);
  }

  return (
    <div className='taskAdding'>
      <div className="formaddtaskcontainer">
        <form action='/home' onSubmit={handleSubmit}>
          <div className="header-task">
          <label>header</label>
          <input value={title} onChange={(e)=> setTitle(e.target.value)} 
          type="text" placeholder="write header..." />
          </div>
          <div className="footer-task">
          <label>Detail</label>
          <input value={description} onChange={(e)=> setDescription(e.target.value)}
           type="text" placeholder="write Deatil..." />
          </div>
          <button className='addtaks-action' type="submit">Add a task</button>
           {error && <h1>{error}</h1> }
        </form>
      </div>
    </div>
  )
}

export default AddingTask