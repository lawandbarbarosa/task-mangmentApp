import React from 'react'
import cover from "../../../assets/cover.jpg"
import email from "../../../assets/email.svg"
import password from "../../../assets/password.svg"
import google from "../../../assets/google.svg"
import "./login.css"

import { Link } from 'react-router-dom'


function Login() {

  return (
    <div className='login '>
  <div className="left-side">
    <img src={cover} alt="" />
    <div className="login-overlay"></div>
  </div>
  <div className="right-side">
  <h1>Log In</h1>
    <form className='form' action="">
      <div className="all">
      <div className="email">
      <img src={email} alt="" />
    <input type="email" placeholder='email....' />
    </div>
    <div className="password">
      <img src={password} alt="" />
    <input type="email" placeholder='password....' />
    </div>
    <button className='submitt' type="submit">login</button>
    <p className='doyou'>do you want to create an account?</p>
    <Link to='signup' className='aaa'>Sign Up</Link>

    <h5>or login with</h5>
    <div className="google">
      <div className="eee">
      <img src={google} alt="" />
      <div className='xat' />
      </div>
      <h2>google</h2>
    </div>
      </div>
    
    </form>
  </div>
    </div>
  )
}

export default Login