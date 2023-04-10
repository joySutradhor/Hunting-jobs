import React from 'react';
import HeaderDesc from './../HeaderDesc/HeaderDesc';
import Cetegory from '../Cetegory/Cetegory';
import Features from "../Features/Features"
import FeaturesItem from '../Features/FeaturesItem';

const HomeContainer = () => {
    return (
        <div>
            <HeaderDesc></HeaderDesc>
            <Cetegory></Cetegory>
            <Features></Features>
            <FeaturesItem> </FeaturesItem>
        </div>
    );
};

export default HomeContainer;