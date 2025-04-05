import React from 'react';


import HeroSection from './HeroSection/HeroSection';
import InfoSection from './InfoSection/InfoSection';
import { ExamSection, AccountSection, CourseSection, ForumSection, ChatSection, 
    WritingSection, SpeakingSection, ListeningSection, ReadingSection } from '../../data/Menus/homeSections';
import './homeSections.css';


const HomeSections = () => {


    return (
        <>
            {/* Hero */}
            <HeroSection />

            {/* Sections */}
            <InfoSection {...ExamSection} />
            <InfoSection {...AccountSection} />
            <InfoSection {...CourseSection} />
            <InfoSection {...ChatSection} />
            <InfoSection {...ForumSection} />
            <InfoSection {...WritingSection} />
            <InfoSection {...SpeakingSection} />
            <InfoSection {...ListeningSection} />
            <InfoSection {...ReadingSection} />
        </>
    )
};

export default HomeSections;
