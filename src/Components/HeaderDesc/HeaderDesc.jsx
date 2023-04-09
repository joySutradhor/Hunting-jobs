import React from 'react';
import DescriptionImage from "./my.png"

const HeaderDesc = () => {
    return (
        <div className='mx-20 md:flex gap-5 justify-center items-center'>
            <div>
                <div className='text-[35px] font-bold text-[#1A1919]'>
                    <h2 >One Step </h2>
                    <h2 >Closer To Your</h2>
                    <h2 className='text-[#7E90FE]'>Dream JOb</h2>
                </div>
                <p className='my-5'>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                <button className='bg-gradient-to-t from-[#7E90FE] to-[#9873FF] text-white rounded-md p-2'>Get Started</button>
            </div>
            <div>
                <img src={DescriptionImage} alt="" />
            </div>
        </div>
    );
};

export default HeaderDesc;