import React from 'react';
import CetegoryItem from './CetegoryItem';

const Cetegory = () => {
    return (
        <div className='mx-20 my-10'>
            <div className='text-center my-10'>
            <h1 className='text-2xl font-bold'>Job Category List </h1>
            <small>Explore thousands of job opportunities with all the information you need. Its your future</small>
            </div>
            <CetegoryItem></CetegoryItem>
        </div>
    );
};

export default Cetegory;