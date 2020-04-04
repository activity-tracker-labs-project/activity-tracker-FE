import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route } from "react-router-dom";
import Register from "./views/Register.js";
import Home from "./views/Home";
import Login from "./views/Login";

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={Home}/>
      <Route path="/register" component={Register}/>
      <Route path="/login" component={Login}/>
    </div>
  );
}

export default App;
