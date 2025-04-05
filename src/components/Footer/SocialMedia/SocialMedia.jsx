import React from 'react';
import { Link } from 'react-router-dom';

import { FaFacebook, FaInstagram, FaTwitter, FaYoutube, FaLinkedin } from 'react-icons/fa';
import { FaSpaceAwesome } from 'react-icons/fa6';

import { branding } from '../../../data/Branding/branding';
import { socialMediaLinks } from '../../../data/Links/socialMediaLinks';
import './socialMedia.css';
import SocialMediaLink from '../SocialMediaLink/SocialMediaLink';




const SocialMedia = () => {

    

    return (
        <>
            <div className="social_media">
                <div className="social_wrapper">
                    {/* Logo */}
                    <Link to='/' className="social_logo">
                        <FaSpaceAwesome className="logo_icon" />
                        {branding.name}
                    </Link>

                    {/* Slogan */}
                    <small className="social_message">
                        {branding.slogan}
                    </small>

                    <div className="social_icons">
                        {/* Facebook Link */}
                        <SocialMediaLink link={socialMediaLinks[0]} icon={<FaFacebook />} />

                        {/* Instagram Link */}
                        <SocialMediaLink link={socialMediaLinks[1]} icon={<FaInstagram />} />

                        {/* Youtube Link */}
                        <SocialMediaLink link={socialMediaLinks[2]} icon={<FaYoutube/>} />

                        {/* Twitter Link */}
                        <SocialMediaLink link={socialMediaLinks[3]} icon={<FaTwitter />} />

                        {/* LinkedIn Link */}
                        <SocialMediaLink link={socialMediaLinks[4]} icon={<FaLinkedin />} />
                    </div>
                </div>
            </div>
        </>
    )
};

export default SocialMedia;
