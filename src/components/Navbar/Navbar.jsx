import React, { useState } from 'react';
import { FaSpaceAwesome } from "react-icons/fa6";
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import NavbarMenu from './NavbarMenu/NavbarMenu';
import { Branding } from '../../data/Branding/Branding';
import './navbar.css';





const Navbar = () => {

    // Toggle value for opening and closing menu
    const [toggle, setToggle] = useState(false);

    // Methods for toggling and closing menu
    const handleToggle = () => setToggle(!toggle);
    const handleClose = () => setToggle(false);




    return (
        <div className='navbar'>
            <div className="navbar_container container">

                {/* Logo Section */}
                <Link to="/" className="navbar_logo" onClick={handleClose}>
                    <FaSpaceAwesome className="logo_icon" />
                    {Branding.name}
                </Link>

                {/* Toggle Icons - Open and close menu when clicked */}
                <div className="navbar_toggle" onClick={handleToggle}>
                    {toggle ? <FaTimes className='toggle_icon1' /> : <FaBars className='toggle_icon2' />}
                </div>

                {/* Menu Component - contains Searchbar, links and Log In button */}
                <NavbarMenu handleClose={handleClose} toggle={toggle} />
            </div>
        </div>
    )
};

export default Navbar;
