import React from 'react';

import AuthDisplay from '../../components/Auth/AuthDisplay/AuthDisplay';
import RegisterForm from '../../components/Auth/AuthForms/RegisterForm';
import './registerPage.css';


const RegisterPage = () => {

    
    return (        
        <>
            <div className="register-page">
                <div className="register-container">
                    <AuthDisplay page="register" />
                    <RegisterForm />
                </div>
            </div>
        </>
    )
};

export default RegisterPage ;