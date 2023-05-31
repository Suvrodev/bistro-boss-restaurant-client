import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Footer from '../Pages/SharedPage/Footer/Footer';
import NavBar from '../Pages/SharedPage/NavBar/NavBar';

const Main = () => {
    const location=useLocation()
    // console.log(location)
    const noHeaderFooter=location.pathname.includes('login') || location.pathname.includes('signup')
    // console.log(noHeaderFooter)
    return (
        <div>
           {noHeaderFooter || <NavBar></NavBar>}
            <Outlet></Outlet>
           {noHeaderFooter || <Footer></Footer>}
        </div>
    );
};

export default Main;