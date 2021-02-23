import React, { useEffect, useContext } from 'react';
import { UserContext } from "../../context/UserContext";
import "./LoginPage.css";
import LoginForm from "../../components/LoginForm/LoginForm";

function LoginPage() {

  const { user, setUser } = useContext(UserContext);

  useEffect(() => {
    // User Authentication Function
    const authUser = async () => {

      const data =  { "username": "john@doe.com", "password": "test123" };
    
      try {
        const rawResponse = await fetch("https://api.getcountapp.com/api/v1/authenticate", {
          method: 'POST',
          mode: 'cors',
          cache: 'no-cache', 
          credentials: 'same-origin', 
          headers: {
            'Content-Type': 'application/json'
          },
          redirect: 'follow',
          referrerPolicy: 'no-referrer',
          body: JSON.stringify(data)
        });
    
      const response = await rawResponse.json();
    
      console.log("tražim", response.token);

      // Save Data 
      setUser({
        token: response.token,
        user: response.user
      })

      return response;
    
      } 
      // Catch error
      catch (error) {
        alert(error.message)
      }
    };

    authUser();
  }, [])

  return (
    <div className="loginPage">
      <LoginForm />
    </div>
  )
}

export default LoginPage
