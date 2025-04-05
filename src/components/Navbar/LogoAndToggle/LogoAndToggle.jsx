import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FaSpaceAwesome } from "react-icons/fa6";
import { FaBars, FaTimes } from 'react-icons/fa';

import { branding } from '../../../data/Branding/branding';
import { AuthContext } from '../../../context/authContext/AuthContext';
import './logoAndToggle.css';



const LogoAndToggle = ({ handleClose, handleToggle, toggle }) => {

    const { currentUser } = useContext(AuthContext);


    return (
        <>
            {/* Logo Section */}
            <Link to="/" className="navbar_logo" onClick={handleClose}>
                <FaSpaceAwesome className="logo_icon" />
                {currentUser ? currentUser._name : branding.name}
            </Link>

            {/* Toggle Icons - Open and close menu when clicked */}
            <div className="navbar_toggle" onClick={handleToggle}>
                {toggle ? <FaTimes className='toggle_icon1' /> : <FaBars className='toggle_icon2' />}
            </div>
        </>
    )
};

export default LogoAndToggle;
