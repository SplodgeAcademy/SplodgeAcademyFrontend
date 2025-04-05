import React from 'react';

import NavbarSearch from '../NavbarSearch/NavbarSearch';
import NavbarButton from '../NavbarButton/NavbarButton';
import NavbarLinks from '../NavbarLinks/NavbarLinks';
import './navbarMenu.css';




const NavbarMenu = ({toggle, handleClose}) => {

    

    return (
        <ul className={toggle ? "navbar_menu active" : "navbar_menu"}>
            {/* Search Bar */}
            <NavbarSearch handleClose={handleClose} />

            {/* Navbar Links */}
            <NavbarLinks handleClose={handleClose} />
            
            {/* Log In Button */}
            <NavbarButton handleClose={handleClose} />
        </ul>
    )
};

export default NavbarMenu;
