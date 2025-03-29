import React from 'react';
import { Link } from 'react-router-dom';

import video from '../../../videos/Spaceship2.mp4';
import './authDisplay.css';

const AuthDisplay = ({ page }) => {


    return (
        <>
            {/* Video Side */}
            <div className="video-container">
                <video src={video} autoPlay muted loop></video>

                <div className="text-container">
                    <h2 className="title">Something goes here for the title</h2>
                    <p>Something goes here</p>
                </div>

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
