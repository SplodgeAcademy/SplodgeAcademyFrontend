import React from 'react';

import FooterGrid from './FooterGrid/FooterGrid';
import SocialMedia from './SocialMedia/SocialMedia';
import './footer.css';



const Footer = () => {



    return (
        <footer className='footer_container'>
            <div className="footer_wrapper">
                <FooterGrid />
                <SocialMedia />
            </div>
        </footer>
    )
};

export default Footer;
