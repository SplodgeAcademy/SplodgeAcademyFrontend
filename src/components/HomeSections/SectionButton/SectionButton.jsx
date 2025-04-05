import React from 'react';
import { Link } from 'react-router-dom';


import "./sectionButton.css";


const SectionButton = ({ to, children, btnStyle }) => {


    return (
        <>
            <Link to={to} className={`section-button ${btnStyle}`}>
                {children}
            </Link>
        </>
    )
};


export default SectionButton;
