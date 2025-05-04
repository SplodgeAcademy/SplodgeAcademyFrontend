import React, { useRef } from 'react';

import './quizInput.css';



const QuizInput = ({ lock, problem, updateScore, next }) => {

    // Refs for form inputs
    const answerRef = useRef();


    // Handles checking for correct answer and changing css
    const checkAnswer = (e) => {
        e.preventDefault();

        if (!lock) {
            if (problem.answer === answerRef.current.value) {
                answerRef.current.classList.add("correct");
                updateScore(true);
            } else {
                answerRef.current.classList.add("wrong");
                updateScore(false);
            }
        }
    };


    // Handles next question and reseting css
    const handleNext = () => {
        if (lock) {
            answerRef.current.classList.remove("correct");
            answerRef.current.classList.remove("wrong");
            answerRef.current.value = ""
            next();
        }
    };



    return (
        <>
            {/* Answer Input */}
            <form  action="" onSubmit={checkAnswer}>
                <input ref={answerRef} className='quiz_input' type="text" placeholder='Enter Answer'/>
                <button type='submit' className='input_button'></button>
            </form>    

            {/* Next Question Button */}
            { lock ? 
                <button onClick={handleNext} className='next_button'>Next</button>
            :
                <button onClick={checkAnswer} className='next_button'>Submit</button>
            }      
        </>
    )
};


export default QuizInput;
