import React, { useState } from 'react';
import AppliedSingleJob from './AppliedSingleJob';

const AppliedJobs = () => {
    const getData = JSON.parse(localStorage.getItem("alljobs"));
    const [appliedalljobs, setAppliedjobs] = useState(getData);


    const handleAllJobs = getData => setAppliedjobs(getData) ;
    const handleOnsite = getData => {
        let onsite = getData.filter(data => data.job.jobEnvironment[0] == 'onsite')
        setAppliedjobs(onsite)
    }
    const handleRemote = getData => {
        let remote = getData.filter(data => data.job.jobEnvironment[0] == 'remote')
        setAppliedjobs(remote)
    }

    return (
        <div>
            <div className='flex justify-between mx-20 mb-5 '>
                <h1 className=' font-semibold'>Applied jobs : 0{appliedalljobs ? appliedalljobs.length : 0}</h1>
                <div className='flex gap-2 p-3 text-xs'>
                    <button className='rounded-md text-white  p-2 bg-gradient-to-t from-[#7E90FE] to-[#9873FF]' onClick={()=> handleAllJobs(getData)}>All Jobs</button>
                    <button onClick={() => handleOnsite(getData)} className='p-2 rounded-md text-white  bg-gradient-to-t from-[#7E90FE] to-[#9873FF]'>Onsite</button>
                    <button onClick={() => handleRemote(getData)} className='rounded-md text-white  p-2 bg-gradient-to-t from-[#7E90FE] to-[#9873FF]' >Remote</button>
                </div>
            </div>

            <div>
                <div className='mb-10'>
                    {
                        appliedalljobs ? appliedalljobs.map(data => <AppliedSingleJob
                            key={data.id}
                            appliedjobs={data}
                        ></AppliedSingleJob>) : <div className='flex justify-center items-center text-2xl text-red-500'><p>You have not Applied for any Jobs Yet .</p></div>
                    }
                </div>
            </div>

        </div>
    );
};

export default AppliedJobs;