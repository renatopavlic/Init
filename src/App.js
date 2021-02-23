import React, { useEffect, useState, useContext } from "react";
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage/LoginPage";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import Nav from "./components/Nav/Nav";
import { UserProvider } from "./context/UserContext";
import { UserContext } from "./context/UserContext";

function App() {

  return (
    <div className="app">
      <Router>
        <UserProvider>
          <Nav />
          <Switch>
              <Route path="/profile">
                <ProfilePage />
              </Route>
              <Route path="/">
                <LoginPage />
              </Route>
            </Switch>
        </UserProvider>
    </Router>
    </div>
  );
}

export default App;
