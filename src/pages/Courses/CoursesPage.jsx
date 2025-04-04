import React, { use, useContext } from 'react';

import SelectLevelsGrid from '../../components/OptionGrids/Levels/SelectLevelsGrid';
import  Navbar from '../../components/Navbar/Navbar';
import { AuthContext } from '../../context/authContext/AuthContext';
import './coursesPage.css';



const CoursesPage = () => {

    const { user } = useContext(AuthContext);
    console.log(user.level);
    
    return (
        <>
            {/* Navbar */}
            <Navbar />
            {user.level === "notSelected" ? <SelectLevelsGrid /> : ""}
        </>
    )
};

export default CoursesPage;
