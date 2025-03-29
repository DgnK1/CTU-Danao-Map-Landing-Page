import React, { useEffect } from 'react';

import './Landing.css';
import './components/Footer/Footer.css';

import Navigation from './components/NavBar/Navigation';
import MainSection from './components/Main/MainSection';
import FAQ from './components/FAQ/FAQ';
import TeamSection from './components/Team/TeamSection';
import Footer from './components/Footer/Footer';


function Landing() {

    return (
        <>
            <Navigation />

            <MainSection />

            <FAQ />

            <TeamSection />

            <Footer />
        </>
    );
}

export default Landing;