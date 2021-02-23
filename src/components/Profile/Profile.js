import React, { useContext } from 'react';
import { UserContext } from "../../context/UserContext";
import "./Profile.css";

function Profile() {

  const {user, setUser} = useContext(UserContext);

  return (
    <div className="profile">
      <h1>You're signed in!</h1>
      <h2>Welcome 
        <span className="profile__name">{user.token}</span>
      </h2>
      <button onClick={() => {
        setUser({fullName: "Neli Pavlić"});
      }}>Logout</button>
    </div>
  )
}

export default Profile;
