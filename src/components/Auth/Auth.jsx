import React from 'react';

import AuthDisplay from './AuthDisplay/AuthDisplay';
import LogInForm from './AuthForms/LogInForm';
import RegisterForm from './AuthForms/RegisterForm';
import './auth.css';




const Auth = ({ page }) => {



    return (
        <>
            <div className="auth-page">
                <div className="auth-container">
                    {/* Video Section */}
                    <AuthDisplay page={page} />

                    {/* Log In / Register Form */}
                    {page === "logIn" ? <LogInForm /> : <RegisterForm /> }
                </div>
            </div>
        </>
    )
};


export default Auth;
