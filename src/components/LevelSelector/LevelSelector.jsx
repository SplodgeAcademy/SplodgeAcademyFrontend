import React, { useContext } from 'react';

import { AuthContext } from '../../context/authContext/AuthContext';
import { updateUserInfoCall } from '../../apiCalls/User/updateUserInfoCall';

import { levelSelector } from '../../data/Menus/levelSelector';
import Level from './Level/Level';
import './levelSelector.css';


const LevelSelector = () => {


    const { token, dispatch } = useContext(AuthContext);
        
    // Updates user level
    const handleLevelUpdate = async (level) => {
        updateUserInfoCall(token, level, dispatch);
    };



    return (
        <>
            <div className='levels-container' id={LevelSelector.id}>
                {/* Heading */}
                <h1 className='levels-title'>{LevelSelector.title}</h1>
            
                <div className="levels-wrapper">
                    {/* Levels */}
                    {levelSelector.options.map((option, index) => (
                        <Level index={index} option={option} handleLevelUpdate={handleLevelUpdate} />
                    ))}
                </div>
            </div>
        </>
    )
};


export default LevelSelector;
