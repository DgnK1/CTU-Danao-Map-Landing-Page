import React, { useEffect } from 'react';

import './Landing.css';
import './components/Gallery/GallerySection.css';
import './components/Possibilites/Poss.css';
import './components/Contributors/Contributors.css';
import './components/Footer/Footer.css';

import Navigation from './components/NavBar/Navigation';
import MainSection from './components/Main/MainSection';
import GallerySection from './components/Gallery/GallerySection';
import PossibilitiesSection from './components/Possibilites/PossibilitiesSection';
import ContributorsSection from './components/Contributors/ContributorsSection';
import Footer from './components/Footer/Footer';

import useGallery from './hooks/useGallery';
import useAccordion from './hooks/useAccordion';

function Landing() {
    useGallery();
    useAccordion();

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