import React, { useContext } from 'react';

import { AuthContext } from '../../../context/authContext/AuthContext';
import { LevelSelector } from '../../../data/Menus/GridOptions';
import { updateUserInfoCall } from '../../../apiCalls/User/updateUserInfoCall';
import '../optionsGrid.css';



const SelectLevelsGrid = () => {
    

    const { token, dispatch } = useContext(AuthContext);
    
    // Updates user level
    const handleLevelUpdate = async (level) => {
        console.log(token);
        console.log(level);
        updateUserInfoCall(token, level, dispatch);
    };



    return (
        <>
            <div className='levels-container' id={LevelSelector.id}>
                <h1 className='levels-title'>{LevelSelector.title}</h1>

                <div className="levels-wrapper">
                    {LevelSelector.options.map((option, index) => (
                        <div className="levels-card" key={index+1} onClick={() => handleLevelUpdate(index + 1)}>
                            <img className="level-icon" src={option[2]} alt={option[0]} />
                            <h2 className="level-title">{option[0]}</h2>
                            <p className="level-info">{option[1]}</p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
};

export default SelectLevelsGrid;
