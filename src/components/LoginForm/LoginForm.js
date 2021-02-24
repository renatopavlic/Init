import React, { useState } from 'react';
import "./LoginForm.css";

const LoginForm = props => {
  
  // Form inputs
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="loginForm">
      <form>
        <h1>Login</h1>
        <input onChange={(e) => setEmail(e.target.value)} placeholder="Email" type="email" required/>
        <input onChange={(e) => setPassword(e.target.value)} placeholder="Password" type="password" required/>
        <p id="loginForm__errorMsg">{props.error && `* ${props.error}`}</p>
      </form>
      <button className="loginForm__button" onClick={(e)=>{props.login(email, password)}}>Login</button>
    </div>
  )
}

export default LoginForm;
