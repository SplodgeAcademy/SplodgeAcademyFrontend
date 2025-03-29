import React from 'react';

import './homePage.css';
import Navbar from '../../components/Navbar/Navbar';
import HeroSection from '../../components/HomeSections/HeroSection/HeroSection';
import InfoSection from '../../components/HomeSections/InfoSection/InfoSection';
import Footer from '../../components/Footer/Footer';

import { ExamSection, AccountSection, CourseSection, ForumSection, ChatSection, WritingSection, SpeakingSection, ListeningSection, ReadingSection } from '../../data/Menus/HomeSections';

const HomePage = () => {


    
    return (
        <>
            {/* Navbar */}
            <Navbar />

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

            {/* Footer */}
            <Footer />
        </>
    )
};

export default HomePage ;