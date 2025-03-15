import React from 'react';

import OptionsGrid from '../../components/OptionsGrid/OptionsGrid';
import { LevelSelector } from '../../data/Menus/GridOptions';

import './examsPage.css';



const ExamsPage = () => {


    
    return (
        <>
            <OptionsGrid {...LevelSelector} />
        </>
    )
};

export default ExamsPage ;
