import React, { useState } from 'react';

import './navbarSearch.css';



const NavbarSearch = ({ handleClose }) => {


    // Term that is typed into searchbar
    const [searchTerm, setSearchTerm] = useState("");


    const handleSearch = (e) => {
        e.preventDefault();
        handleClose();
    };


    return (
        <>
            <li className='menu_search_container'>
                <form>
                    {/* Search Bar */}
                    <input
                        className='search_input' type="text" placeholder='Search by Name' value={searchTerm}
                        onChange={e => setSearchTerm(e.target.value)}
                    />

                    {/* Hidden Button */}
                    <button type='submit' style={{ display: "none" }} onClick={handleSearch}></button>
                </form>
            </li>
        </>
    )
};


export default NavbarSearch;
