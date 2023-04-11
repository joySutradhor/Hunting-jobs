import React from 'react';
import DescriptionImage from "./my.png"

const HeaderDesc = () => {
    return (
        <div className='md:mx-20 md:my-10 p-4 md:p-4 mt-[-65px] md:flex gap-5 justify-center items-center'>
            <div>
                <div className='md:text-[35px] font-bold text-[#1A1919]'>
                    <h2 >One Step </h2>
                    <h2 >Closer To Your</h2>
                    <h2 className='text-[#7E90FE]'>Dream Job</h2>
                </div>
                <p className='md:my-5 my-2 text-[#757575]'>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                <button className='bg-gradient-to-t from-[#7E90FE] to-[#9873FF] text-white rounded-md p-2 md:text-sm text-[12px] my-4 md:my-0'>Get Started</button>
            </div>
            <div>
                <img src={DescriptionImage} alt="" />
            </div>
        </div>
    );
};

export default HeaderDesc;