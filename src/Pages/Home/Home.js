import React from 'react';
import Footer from '../Footer/Footer';
import Navigation from '../Shared/Navigation/Navigation';
import AboutUs from './AboutUs/AboutUs';
import ContactUs from './ContactUs/ContactUs';
import Products from './Products/Products';
import ReviewSection from './ReviewSection/ReviewSection';
import Services from './Services/Services';
import TopBanner from './TopBanner/TopBanner';

const Home = () => {
    return (
        <div id="home">
            <Navigation></Navigation>
            <TopBanner></TopBanner>
            <AboutUs></AboutUs>
            <Products></Products>
            <Services></Services>
            <ReviewSection></ReviewSection>
            <ContactUs></ContactUs>
            <Footer></Footer>

        </div>
    );
};

export default Home;