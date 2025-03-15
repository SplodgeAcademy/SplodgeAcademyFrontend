import React from 'react';
import { Link } from 'react-router-dom';

import "./button.css";

const STYLES = ['btn--primary', 'btn--secondary'];
const SIZES = ['btn--big', 'btn--small'];
const COLORS = ['btn--dark', 'btn--white'];
const FONTSIZES = ['btn--fontBig', 'btn--fontSmall'];


const Button = ({to, children, btnStyle, btnSize, btnColor, btnFont}) => {

    const checkBtnStyle = STYLES.includes(btnStyle) ? btnStyle : STYLES[0];
    const checkBtnSize = SIZES.includes(btnSize) ? btnSize : SIZES[0];
    const checkBtnColor = COLORS.includes(btnColor) ? btnColor : COLORS[0];
    const checkBtnFont = FONTSIZES.includes(btnFont) ? btnFont : FONTSIZES[0];

    return (
        <Link to={to} className={`btn ${checkBtnStyle} ${checkBtnSize} ${checkBtnColor} ${checkBtnFont}`}>
            {children}
        </Link>
    )
};

export default Button;
