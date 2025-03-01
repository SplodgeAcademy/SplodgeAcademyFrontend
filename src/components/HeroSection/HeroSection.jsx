import React from 'react';

import video from '../../videos/Spaceship1.mp4';
import './heroSection.css';


const HeroSection = () => {


    return (
        <div className='hero_container'>
            <div className="heroBg">
                <video className="videoBg" src={video} type='video/mp4' autoPlay muted loop />
            </div>

            <div className="hero_content">
                <h1 className='hero_heading'>Mastering English made fun!</h1>
                <p className='hero_para'>
                    Join Splodge Academy, have fun improving your langauge skills and climb the ranks 
                    until you are ready to go undercover with native speakers.
                </p>
            </div>
        </div>
    )
};

export default HeroSection;
