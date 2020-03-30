import React from "react";
import { NavLink } from "react-router-dom";

function WelcomeNav() {
    return (
    <div className="nav">
        <NavLink exact path to="/">Home</NavLink>
        <NavLink exact path to="/aboutapp">About the App</NavLink>
        <NavLink exact path to="/aboutteam">About the Team</NavLink>
    </div>
    )
}

export default WelcomeNav;