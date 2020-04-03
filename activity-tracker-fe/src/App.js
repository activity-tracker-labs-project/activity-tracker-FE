import React from 'react';
import Welcome from "./components/Welcome";
import { Route } from "react-router-dom";

import './App.css';
import AboutTeam from './components/AboutTeam';
import AboutApp from './components/AboutApp';

function App() {
  return (
    <div className="app">
      <Route exact path="/" component={Welcome}></Route>
      <Route exact path="/aboutteam" component={AboutTeam}></Route>
      <Route exact path="/aboutapp" component={AboutApp}></Route>
      <Route exact path="/login" component={Welcome}></Route>
      <Route exact path="/register" component={Welcome}></Route>
    </div>
  );
}

export default App;
