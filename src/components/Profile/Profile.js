import React, { useContext, useEffect } from 'react';
import "./Profile.css";
import { UserContext } from "../../context/UserContext";
import userService from "../../services/user.service";
import { useHistory } from "react-router-dom";

function Profile() {

  // History Hook
  const history = useHistory();
  // User Context
  const {user, setUser} = useContext(UserContext);

  useEffect(() => {
    // Get User Data Function
    const getUserData = () => {
      userService.getUserData(user.token)
      .then(data => {
        if(data.errorMessage){
          history.push("/");
        } else setUser({...user, user: data})
      })
      .catch(e => {
        console.log("Looking for error?", e);
      }); 
    }

    // Call Function
    getUserData();
    
  }, [])

  useEffect(() => {
    // Check Token
    if(!user.token){
      // Return To Login
      history.push("/");
    } else {
      // Token OK
      console.log("user ok")
    };
  }, [user])

  return (
    <div>
      {user.user && <div className="profile">
        <h1>You're signed in!</h1>
        <h2>Welcome
          <span className="profile__name">{` ${user.user.firstName} ${user.user.lastName}!`}</span>
        </h2>
        <button onClick={() => {
          setUser({user: null, token: null});
        }}>Logout</button>
      </div>}
      {!user.user && <p>not logged in!</p>}
    </div>
  )
}

export default Profile;
