import React from 'react';
import Banner from '../Banner/Banner';
import Category from '../Categories/Category';
import PopularMenu from '../PopularMenu/PopularMenu';
import Featured from '../Featured/Featured';
import Testimonials from '../Testimonial/Testimonials';

const Home = () => {
    return (
        <div>
            This is Home
            <Banner></Banner>
            <Category></Category>
            <PopularMenu></PopularMenu>
            <Featured></Featured>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;