import React from "react";
import Header from "./Header";
import WelcomeNav from "./WelcomeNav";

function Welcome() {
    return (
    <>
    <WelcomeNav />
    <Header />
    <div className="welcomeButtons">
        <button>Join for Free!</button>
        <button>Parent Portal Login</button>
    </div>
    </>
    )
}

export default Welcome;