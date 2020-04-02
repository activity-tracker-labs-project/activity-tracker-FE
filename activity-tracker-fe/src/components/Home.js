import React from "react";
import { Link } from "react-router-dom"

const Home = () => {
    return (
        <div>
            <h1>ActivKid</h1>
            <Link className="register" to={"/register"}>
                <h3 className="join">Join for Free!</h3>
            </Link>
            <Link className="login" to={"/login"}>
                <h3 className="login-here">Login Here</h3>
            </Link>
        </div>
    )
}

export default Home;