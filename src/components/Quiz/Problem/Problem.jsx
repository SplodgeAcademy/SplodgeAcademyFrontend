import React from 'react';

import MultipleChoice from '../MultipleChoice/MultipleChoice';
import OpenCloze from '../OpenCloze/OpenCloze';
import SentenceTransformation from '../SentenceTransformation/SentenceTransformation';
import WordFormation from '../WordFormation/WordFormation';
import './problem.css';



const Problem = ({ problem, index, lock, updateScore, next }) => {


    return (
        <>
            {/* Question */}
            <h2 className="question">{index+1}. {problem.question}</h2>

            {/* Keyword */}
            <h2 className="keyword">{problem.keyword}</h2>
            
            {/* Problem Types */}
            { problem.type === 1 && <MultipleChoice problem={problem} lock={lock} updateScore={updateScore} next={next} />}
            { problem.type === 2 && <OpenCloze problem={problem} lock={lock} updateScore={updateScore} next={next}/>}
            { problem.type === 3 && <SentenceTransformation problem={problem} lock={lock} updateScore={updateScore} next={next} />}
            { problem.type === 4 && <WordFormation problem={problem} lock={lock} updateScore={updateScore} next={next} />}

            {/* Index */}
            <div className="index">{index+1} of 5 Questions</div>
        </>
    )
};

export default Problem;
