import React, { useRef } from 'react';

import './quizOptions.css';



const QuizOptions = ({ lock, updateScore, next, problem }) => {


    // Refs for options
    const option1 = useRef(null);
    const option2 = useRef(null);
    const option3 = useRef(null);
    const option4 = useRef(null);
        
    // Array of options
    const option_array = [option1, option2, option3, option4];


    // Handles checking for correct answer and changing css
    const checkAnswer = (e, answer) => {
        if (!lock) {
            if (problem.answer === answer) {
                e.target.classList.add("correct");
                updateScore(true);
            } else {
                e.target.classList.add("wrong");
                updateScore(false);
                option_array[problem.answer-1].current.classList.add("correct");
            }
        }
    };

    // Handles next question and reseting css
    const handleNext = () => {
        if (lock) {
            option_array.map(option => {
                option.current.classList.remove("correct");
                option.current.classList.remove("wrong");
                return null;
            })
            next();
        }
    };



    return (
        <>
            {/* Options */}
            <ul>
                <li ref={option1} onClick={e => {checkAnswer(e, 1)}} className="quiz_option">{problem.option1}</li>
                <li ref={option2} onClick={e => {checkAnswer(e, 2)}} className="quiz_option">{problem.option2}</li>
                <li ref={option3} onClick={e => {checkAnswer(e, 3)}} className="quiz_option">{problem.option3}</li>
                <li ref={option4} onClick={e => {checkAnswer(e, 4)}} className="quiz_option">{problem.option4}</li>
            </ul>

            {/* Next Question Button */}      
            <button onClick={handleNext} className='next_button'>Next</button>
        </>
    )
};

export default QuizOptions;
