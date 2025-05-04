import React, { useContext } from 'react';

import LevelSelector from '../../components/LevelSelector/LevelSelector';
import  Navbar from '../../components/Navbar/Navbar';
import { AuthContext } from '../../context/authContext/AuthContext';




const CoursesPage = () => {

    const { currentUser } = useContext(AuthContext);
    
    return (
        <>
            {/* Navbar */}
            <Navbar />

            {currentUser._level === "notSelected" ? <LevelSelector /> : ""}
        </>
    )
};

export default CoursesPage;
