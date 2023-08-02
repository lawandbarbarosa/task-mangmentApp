import React from 'react'
import image from "../../assets/me.jpg"
import {Link} from "react-router-dom"
import arrow from "../../assets/arr-left.svg"

import "./user.css"

function User() {
  return (
    <div className='users'>
      
      <div className="inputs">
      <input type="text" placeholder='search  for taks' className='' />
      </div>
     <div className="userss">
     <div className="profile-home p-4">
    <img src={image} alt="" />
    <h2> Lawand Barbarosa </h2>
    <Link className='edit'> edit Profile </Link>
   </div>
   <div className="profile-home p-4">
    <img src={image} alt="" />
    <h2> Lawand Barbarosa </h2>
    <Link className='edit'> edit Profile </Link>
   </div>
   <div className="profile-home p-4">
    <img src={image} alt="" />
    <h2> Lawand Barbarosa </h2>
    <Link className='edit'> edit Profile </Link>
   </div>
   <div className="profile-home p-4">
    <img src={image} alt="" />
    <h2> Lawand Barbarosa </h2>
    <Link className='edit'> edit Profile </Link>
   </div>
   <div className="profile-home p-4">
    <img src={image} alt="" />
    <h2> Lawand Barbarosa </h2>
    <Link className='edit'> edit Profile </Link>
   </div>
     </div>
     
    </div>
  )
}

export default User