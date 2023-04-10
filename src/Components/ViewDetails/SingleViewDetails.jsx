import React from 'react';

const SingleViewDetails = ({ job , handleAppliedJobs }) => {
    
    return (
        <div className='mx-20 flex gap-10 justify-center items-center'>
            <div className='md:w-[650px]'>
                <h2> <span className='font-semibold'>Job Description :</span> {job.jobDescription
                }</h2>
                <h3 className='my-4'> <span className='font-semibold'>Job Responsibility :</span> {job.jobResponsibilities}</h3>
                <h3 className='font-semibold'>Educational Requirenments :</h3>
                <p>{job.educationalRequirements}</p>
                <h3 className='font-semibold mt-4'>Experience : </h3>
                <p>{job.experience}</p>
            </div>
            <div className='bg-sky-100 p-4 pt-0 relative h-[300px]'>
                <h2 className='font-semibold my-2 text-[#1A1919]'>Job Details </h2>
                <hr className='mb-2' />
                <p className='text-[#4e4d4d]'> <span className='font-medium text-[#474747]'>Salary :</span> {job.salary}</p>
                <p className='text-[#4e4d4d]'> <span className='font-medium text-[#474747]'>Job Title :</span> {job.title}</p>
                <h2 className='font-semibold my-2 text-[#1A1919]'>Contact Information </h2>
                <hr className='my-2'/>
                <h3 className='text-[#4e4d4d]'> <span className='font-medium'>Phone :</span> {job.phone}</h3>
                <h3 className='text-[#4e4d4d]'> <span className='font-medium'>Email :</span> {job.email}</h3>
                <h3 className='text-[#4e4d4d]'> <span className='font-medium'>Address : </span>{job.location}</h3>
                <button className='absolute bottom-0 text-white left-0 p-2 rounded-md w-full bg-gradient-to-t from-[#7E90FE] to-[#9873FF]' onClick={() => handleAppliedJobs (job)}>Apply Now </button>
            </div>
        </div>
    );
};

export default SingleViewDetails;