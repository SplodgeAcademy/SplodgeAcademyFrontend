import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';

import { AuthContext } from '../../../context/authContext/AuthContext';
import { NavbarMenuLinks } from '../../../data/Links/NavbarMenuLinks';
import './navbarMenu.css';
import { logOutCall } from '../../../apiCalls/Auth/LogOutCall';



const NavbarMenu = ({toggle, handleClose}) => {

    // Term that is typed into searchbar
    const [searchTerm, setSearchTerm] = useState("");
    
    // Helper method to stop refresh from hidden submit button
    const handleButton = (e) => {
        e.preventDefault();
        handleClose();
    };

    const { currentUser, token, dispatch } = useContext(AuthContext);

    // Handles log out
    const handleLogOut = async (e) => {
        e.preventDefault();
        logOutCall(token, dispatch);
    }



    return (
        <ul className={toggle ? "navbar_menu active" : "navbar_menu"}>

            {/* Search Bar */}
            <li className='menu_search_container'>
                <form>
                    <input
                        className='search_input' type="text" placeholder='Search by Name' value={searchTerm}
                        onChange={e => setSearchTerm(e.target.value)}
                    />
                    <button type='submit' style={{ display: "none" }} onClick={handleButton}></button>
                </form>
            </li>

            {/* Menu Links */}
            {NavbarMenuLinks.map((link, index) => (
                <li className="menu_link_container" key={index + 1} onClick={handleClose}>
                    <Link to={link[1]} className="menu_link" >
                        {link[0]}
                    </Link>
                </li>
            ))}
            
            {/* Log In Button */}
            <li className="menu_logIn" onClick={handleClose}>
                {currentUser._name === "Guest" ? (
                    <Link to={"logIn"} className="logIn_button" >
                        Log In
                    </Link>  
                ) : (
                    <button onClick={handleLogOut} className="logIn_button" >
                        Log Out
                    </button> 
                )}
            </li>
        </ul>
    )
};

export default NavbarMenu;
