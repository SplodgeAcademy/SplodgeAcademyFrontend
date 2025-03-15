import React from 'react';

import Button from '../../Button/Button';
import './infoSection.css';



const BACKGROUNDS = ['info--bgDark', 'info--bgLight'];
const TEXTCOLORS = ['info--textLight', 'info--textDark'];
const DESCCOLORS = ['info--descDark', 'info--descLight'];
const STYLES = ['info--start', 'info--end'];


const InfoSection = ({ id, background, textColor, descColor, infoStyle, topLine, heading, desc, buttonLabel, btnStyle, btnColor, to, img }) => {

    // Set default styling
    const checkBackground = BACKGROUNDS.includes(background) ? background : BACKGROUNDS[0];
    const checktextColor = TEXTCOLORS.includes(textColor) ? textColor : TEXTCOLORS[0];
    const checkDescColor = DESCCOLORS.includes(descColor) ? descColor : DESCCOLORS[0];
    const checkImageStart =STYLES.includes(infoStyle) ? infoStyle : STYLES[0];


    return (
        <div className={`info_container ${checkBackground}`} id={id}>
            <div className="info_wrapper">
                <div className={`info_row ${checkImageStart}`}>
                    <div className="column1">
                        <div className="text_wrapper">
                            {/* Content */}
                            <p className="top_line">{topLine}</p>
                            <h1 className={`heading ${checktextColor}`}>{heading}</h1>
                            <p className={`subtitle ${checkDescColor}`}>{desc}</p>

                            {/* Link */}
                            <div className="btn_wrap">
                                <Button to={to} btnColor={btnColor} btnStyle={btnStyle} children={buttonLabel} />
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
