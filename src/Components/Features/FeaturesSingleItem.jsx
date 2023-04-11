import React from 'react';
import { Link } from 'react-router-dom';
import {MapPinIcon , CurrencyDollarIcon } from '@heroicons/react/24/solid'

const FeaturesSingleItem = ({item , handleAppliedJobs}) => {

    return (
        <div className='drop-shadow-md border md:shadow-lg my-2 p-2'>
           <div className=' p-2  flex flex-col'>
           <img src={item.img} alt="img form outside" className='md:w-[60px] md:h-[50px] w-[60px] h-[60px]' />
           <div className='my-4'>
           <h2 className='md:font-bold md:text-[20px] text-[#474747] font-semibold'>{item.title}</h2>
            <p className='text-[#757575]'>{item.company}</p>
            <div className='flex gap-2 my-3 text-[#6d55b1]'>
                <button className='border border-indigo-400 p-1 '>{item.jobEnvironment[0]}</button>
                <button className='border border-indigo-400 p-1 '>{item.jobEnvironment[1]}</button>
            </div>
            <div className='flex gap-2 mt-4 text-[13px]'>
                <p className='flex items-center text-[#757575]'> <MapPinIcon className='h-4 w-4  text-[#757575] mr-1'></MapPinIcon>  {item.location}</p>
                <p className='flex items-center text-[#757575]'><CurrencyDollarIcon className='h-4 w-4 text-[#757575] mr-1'></CurrencyDollarIcon> Salary:{item.salary}</p>
            </div>
           </div>
             <Link to = "/viewdetails"> <button className='my-auto mt-2 md:p-2 p-2 text-[14px] rounded-md bg-gradient-to-t from-[#7E90FE] to-[#9873FF] text-white  md:text-sm'  onClick={()=> handleAppliedJobs(item)}> View Details</button> </Link>
           </div>
        </div>
    );
};

export default FeaturesSingleItem;
