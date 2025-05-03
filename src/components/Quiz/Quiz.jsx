import React, { useState, useRef } from 'react';

import './quiz.css';
import { testQuestions } from '../../data/Test/testQuestions';



const Quiz = () => {

    const [index, setIndex] = useState(0);
    const [problem, setProblem] = useState(testQuestions[index]);
    const [lock, setLock] = useState(false);
    const [score, setScore] = useState(0);
    const [result, setResult] = useState(false);

    const option1 = useRef(null);
    const option2 = useRef(null);
    const option3 = useRef(null);
    const option4 = useRef(null);

    const option_array = [option1, option2, option3, option4];

    
    const checkAnwer = (e, answer) => {
        if (!lock) {
            if (problem.answer === answer) {
                e.target.classList.add("correct");
                setLock(true);
                setScore(prev => prev + 1);
            } else {
                e.target.classList.add("wrong");
                setLock(true);
                option_array[problem.answer-1].current.classList.add("correct");
            }
        }
    };

    const next = () => {
        if (lock) {
            if (index === testQuestions.length-1) {
                setResult(true);
            } else {
                setIndex(prev => prev + 1);
                setProblem(testQuestions[index]);
                setLock(false);
                option_array.map(option => {
                    option.current.classList.remove("correct");
                    option.current.classList.remove("wrong");
                    return null;
                })
            }
        }
    }

    const reset = () => {
        setIndex(0);
        setProblem(testQuestions[index]);
        setScore(0);
        setLock(false);
        setResult(false);
    }

    return (
        <div>
            <div className="quiz_container">
                <h1>Quiz App</h1>
                <hr className="quiz_linebreak"/>

                {result ? 
                    <>
                        <h2 className="score">You scored {score} out of {testQuestions.length}</h2>
                        <button onClick={reset} className='quiz_button'>Reset</button>
                    </> :
                    <>
                        <h2 className="question">{index+1}. {problem.question}</h2>

                        <ul>
                            <li ref={option1} onClick={e => {checkAnwer(e, 1)}} className="quiz_option">{problem.option1}</li>
                            <li ref={option2} onClick={e => {checkAnwer(e, 2)}} className="quiz_option">{problem.option2}</li>
                            <li ref={option3} onClick={e => {checkAnwer(e, 3)}} className="quiz_option">{problem.option3}</li>
                            <li ref={option4} onClick={e => {checkAnwer(e, 4)}} className="quiz_option">{problem.option4}</li>
                        </ul>

                        <button onClick={next} className='quiz_button'>Next</button>

                        <div className="index">{index+1} of {testQuestions.length} Questions</div>
                    </>
                }
            </div>
        </div>
    )
}


export default Quiz;
