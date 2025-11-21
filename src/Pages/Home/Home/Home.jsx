import React from 'react';
import Banner from '../Bannar/Banner';
import HowWorks from '../HowWorks/HowWorks';
import OurService from '../OurService/OurService';
import Brands from '../Brands/Brands';
import Delivery from '../Delivery/Delivery';
import Reviews from '../Reviews/Reviews';
import HeroBanner from '../HeroBaaner/HeroBanner';

const reviewsPromiss = fetch('reviews.json').then(res => res.json());

const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <HowWorks></HowWorks>
           <OurService></OurService>
           <Brands></Brands>
           <Delivery></Delivery>
           <Reviews reviewsPromiss={reviewsPromiss}></Reviews>
           <HeroBanner></HeroBanner>
        </div>
    );
};

export default Home;