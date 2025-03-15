import React from 'react';

import './homePage.css';
import HeroSection from '../../components/HomeSections/HeroSection/HeroSection';
import InfoSection from '../../components/HomeSections/InfoSection/InfoSection';
import { ExamSection, AccountSection, CourseSection, ForumSection, ChatSection, WritingSection, SpeakingSection, ListeningSection, ReadingSection } from '../../data/Menus/HomeSections';

const HomePage = () => {


    
    return (
        <>
            <HeroSection />
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

export default HomePage ;