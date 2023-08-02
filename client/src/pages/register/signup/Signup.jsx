import React from 'react'
import cover from "../../../assets/cover.jpg"
import email from "../../../assets/email.svg"
import password from "../../../assets/password.svg"
import google from "../../../assets/google.svg"
import user from "../../../assets/user.svg"
import "./sign.css"
function SignUp() {


  

  return (
    <div className='login '>
  <div className="left-side">
    <img src={cover} alt="" />
    <div className="login-overlay"></div>
  </div>
  <div className="right-side">
  <h1>Sign Up</h1>
    <form className='form' action="/profile">
      <div className="all">
      <div className="email  mb-12">
      <img src={user} alt="" />
    <input type="text" placeholder='username....' />
    </div>
      <div className="email">
      <img src={email} alt="" />
    <input type="email" placeholder='email....' />
    </div>
    <div className="password">
      <img src={password} alt="" />
    <input type="password" placeholder='password....' />
    </div>
    <div className="passwordver">
    <img src={password} alt="" />
    <input type="password" placeholder='password verification....' /><br />
    </div>
    <button className='submitt' type="submit">Sign Up</button>
    <h5>or SignUp with</h5>
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

export default SignUp