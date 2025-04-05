import React from 'react';


import './level.css';



const Level = ({ index, handleLevelUpdate, option }) => {
    

    

    return (
        <>
            <div className="levels-card" key={index+1} onClick={() => handleLevelUpdate(index + 1)}>
                <img className="level-icon" src={option[2]} alt={option[0]} />
                <h2 className="level-title">{option[0]}</h2>
                <p className="level-info">{option[1]}</p>
            </div>
        </>
    )
};

export default Level;
