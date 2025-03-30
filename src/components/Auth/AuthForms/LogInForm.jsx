import React, { useRef, useContext } from 'react';
import { Link } from 'react-router-dom';
import CircularProgress from '@mui/material/CircularProgress';

import { MdMarkEmailRead } from 'react-icons/md';
import { BsFillShieldLockFill } from 'react-icons/bs';
import { AiOutlineSwapRight } from 'react-icons/ai';

import image from '../../../images/branding/svg-spaceship.svg';
import { AuthContext } from '../../../context/authContext/AuthContext';
import { logInCall } from '../../../apiCalls/User/LogInCall';
import './authForm.css';



const LogInForm = () => {

    // Refs for form inputs
    const emailRef = useRef();
    const passwordRef = useRef();

    // Is fetching state to deactivate buttons when trying to log in
    const { isFetching, dispatch } = useContext(AuthContext);



    // Passes email and password refs to log in call
    const handleLogIn = async (e) => {
        e.preventDefault();
        logInCall(emailRef.current.value, passwordRef.current.value, dispatch);
    }



    return (
        <>
            {/* Form Side */}
            <div className="form-container" onSubmit={handleLogIn}>
                <div className="top-section">
                    <Link to='/'><img className='top-image' src={image} alt="logo" /></Link>
                    <h3>Welcome Back!</h3>
                </div>

                <form action="" className='auth-form'>
                    <span className='message'>Log in status will go here</span>

                    {/* Email Input */}
                    <div className="input-div">
                        <label htmlFor="email">Email:</label>
                        <div className="input">
                            <MdMarkEmailRead className="icon" />
                            <input type='email' required ref={emailRef} id="email" placeholder='Enter Email' />
                        </div>
                    </div>

                    {/* Password Input */}
                    <div className="input-div">
                        <label htmlFor="password">Password:</label>
                        <div className="input">
                            <BsFillShieldLockFill className="icon" />
                            <input type='password' required ref={passwordRef} id="password" placeholder='Enter Password' />
                        </div>
                    </div>

                    {/* Log In Button */}
                    <button type='submit' className='submit-btn' disabled={isFetching}>
                        {isFetching ? <CircularProgress /> : 
                            <><span>Log In</span><AiOutlineSwapRight className='btn-icon' /></>
                        }
                    </button>
                            
                    <span className='forgot-password'>
                        Forgot your password? <a href="/">Click Here</a>
                    </span>
                </form>
            </div>
        </>
    )
};

export default LogInForm;
