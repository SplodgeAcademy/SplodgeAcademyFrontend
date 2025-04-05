import React, { useState } from 'react';

import LogoAndToggle from './LogoAndToggle/LogoAndToggle';
import NavbarMenu from './NavbarMenu/NavbarMenu';
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
                {/* Navbar Logo and Toggle Button */}
                <LogoAndToggle handleClose={handleClose} handleToggle={handleToggle} toggle={toggle} />

                {/* Navbar Menu */}
                <NavbarMenu handleClose={handleClose} toggle={toggle} />
            </div>
        </div>
    )
};

export default Navbar;
