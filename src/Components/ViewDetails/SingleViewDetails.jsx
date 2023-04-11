import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

const SingleViewDetails = ({ job, handleAppliedJobs }) => {

    return (
        <div className='mx-20 flex gap-10 justify-center items-center'>
            <div className='md:w-[650px]'>
                <h2 className='text-[#757575]'> <span className='font-bold text-[#1A1919]'>Job Description :</span> {job ? job.jobDescription : ""}</h2>
                <h3 className='my-4 text-[#757575]'> <span className='font-bold text-[#1A1919]'>Job Responsibility :</span> {job.jobResponsibilities}</h3>
                <h3 className='font-bold text-[#1A1919] '>Educational Requirenments :</h3>
                <p className='text-[#757575]'>{job.educationalRequirements}</p>
                <h3 className='font-bold mt-4 text-[#1A1919]'>Experience : </h3>
                <p className='text-[#757575]'>{job.experience}</p>
            </div>
            <div className='bg-sky-100 p-6 pt-0 relative h-[300px]'>
                <h2 className='font-bold my-2 text-[#1A1919]'>Job Details </h2>
                <hr className='mb-2' />
                <p className='text-[#757575]'> <span className='font-medium text-[#474747]'>Salary :</span> {job.salary}</p>
                <p className='text-[#757575]'> <span className='font-medium text-[#474747]'>Job Title :</span> {job.title}</p>
                <h2 className='font-bold my-2 text-[#1A1919]'>Contact Information </h2>
                <hr className='my-2' />
                <h3 className='text-[#757575]'> <span className='font-medium  text-[#474747] '>Phone :</span> {job.phone}</h3>
                <h3 className='text-[#757575]'> <span className='font-medium text-[#474747]'>Email :</span> {job.email}</h3>
                <h3 className='text-[#757575]'> <span className='font-medium text-[#474747]'>Address : </span>{job.location}</h3>
                <div>
                    <button className='absolute bottom-0 text-white left-0 p-2 rounded-md w-full bg-gradient-to-t from-[#7E90FE] to-[#9873FF]' onClick={() => handleAppliedJobs(job.id, job)}>Apply Now
                    </button>
                    <ToastContainer />
                </div>

            </div>
        </div>
    );
};

export default SingleViewDetails;