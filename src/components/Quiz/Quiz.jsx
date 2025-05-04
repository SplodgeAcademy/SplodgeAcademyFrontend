import React, { useState } from 'react';

import { testQuestionsST } from '../../data/Test/testQuestions';
import Result from './Result/Result';
import Problem from './Problem/Problem';
import './quiz.css';



const Quiz = () => {

    // Current Question Index
    const [index, setIndex] = useState(0);
    // Current Problem
    const [problem, setProblem] = useState(testQuestionsST[index]);
    // Locks quiz after answer is selected
    const [lock, setLock] = useState(false);
    // Current Score
    const [score, setScore] = useState(0);
    // Toggles Result
    const [result, setResult] = useState(false);


    // Updates score
    const updateScore = (correct) => {
        if (correct) {
            setScore(prev => prev + 1);
        }

        setLock(true);
    };

    // Handles next question
    const next = () => {
         if (index === testQuestionsST.length-1) {
            setResult(true);
        } else {
            setIndex(prev => prev + 1);
            setProblem(testQuestionsST[index]);
            setLock(false);
        }
    }


    // Resets all state
    const reset = () => {
        setIndex(0);
        setProblem(testQuestionsST[index]);
        setScore(0);
        setLock(false);
        setResult(false);
    };


    return (
        <>
            <div className="quiz_container">
                {/* Quiz Title */}
                <h1>Quiz App</h1>
                <hr className="quiz_linebreak"/>

                {result ? 
                    // Result Page
                    <Result reset={reset} score={score} /> 
                : 
                    // Problem
                    <Problem problem={problem} index={index} lock={lock} updateScore={updateScore} next={next} />
                }
            </div>
        </>
    )
}


export default Quiz;
