import React, { useEffect } from 'react';
import Hero from '../components/HomePageHero';
import HomePageAbout from '../components/HomePageAbout';
import LatestNews from '../components/LatestNews';
import UsefulLinks from '../components/UsefulLinks';
import Deputatlar from '../components/Deputatlar';
import ContactSection from '../components/ContactSection';

const Home = () => {
    useEffect(() => {
        scrollTo(0, 0);
        document.title = 'Baliqchi tuman hokimligi';
    });
    return (
        <>
            <Hero />
            <HomePageAbout />
            <Deputatlar />
            <LatestNews />
            <UsefulLinks />
            <ContactSection />
        </>
    )
};

export default Home;