import React, { useContext, useRef } from 'react';
import { Link } from 'react-router-dom';
import CircularProgress from '@mui/material/CircularProgress';

import { MdMarkEmailRead } from 'react-icons/md';
import { BsFillShieldLockFill } from 'react-icons/bs';
import { AiOutlineSwapRight } from 'react-icons/ai';

import image from '../../../images/branding/svg-spaceship.svg';
import { AuthContext } from '../../../context/authContext/AuthContext';
import { registrationCall } from '../../../apiCalls/Auth/RegisterCall';
import './authForm.css';



const RegisterForm = () => {


    // Refs for form inputs
    const emailRef = useRef();
    const passwordRef = useRef();
    const passwordConfirmationRef = useRef();

    // Is fetching state to deactivate buttons when trying to log in
    const { isFetching, dispatch } = useContext(AuthContext);


    // Passes email and password refs to register call
    const handleRegister = async (e) => {
        e.preventDefault();
        if (passwordRef.current.value === passwordConfirmationRef.current.value) {
            registrationCall(emailRef.current.value, passwordRef.current.value, dispatch);
        }
    }



    return (
        <>
            {/* Form Side */}
            <div className="form-container" onSubmit={handleRegister}>
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
            
                    {/* Password Confirmation Input */}
                    <div className="input-div">
                        <label htmlFor="confirm-password">Confirm Password:</label>
                        <div className="input">
                            <BsFillShieldLockFill className="icon" />
                            <input type='password' required ref={passwordConfirmationRef} id="confirm-password" placeholder='Confirm Password' />
                        </div>
                    </div>
            
                    {/* Register Button */}
                    <button type='submit' className='submit-btn'>
                        {isFetching ? <CircularProgress /> : 
                            <><span>Sign Up</span><AiOutlineSwapRight className='btn-icon' /></>
                        }
                    </button>
                </form>
            </div>
        </>
    )
};

export default RegisterForm;
