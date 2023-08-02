import React, { useState } from 'react'
import cover from "../../../assets/cover.jpg"
import me from "../../../assets/me.jpg"
import "./pro.css"

function Profile() {


  const [images,setImage]=useState('')


  const handleImage = (event)=>{
    const files = event.target.files[0];
    const imageUrl = URL.createObjectURL(files)
   setImage(imageUrl)
  }

  const handling = (e)=>{
  e.preventDefault()
  }

  return (
    <div className='profile'>
  <div className="left-side-profile">
    <img src={cover} alt="" />
    <div className="login-overlay"></div>
  </div>
  <div className="rigt-side-profile">
  <form action="/home" >
  <div className="profile-header">
   <img src={images} alt=""  /> 
   <input type="file" onChange={handleImage} name="" id="" />
  </div>
    <div className="informs">
      <input type="text" placeholder='first name' />
      <input type="text" placeholder='last name' />
    </div>
    <div className="profile-footer">
    <input type="text" placeholder='wite your knowlodge'  />
    </div>
    <div className="pppp">
    <button className='pro-submit' type='submit'>create profile</button>
    </div>
  </form>
  </div>
    </div>
  )
}

export default Profile