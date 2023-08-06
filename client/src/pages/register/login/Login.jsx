import React, { useState } from 'react'
import cover from "../../../assets/cover.jpg"
import emaill from "../../../assets/email.svg"
import passwordd from "../../../assets/password.svg"
import google from "../../../assets/google.svg"
import "./login.css"
import { useLogin } from '../hooks/useLogin' 
import { Link } from 'react-router-dom'


function Login() {

  const [email,setEmail]=useState("")
  const [password,setPassword] = useState("")

  const  {Loggin,error,loading} = useLogin()

  const handleSubmit =async (e)=>{
    e.preventDefault(); 

    await Loggin(email,password)
  }

  return (
    <div className='login '>
  <div className="left-side">
    <img src={cover} alt="" />
    <div className="login-overlay"></div>
  </div>
  <div className="right-side">
  <h1>Log In</h1>
    <form className='form' action="" onSubmit={handleSubmit}>
      <div className="all">
      <div className="email">
      <img src={emaill} alt="" />
    <input value={email} onChange={(e)=> setEmail(e.target.value)}
     type="email" placeholder='email....' />
    </div>
    <div className="password">
      <img src={passwordd} alt="" />
    <input value={password} onChange={(e)=> setPassword(e.target.value)} 
    type="password" placeholder='password....' />
    </div>
    <button disabled={loading} className='submitt' type="submit">login</button>
    {error && <h1>{error}</h1> }
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