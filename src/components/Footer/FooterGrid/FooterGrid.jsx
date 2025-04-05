import React from 'react';

import { footerLinks } from '../../../data/Links/footerLinks';
import FooterLinks from '../FooterLinks/FooterLinks';
import './footerGrid.css';




const FooterGrid = () => {



    return (
        <>
            <div className="links_container">
                <div className="links_wrapper">
                    {/* Exam Links */}
                    <FooterLinks links={footerLinks[1]} title={footerLinks[0][0]} />

                    {/* Content Links */}
                    <FooterLinks links={footerLinks[2]} title={footerLinks[0][1]} />
                </div>

                <div className="links_wrapper">
                    {/* Account Links */}
                    <FooterLinks links={footerLinks[3]} title={footerLinks[0][2]} />    
                        
                    {/* Socialise Links */}
                    <FooterLinks links={footerLinks[4]} title={footerLinks[0][3]} />
                </div>
            </div>
        </>
    )
};

export default FooterGrid;
