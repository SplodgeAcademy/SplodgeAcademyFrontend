import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube, FaLinkedin } from 'react-icons/fa';
import { FaSpaceAwesome } from 'react-icons/fa6';

import { SMLinks } from '../../data/Links/SocialMediaLinks';
import { FooterLinks } from '../../data/Links/FooterLinks';
import { Branding } from '../../data/Branding/Branding';
import './footer.css';



const Footer = () => {



    return (
        <footer className='footer_container'>
            <div className="footer_wrapper">
                <div className="links_container">
                    <div className="links_wrapper">
                        {/* Exam Links */}
                        <div className="link_items">
                            <h1 className="link_title">{FooterLinks[0][0]}</h1>

                            {FooterLinks[1].map((link, index) => (
                                <Link to={link[1]} key={index} className="footer_link" >
                                    {link[0]}
                                </Link>
                            ))}
                        </div>

                        {/* Content Links */}
                        <div className="link_items">
                            <h1 className="link_title">{FooterLinks[0][1]}</h1>

                            {FooterLinks[2].map((link, index) => (
                                <Link to={link[1]} key={index} className="footer_link" >
                                    {link[0]}
                                </Link>
                            ))}
                        </div>
                    </div>

                    <div className="links_wrapper">
                        {/* Account Links */}
                        <div className="link_items">
                            <h1 className="link_title">{FooterLinks[0][2]}</h1>

                            {FooterLinks[3].map((link, index) => (
                                <Link to={link[1]} key={index} className="footer_link" >
                                    {link[0]}
                                </Link>
                            ))}
                        </div>
                        
                        {/* Socialise Links */}
                        <div className="link_items">
                            <h1 className="link_title">{FooterLinks[0][3]}</h1>

                            {FooterLinks[4].map((link, index) => (
                                <Link to={link[1]} key={index} className="footer_link" >
                                    {link[0]}
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="social_media">
                    <div className="social_wrapper">
                        {/* Logo */}
                        <Link to='/' className="social_logo">
                            <FaSpaceAwesome className="logo_icon" />
                            {Branding.name}
                        </Link>

                        {/* Slogan */}
                        <small className="social_message">
                            {Branding.slogan}
                        </small>

                        {/* Social Media Icons */}
                        <div className="social_icons">
                            <a href={SMLinks[0][1]}  className="icon_link"  target="_blank" 
                                rel="noreferrer" aria-label={SMLinks[0][0]}>
                                <FaFacebook />
                            </a>

                            <a href={SMLinks[1][1]}  className="icon_link" target="_blank" 
                                rel="noreferrer" aria-label={SMLinks[1][0]}>
                                <FaInstagram />
                            </a>

                            <a href={SMLinks[2][1]}  className="icon_link" target="_blank" 
                                rel="noreferrer" aria-label={SMLinks[2][0]}>
                                <FaYoutube />
                            </a>

                            <a href={SMLinks[3][1]} className="icon_link" target="_blank" 
                                rel="noreferrer" aria-label={SMLinks[3][0]}>
                                <FaTwitter />
                            </a>

                            <a href={SMLinks[4][1]}  className="icon_link" target="_blank" 
                                rel="noreferrer" aria-label={SMLinks[4][0]}>
                                <FaLinkedin />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
};

export default Footer;
