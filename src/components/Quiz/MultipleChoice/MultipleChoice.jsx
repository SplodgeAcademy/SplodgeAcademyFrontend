import React from 'react';

import QuizOptions from '../QuizOptions/QuizOptions';
import './multipleChoice.css';



const MultipleChoice = ({ problem, lock, updateScore, next }) => {


    
    return (
        <>
            {/* Options */}   
            <QuizOptions lock={lock} updateScore={updateScore} next={next} problem={problem} />
        </>
    )
};


export default MultipleChoice;
