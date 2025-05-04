import React from 'react';

import './openCloze.css';
import QuizInput from '../QuizInput/QuizInput';



const OpenCloze = ({ problem, lock, updateScore, next }) => {


    return (
        <>
            {/* Answer */}
            <QuizInput problem={problem} lock={lock} updateScore={updateScore} next={next} />
        </>
    )
};


export default OpenCloze;
