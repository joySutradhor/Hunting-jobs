import React from 'react';

const SingleCetegoryItem = ({job}) => {
    return (
        <div>
            <div className='md:p-3 my-1 '>
                    <div className='bg-[#f0f1f5] md:gap-4 p-5 rounded-md'>
                    <img src={job.img} alt="img come from outside"  className='h-[40px]'/>
                     <h2 className='text-[18px] text-[#474747] font-semibold'>{job.title}</h2>
                     <small className='text-[#A3A3A3]'>{job.availableJobs}</small>
                    </div>

                </div>
        </div>
    );
};

export default SingleCetegoryItem;