import React from 'react';



import './optionsGrid.css';



const OptionsGrid = ({ id, title, options}) => {



    return (
        <div className='levels-container' id={id}>
            <h1 className='levels-title'>{title}</h1>

            <div className="levels-wrapper">
                {options.map((option, index) => (
                    <div className="levels-card" key={index+1} >
                        <img className="level-icon" src={option[2]} alt={option[0]} />
                        <h2 className="level-title">{option[0]}</h2>
                        <p className="level-info">{option[1]}</p>
                    </div>
                ))}
            </div>
        </div>
    )
};

export default OptionsGrid;
