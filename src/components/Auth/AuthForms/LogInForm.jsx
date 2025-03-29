import React from 'react';
import { Link } from 'react-router-dom';

import { MdMarkEmailRead } from 'react-icons/md';
import { BsFillShieldLockFill } from 'react-icons/bs';
import { AiOutlineSwapRight } from 'react-icons/ai';

import image from '../../../images/branding/svg-spaceship.svg';
import './authForm.css';



const LogInForm = () => {



    return (
        <>
            {/* Form Side */}
            <div className="form-container">
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
                            <input type='email' id="email" placeholder='Enter Email' />
                        </div>
                    </div>

                    {/* Password Input */}
                    <div className="input-div">
                        <label htmlFor="password">Password:</label>
                        <div className="input">
                            <BsFillShieldLockFill className="icon" />
                            <input type='password' id="password" placeholder='Enter Password' />
                        </div>
                    </div>

                    {/* Log In Button */}
                    <button type='submit' className='submit-btn'>
                        <span>Login</span>
                        <AiOutlineSwapRight className='btn-icon' />
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
