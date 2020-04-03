import React from "react";
import Header from "./Header";
import WelcomeNav from "./WelcomeNav";

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