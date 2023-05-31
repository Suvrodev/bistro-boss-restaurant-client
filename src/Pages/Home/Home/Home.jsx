import React from 'react';
import Banner from '../Banner/Banner';
import Category from '../Categories/Category';
import PopularMenu from '../PopularMenu/PopularMenu';
import Featured from '../Featured/Featured';
import Testimonials from '../Testimonial/Testimonials';
import { Helmet } from 'react-helmet-async';

const Home = () => {
    return (
        <div>
             <Helmet>
                <title>Home | Bistro Boss</title>
            </Helmet>

            This is Home
            <Banner></Banner>
            <Category></Category>
            <PopularMenu></PopularMenu>
            <Featured></Featured>

              {/* <li><NavLink className={({isActive})=> isActive? 'text-blue-500 font-extrabold':''}  to='/secret'>Secret</NavLink ></li> */}



        </div>
    );
};

export default Home;