import React, { useContext } from 'react';

import SelectLevelsGrid from '../../components/OptionGrids/Levels/SelectLevelsGrid';
import  Navbar from '../../components/Navbar/Navbar';
import { AuthContext } from '../../context/authContext/AuthContext';
import './coursesPage.css';



const CoursesPage = () => {

    const { currentUser } = useContext(AuthContext);
    
    return (
        <>
            {/* Navbar */}
            <Navbar />
            {currentUser._level === "notSelected" ? <SelectLevelsGrid /> : ""}
        </>
    )
};

export default CoursesPage;
