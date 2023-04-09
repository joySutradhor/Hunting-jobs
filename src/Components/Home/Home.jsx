import React from 'react';
import Header from '../Header/Header';
// import { Outlet } from 'react-router-dom';
import HeaderDesc from '../HeaderDesc/HeaderDesc';
import Cetegory from '../Cetegory/Cetegory';

const Home = () => {
    return (
        <div>
            <Header></Header>
           <HeaderDesc> </HeaderDesc>
           <Cetegory></Cetegory>
            
        </div>
    );
};

export default Home;