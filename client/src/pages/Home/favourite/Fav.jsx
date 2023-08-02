import React from 'react'
import {Link} from "react-router-dom"
import arrow from "../../../assets/arr-left.svg"
import trash from "../../../assets/trash.svg"
import "./fav.css"
import { useSelector,useDispatch } from 'react-redux'
import {deletFromFavourite} from "../../../redux/taskSlice"


function Fav() {


  const {Favourites} = useSelector((state)=> state.task)

  const handleSubmit = (e)=>{
    e.preventDefault();
  }

  const dispatch =  useDispatch()

  return (
    <div className='fav'>
     <div className="left-arrow">
      <Link to="/home">
      <img src={arrow} alt="" />
      </Link>
      </div>
      <div className="favourites-container" onSubmit={handleSubmit}>
       { Favourites.map((fav)=>(
      <div className="card" key={fav._id}>
      <h1>{fav.title}</h1>
      <p>{fav.description}</p>
      <div className="card-footer">
         <span onClick={()=> dispatch(deletFromFavourite(fav._id)) }> <img src={trash} alt="" /></span>
      </div>
      </div>
       ))}
      </div>
    </div>
  )
}

export default Fav