import React from "react";
import img from "../assets/activKidSplash.png";
import img2 from "../assets/activKidLogo.png";
// import WelcomeNav from "./WelcomeNav";

function Header() {
    return (
        <div className="header">
            <img className="splash" src={img} alt="splash logo"></img>
            <div className="welcomebox">
                <img className="logo" src={img2} alt="activKid logo"></img>
                {/* <WelcomeNav /> */}
            </div>
        </div>
    )
}

export default Header;
