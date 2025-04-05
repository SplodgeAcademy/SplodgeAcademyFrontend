import React from 'react';
import { Link } from 'react-router-dom';

import video from '../../../videos/Spaceship2.mp4';
import './authDisplay.css';

const AuthDisplay = ({ page }) => {


    return (
        <>
            <div className="video-container">
                {/* Video */}
                <video src={video} autoPlay muted loop></video>

                {/* Text */}
                <div className="text-container">
                    <h2 className="title">Something goes here for the title</h2>
                    <p>Something goes here</p>
                </div>

                {/* Log in / Sign up link */}
                <div className="bottom">
                    <span className="text">{page === "logIn" ? "Don't have an account?" : "Have an account?"}</span>
                    <Link to={page === "logIn" ? "/register" : "/logIn"} >
                        <button className="bottom-btn">{page === "logIn" ? "Sign Up" : "Log In"}</button>
                    </Link>
                </div>
            </div>
        </>
    )
};

export default AuthDisplay;
