import React from 'react';

import './socialMediaLink.css';



const SocialMediaLink = ({ link, icon }) => {


    return (
        <>
            {/* Link */}
            <a href={link[1]}  className="icon_link"  target="_blank" rel="noreferrer" aria-label={link[0]}>

                {/* Icon */}
                {icon}
            </a>
        </>
    )
};

export default SocialMediaLink;
