import React from "react";
import './App.css';
import LoginForm from "./components/LoginForm/LoginForm";
import Nav from "./components/Nav/Nav";

function App() {
  return (
    <div className="app">
      <Nav />
      <LoginForm />
    </div>
  );
}

export default App;
