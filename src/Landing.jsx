import React, { useEffect } from 'react';

import './Landing.css';
import './components/Possibilites/Poss.css';
import './components/Contributors/Contributors.css';
import './components/Footer/Footer.css';

import Navigation from './components/NavBar/Navigation';
import MainSection from './components/Main/MainSection';
import GallerySection from './components/FAQ/FAQ';
import PossibilitiesSection from './components/Possibilites/PossibilitiesSection';
import ContributorsSection from './components/Contributors/ContributorsSection';
import Footer from './components/Footer/Footer';


function Landing() {

    return (
        <>
            <Navigation />

            <MainSection />

            <GallerySection />

            <PossibilitiesSection />

            <ContributorsSection />

            <Footer />
        </>
    );
}

export default Landing;