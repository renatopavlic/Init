import React from 'react';
import { Link } from "react-router-dom";
import "./Nav.css";

function Nav() {

  return (
    <div className="nav">
      <a href="/">
      <img 
        src="/images/logo.png"
        alt="logo"
        className="nav__logo"
        />
        </a>
    </div>
  )
}

export default Nav;
