import React, { useEffect, useState } from 'react'
import "./home.css"
import {Link, Navigate} from "react-router-dom"
import image from "../../assets/me.jpg"
import users from "../../assets/user.svg"
import fav from "../../assets/fav.svg"
import add from "../../assets/add.svg"
import trash from "../../assets/trash.svg"
import { setTasks,deleteTask,AddToFavourite } from '../../redux/taskSlice'
import AddingTask from "../../components/AddingTask"
import {useSelector,useDispatch} from "react-redux"



function Home() {

  const [showTask,setShowTask]=useState(false)
  const [filtering,setFiltering] = useState("")

  const handleShowTask = ()=>{
    setShowTask(!showTask);
  }

  const [ark,setArk] = useState([])

  //dispatching the action for adding task in redux store
  const dispatch= useDispatch();



  useEffect(()=>{
    const fetchTasks = async()=>{
    const response = await fetch("http://localhost:4500/api/tasks")
    const data = await response.json()
    console.log(response)
    setArk(data)
    if(response.ok){
     dispatch(setTasks(data))
    }
       }
    fetchTasks()
     },[])


     // deleting task
     const deletingTask = async(id)=>{
      const response = await fetch(`http://localhost:4500/api/tasks/${id}`,{
        method:"DELETE",
        headers:{
          "Content-Type":"application/json"
        }
      })
      if(response.ok){
        dispatch(deleteTask(id))
      }
     }

  return (
    <div className='home'>
      {showTask && <AddingTask showTask={showTask} setShowTask={setShowTask} /> }
   <div className="left-sidehome section__padding">
   <div className="profile-home p-4">
    <img src={image} alt="" />
    <h2> Lawand Barbarosa </h2>
    <Link className='edit'> edit Profile </Link>
   </div>
   <div className="aprofile-leftside-footer mt-[12rem]">
    <div className="pro">
      <img src={users} alt="" />
      <Link to="/users">users</Link>
    </div>
    <div className="pro">
      <img src={fav} alt="" />
      <Link to="/fav">favourites</Link>
    </div>
    <button type='submit' className='mt-[7rem] text-[tomato] 
    items-center justify-center ml-[4rem]'>log out</button>
   </div>
 
   </div>
  
   <div className="right-sidehome mt-[8rem] section__padding">
    <div className="addd">
      <img src={add} alt="" />
    <button type='submit' onClick={handleShowTask}> Add new Task  </button>
    </div>
     <input type="text" placeholder='search  for taks' className='' />
     <div className="taks-forms">
      {Array.isArray(ark) && ark.map((task)=>(
        <div className="card" key={task._id}>
        <h1>{task.title}</h1>
        <p>{task.description}</p>
        <div className="card-footer">
           <span onClick={()=> deletingTask(task._id)}> <img src={trash} alt="" /> </span>
           <span onClick={()=> dispatch(AddToFavourite(task))}> <img src={fav} alt="" /> </span>
        </div>
      </div>
      ))}
      
     </div>
    </div>
    </div>
  )
}

export default Home