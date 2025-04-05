import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import { logOutCall } from '../../../apiCalls/Auth/LogOutCall';
import { AuthContext } from '../../../context/authContext/AuthContext';
import './navbarButton.css';




const NavbarButton = ({ handleClose }) => {

    const { currentUser, token, dispatch } = useContext(AuthContext);

    // Handles log out
    const handleLogOut = async (e) => {
        e.preventDefault();
        logOutCall(token, dispatch);
    }


    return (
        <>
            
            <li className="menu_logIn" onClick={handleClose}>
                {currentUser._name === "Guest" ? (
                    // Log In Button
                    <Link to={"/logIn"} className="logIn_button" >
                        Log In
                    </Link>  
                ) : (
                    // Log Out Button
                    <button onClick={handleLogOut} className="logIn_button" >
                        Log Out
                    </button> 
                )}
            </li>
        </>
    )
};


export default NavbarButton;
