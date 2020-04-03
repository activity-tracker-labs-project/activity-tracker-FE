import React from "react";
import Header from "./Header";
import AboutAppNav from "./AboutAppNav";
import "./AboutApp.css";

function AboutApp() {
    return (
    <>
        <AboutAppNav />
        <Header />
        <div className="container">
            <div className="about">
                <h1>About App</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
            </div>
            <div className="quote">
                <h2>Customizable to meet your needs</h2>
                    </div>
            <div className="features">
                <h1>App Features</h1>
                <p>feature</p>
                <p>feature</p>
                <p>feature</p>
                <p>feature</p>
            </div>
            
            <div className="blurb">
                <h1>Keep kids engaged by incentivizing attainable goals</h1>
            </div>
           
        </div>
    </>
    )
}

export default AboutApp;