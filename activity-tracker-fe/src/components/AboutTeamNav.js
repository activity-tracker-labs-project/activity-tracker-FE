import React from "react";
import { NavLink } from "react-router-dom";

function AboutTeamNav() {
    return (
    <div className="nav">
        <NavLink exact path to="/">Home</NavLink>
        <NavLink exact path to="/aboutapp">About the App</NavLink>
        {/* <NavLink exact path to="/aboutteam">About the Team</NavLink> */}
        <NavLink exact path to="/login">About the Team</NavLink>
        <NavLink exact path to="/register">About the Team</NavLink>
    </div>
    )
}

export default AboutTeamNav;