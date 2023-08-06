import React, { useState } from 'react';
import cover from "../../../assets/cover.jpg";
import emaill from "../../../assets/email.svg";
import passwordd from "../../../assets/password.svg";
import google from "../../../assets/google.svg";
import user from "../../../assets/user.svg";
import "./sign.css";
import { useSignup } from '../hooks/useSignup';

function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVerification, setPasswordVerification] = useState("");
  const [username, setName] = useState("");


  const {signup,error,loading} = useSignup()

  const handleSubmit = async (e) => {
    e.preventDefault()

    await signup (email,password,username)
  };

  return (
    <div className='login '>
      <div className="left-side">
        <img src={cover} alt="" />
        <div className="login-overlay"></div>
      </div>
      <div className="right-side">
        <h1>Sign Up</h1>
        <form className='form'  onSubmit={handleSubmit}>
          <div className="all">
            <div className="email  mb-12">
              <img src={user} alt="" />
              <input type="text" placeholder='username....'
                value={username} onChange={(e) => setName(e.target.value)} />
            </div>
            <div className="email">
              <img src={emaill} alt="" />
              <input type="email" placeholder='email....'
                value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className="password">
              <img src={passwordd} alt="" />
              <input type="password" placeholder='password....'
                value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
            
            <button disabled={loading} className='submitt' type="submit">
              sigin up
            </button>
            {error &&  <div className="error">{error}</div> }
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
  );
}

export default SignUp;
