import React from 'react';
import { Route } from "react-router-dom";
import Welcome from "./views/Welcome";
import Register from "./views/Register.js";
import Login from "./views/Login";
import AboutTeam from './views/AboutTeam';
import AboutApp from './views/AboutApp';

import './styles/App.css';

function App() {
  return (
    <div className="App">
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
