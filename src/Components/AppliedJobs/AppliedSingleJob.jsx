import React from 'react';

const AppliedSingleJob = ({ appliedjobs }) => {
    const { img, title, company, jobEnvironment, location, salary } = appliedjobs.job;
    return (
        <>
            <div className='flex justify-between mx-20 items-center my-2 shadow-md'>
            <div className='flex   items-center p-3'>
                <div>
                    <img src={img} alt="image from outside"  className='w-[120px]'/>
                </div>
                <div className='p-4'>
                    <h2 className='font-semibold'>{title}</h2>
                    <h3>{company}</h3>
                    <div className='flex gap-1 my-2'>
                        <button className='border border-indigo-400 p-1'>{jobEnvironment[0]}</button>
                        <button className='border border-indigo-400 p-1'>{jobEnvironment[1]}</button>
                    </div>
                    <div className='flex gap-2'>
                        <h3>{location}</h3>
                        <h3>Salary : {salary}</h3>
                    </div>
                </div>
            </div>
            <div>
                <button className='p-2 bg-gradient-to-t from-[#7E90FE] to-[#9873FF] mr-3 rounded-md text-white text-lg'>View Details </button>
            </div>
            </div>

        </>
    );
};

export default AppliedSingleJob;