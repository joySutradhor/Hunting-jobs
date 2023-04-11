import React from 'react';
import { Link } from 'react-router-dom';

const FeaturesSingleItem = ({item , handleAppliedJobs}) => {

    return (
        <div className='drop-shadow-md border shadow-lg  p-2'>
           <div className=' p-2  flex flex-col'>
           <img src={item.img} alt="img form outside" className='w-[100px] h-[100px]' />
           <div className='my-4'>
           <h2 className='font-bold text-[20px]'>{item.title}</h2>
            <p>{item.company}</p>
            <div className='flex gap-2 my-2'>
                <button className='border border-indigo-400 p-1 '>{item.jobEnvironment[0]}</button>
                <button className='border border-indigo-400 p-1 '>{item.jobEnvironment[1]}</button>
            </div>
            <div className='flex gap-1'>
                <p>{item.location}</p>
                <p>{item.salary}</p>
            </div>
           </div>
             <Link to = "/viewdetails"> <button className='my-auto mt-2 bg-red-300 p-2 rounded-md bg-gradient-to-t from-[#7E90FE] to-[#9873FF] text-white text-lg'  onClick={()=> handleAppliedJobs(item)}> View Details</button> </Link>
           </div>
        </div>
    );
};

export default FeaturesSingleItem;
