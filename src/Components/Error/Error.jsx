import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div>
            <div className='flex flex-col justify-center items-center h-screen'>
                <h1 className='text-[100px] font-bold'>404 - <span className='text-red-500'>Error</span></h1>
            </div>
        </div>
    );
};

export default Error;