import React from 'react';
import { Link } from 'react-router-dom';

import { navbarMenuLinks } from '../../../data/Links/navbarMenuLinks';
import './navbarLinks.css';



const NavbarLinks = ({ handleClose }) => {



    return (
        <>
            {navbarMenuLinks.map((link, index) => (
                <li className="menu_link_container" key={index + 1} onClick={handleClose}>
                    {/* Navbar Link */}
                    <Link to={link[1]} className="menu_link" >
                        {link[0]}
                    </Link>
                </li>
            ))}
        </>
    )
};


export default NavbarLinks;
