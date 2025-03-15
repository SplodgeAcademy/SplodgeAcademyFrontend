import React from 'react';

import OptionsGrid from '../../components/OptionsGrid/OptionsGrid';
import { LevelSelector } from '../../data/Menus/GridOptions';

import './coursesPage.css';



const CoursesPage = () => {


    
    return (
        <>
            <OptionsGrid {...LevelSelector} />
        </>
    )
};

export default CoursesPage;
