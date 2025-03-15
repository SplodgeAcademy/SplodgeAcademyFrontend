import React from 'react';

import video from '../../../videos/Spaceship1.mp4';
import { Branding } from '../../../data/Branding/Branding';
import './heroSection.css';
import Button from '../../Button/Button';


const HeroSection = () => {


    return (
        <div className='hero_container'>
            {/* Video */}
            <div className="heroBg">
                <video className="videoBg" src={video} type='video/mp4' autoPlay muted loop />
            </div>

            <div className="hero_content">
                {/* Content */}
                <h1 className='hero_heading'>{Branding.slogan}</h1>
                <p className='hero_para'>{Branding.welcome}</p>

                {/* Link to courses */}
                <div className="btn_wrapper">
                    <Button to='/courses' children="Get Started!" />
                </div>
            </div>
        </div>
    )
};

export default HeroSection;
