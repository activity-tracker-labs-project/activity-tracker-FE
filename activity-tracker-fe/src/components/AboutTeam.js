import React from "react";
import Header from "./Header";
import AboutTeamNav from "./AboutTeamNav";
import "./AboutTeam.css";


function AboutTeam() {
    return (
    <>
    <AboutTeamNav />
    <Header />
        <div className="teamcontainer">
            <h1>About Team</h1>
            <div className="aboutbox">
                <div className="toprow">
                    <div className="circle"></div>
                    <h3>Adetunji Shennaike</h3>
                    <h4>React Developer</h4>
                    <button>GitHub</button>
                    <button>LinkedIn</button>
                </div>
                <div className="toprow">
                    <div className="circle"></div>
                    <h3>Cole Wilkison</h3>
                    <h4>React Developer</h4>
                    <button>GitHub</button>
                    <button>LinkedIn</button>
                </div>
                <div className="toprow">
                    <div className="circle"></div>
                    <h3>Mario Rivera</h3>
                    <h4>Backend</h4>
                    <button>GitHub</button>
                    <button>LinkedIn</button>
                </div>
            </div>
            <div className="aboutboxbottom">
                <div className="bottomrow">
                     <div className="circle"></div>
                     <h3>Marc Tapp</h3>
                    <h4>React Developer</h4>
                    <button>GitHub</button>
                    <button>LinkedIn</button>
                </div>
                <div className="bottomrow">
                    <div className="circle"></div>
                    <h3>Jackie Atwood</h3>
                    <h4>React Developer</h4>
                    <button>GitHub</button>
                    <button>LinkedIn</button>
                </div>
        </div>
    </div>
    </>
    )
}

export default AboutTeam;