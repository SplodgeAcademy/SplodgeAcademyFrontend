import React from 'react';

import QuizInput from '../QuizInput/QuizInput';
import './wordFormation.css';



const WordFormation = ({ problem, lock, updateScore, next }) => {


    return (
        <>
            {/* Answer */}
            <QuizInput problem={problem} lock={lock} updateScore={updateScore} next={next} />
        </>
    )
};


export default WordFormation;
