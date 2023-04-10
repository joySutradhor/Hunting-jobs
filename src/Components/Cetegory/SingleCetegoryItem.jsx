import React from 'react';

const SingleCetegoryItem = ({job}) => {
    return (
        <div>
            <div className='p-3 w-[300px] '>
                    <div className='bg-gray-200 gap-4 p-5 rounded-md'>
                    <img src={job.img} alt="img come from outside"  className='h-[40px]'/>
                     <h2 className='text-[20px] text-[#201e1e]'>{job.title}</h2>
                     <small>{job.availableJobs}</small>
                    </div>

                </div>
        </div>
    );
};

export default SingleCetegoryItem;