import React from 'react';

import AuthDisplay from '../../components/Auth/AuthDisplay/AuthDisplay';
import LogInForm from '../../components/Auth/AuthForms/LogInForm';
import './logInPage.css';


const LogInPage = () => {

    
    return (        
        <>
            <div className="logIn-page">
                <div className="logIn-container">
                    <AuthDisplay page="logIn" />
                    <LogInForm />
                </div>
            </div>
        </>
    )
};

export default LogInPage ;