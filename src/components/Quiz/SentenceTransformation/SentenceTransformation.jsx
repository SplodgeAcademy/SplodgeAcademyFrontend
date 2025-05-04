import React from 'react';

import QuizInput from '../QuizInput/QuizInput';
import './sentenceTransformation.css';


const SentenceTransformation = ({ problem, lock, updateScore, next }) => {


    return (
        <>
            {/* Prompt */}
            <h2 className="prompt">{problem.prompt}</h2>

            {/* Answer */}
            <QuizInput problem={problem} lock={lock} updateScore={updateScore} next={next} />
        </>
    )
};


export default SentenceTransformation;
