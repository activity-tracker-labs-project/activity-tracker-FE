import React from 'react';
import { Route } from "react-router-dom";
import Welcome from "./views/Welcome";
import Register from "./views/Register.js";
import Home from "./views/Home";
import Login from "./views/Login";
import AboutTeam from './components/AboutTeam';
import AboutApp from './components/AboutApp';

import './App.css';

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={Home}/>
      <Route path="/register" component={Register}/>
      <Route path="/login" component={Login}/>
      <Route exact path="/" component={Welcome}/>
      <Route exact path="/aboutteam" component={AboutTeam}/>
      <Route exact path="/aboutapp" component={AboutApp}/>
      <Route exact path="/login" component={Welcome}/>
      <Route exact path="/register" component={Welcome}/>
    </div>
  );
}

export default App;
