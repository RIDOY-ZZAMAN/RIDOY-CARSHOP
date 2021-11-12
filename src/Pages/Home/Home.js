import React from 'react';
import Footer from '../Footer/Footer';
import Navigation from '../Shared/Navigation/Navigation';
import ContactUs from './ContactUs/ContactUs';
import Products from './Products/Products';
import ReviewSection from './ReviewSection/ReviewSection';
import TopBanner from './TopBanner/TopBanner';

const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <TopBanner></TopBanner>
            <Products></Products>
            <ReviewSection></ReviewSection>
            <ContactUs></ContactUs>
            <Footer></Footer>

        </div>
    );
};

export default Home;