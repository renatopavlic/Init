import React, { useState } from 'react';
import "./LoginForm.css";

function LoginForm() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="loginForm">
      <form>
        <h1>Login</h1>
        <input onChange={(e) => setEmail(e.target.value)} placeholder="Email" type="email" />
        <input onChange={(e) => setPassword(e.target.value)} placeholder="Password" type="password"/>
        <button type="submit">Login</button>
      </form>
    </div>
  )
}

export default LoginForm;
