import React from 'react';

import Navbar from '../../components/Navbar/Navbar';
import HomeSections from '../../components/HomeSections/HomeSections';
import Footer from '../../components/Footer/Footer';


const HomePage = () => {


    
    return (
        <>
            {/* Navbar */}
            <Navbar />

            {/* HomePage Hero and Info Sections */}
            <HomeSections />

            {/* Footer */}
            <Footer />
        </>
    )
};

export default HomePage ;