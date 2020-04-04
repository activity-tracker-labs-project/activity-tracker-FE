import React from "react";
import Header from "../components/Header";
import WelcomeNav from "../components/WelcomeNav";

function Welcome() {
    return (
    <div className='welcomecontainer'>
    <WelcomeNav />
    <Header />
    <div className="welcomeButtons">
        <button>Join for Free!</button>
        <button>Parent Portal Login</button>
    </div>
    </div>
    )
}

export default Welcome;