import React from 'react';
import CetegoryItem from './CetegoryItem';

const Cetegory = () => {
    return (
        <div className='md:mx-20 my-10 mx-2'>
            <div className='text-center my-10'>
            <h1 className='md:text-2xl font-bold text-[#1A1919]'>Job Category List </h1>
            <small className='md:leading-normal leading-3 text-[#757575] ' >Explore thousands of job opportunities with all the information you need. Its your future</small>
            </div>
            <CetegoryItem></CetegoryItem>
        </div>
    );
};

export default Cetegory;