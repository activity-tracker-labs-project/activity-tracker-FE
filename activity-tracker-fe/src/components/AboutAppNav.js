import React from "react";
import { NavLink } from "react-router-dom";

function AboutAppNav() {
    return (
    <div className="nav">
        <NavLink exact path to="/">Home</NavLink>
        {/* <NavLink exact path to="/aboutapp">About the App</NavLink> */}
        <NavLink exact path to="/aboutteam">About the Team</NavLink>
        <NavLink exact path to="/">Login</NavLink>
        <NavLink exact path to="/">Sign Up</NavLink>
    </div>
    )
}

export default AboutAppNav;