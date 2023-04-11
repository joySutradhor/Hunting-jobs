import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div>
            <div className='flex flex-col justify-center items-center h-screen'>
                <h1 className='text-[100px] font-bold'>404 - <span className='text-red-500'>Error</span></h1>
                {/* <Link to="/"> <button className='bg-blue-500 text-white p-2 ml-96 text-xl rounded-md'>Go back</button></Link> */}
            </div>
        </div>
    );
};

export default Error;