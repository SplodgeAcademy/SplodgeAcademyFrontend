import React from 'react';

import video from '../../../videos/Spaceship1.mp4';
import SectionButton from '../SectionButton/SectionButton';
import { branding } from '../../../data/Branding/branding';
import './heroSection.css';



const HeroSection = () => {


    return (
        <div className='hero_container'>
            {/* Video */}
            <div className="heroBg">
                <video className="videoBg" src={video} type='video/mp4' autoPlay muted loop />
            </div>

            <div className="hero_content">
                {/* Content */}
                <h1 className='hero_heading'>{branding.slogan}</h1>
                <p className='hero_para'>{branding.welcome}</p>

                {/* Link to courses */}
                <div className="btn_wrapper">
                    <SectionButton to='/courses' btnStyle="green" children="Get Started!" />
                </div>
            </div>
        </div>
    )
};

export default HeroSection;
