import React from 'react';
import { Link } from 'react-router-dom';
import { MdMarkEmailRead } from 'react-icons/md';
import { BsFillShieldLockFill } from 'react-icons/bs';
import { AiOutlineSwapRight } from 'react-icons/ai';

import image from '../../../images/branding/svg-spaceship.svg';
import './authForm.css';



const RegisterForm = () => {

    return (
        <>
            {/* Form Side */}
            <div className="form-container">
                <div className="top-section">
                    <Link to='/'><img className='top-image' src={image} alt="logo" /></Link>
                    <h3>Create an Account!</h3>
                </div>
            
                <form action="" className='auth-form'>
                    <span className='message'>Register status will go here</span>
            
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
            
                    {/* Password Input */}
                    <div className="input-div">
                        <label htmlFor="confirm-password">Confirm Password:</label>
                        <div className="input">
                            <BsFillShieldLockFill className="icon" />
                            <input type='password' id="confirm-password" placeholder='Confirm Password' />
                        </div>
                    </div>
            
                    {/* Log In Button */}
                    <button type='submit' className='submit-btn'>
                        <span>Sign Up</span>
                        <AiOutlineSwapRight className='btn-icon' />
                    </button>
                </form>
            </div>
        </>
    )
};

export default RegisterForm;
