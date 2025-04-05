import React from 'react';
import { Link } from 'react-router-dom';

import './footerLinks.css';


const FooterLinks = ({ title, links }) => {


    return (
        <>
            <div className="link_items">
                {/* Title */}
                <h1 className="link_title">{title}</h1>

                {/* Column of Links */}
                {links.map((link, index) => (
                    <Link to={link[1]} key={index} className="footer_link" >
                        {link[0]}
                    </Link>
                ))}
            </div>
        </>
    )
};

export default FooterLinks;