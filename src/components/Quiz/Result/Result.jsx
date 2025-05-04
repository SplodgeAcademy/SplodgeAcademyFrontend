import React from 'react';

import './result.css';



const Result = ({ reset, score }) => {



    return (
        <>
            <h2 className="score">You scored {score} out of 5</h2>
            <button onClick={reset} className='reset_button'>Reset</button>
        </>
    )
};


export default Result;
