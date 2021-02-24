import React, { useContext, useState } from 'react';
import "./LoginPage.css";
import LoginForm from "../../components/LoginForm/LoginForm";
import { UserContext } from "../../context/UserContext";
import authService from "../../services/auth.service";
import { useHistory } from "react-router-dom";

function LoginPage() {

  // History Hook
  const history = useHistory();
  // User Context
  const { user, setUser } = useContext(UserContext);
  // Error
  const [error, setError] = useState(false);


  // Login Function
  const login = (user, pass) => {
    authService.login(user, pass)
    .then(handleResponse)
    .catch(e => {
      setError("Error!");
      console.error(e);
    })
  }

  // Handle Response
  const handleResponse = (data) => {
    if(data.errorMessage){
      // Set Error Message
      setError(data.errorMessage);
    } else {
      // Logged in
      setUser(data);
      history.push("/profile")
    }
  }

  return (
    <div className="loginPage">
      <LoginForm login={login} error={error}/>
    </div>
  )
}

export default LoginPage;
