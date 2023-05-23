import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Pages/SharedPage/Footer/Footer';
import NavBar from '../Pages/SharedPage/NavBar/NavBar';

const Main = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;