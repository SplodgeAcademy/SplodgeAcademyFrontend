import React from 'react';

import SectionButton from '../SectionButton/SectionButton';
import './infoSection.css';



const InfoSection = ({ id, textStart, topLine, heading, desc, buttonLabel, to, img }) => {


    return (
        <div className={`info_container ${textStart ? 'bgDark' : 'bgLight'}`} id={id}>
            <div className="info_wrapper">
                <div className={`info_row ${textStart ? 'start' : 'end'}`}>
                    <div className="column1">
                        <div className="text_wrapper">
                            {/* Text */}
                            <p className="top_line">{topLine}</p>
                            <h1 className={`heading ${textStart ? 'light-text' : 'dark-text'}`}>{heading}</h1>
                            <p className={`subtitle ${textStart ? 'light-text' : 'dark-text'}`}>{desc}</p>

                            {/* Link */}
                            <div className="btn_wrap">
                                <SectionButton to={to} btnStyle={textStart ? "green" : "dark"} children={buttonLabel} />
                            </div>
                        </div>
                    </div>

                    <div className="column2">
                        {/* Image */}
                        <div className="image_wrap">
                            <img src={img} className='image' alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default InfoSection;
