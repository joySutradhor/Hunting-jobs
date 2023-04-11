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
            <div className='flex justify-between mx-20 mb-20 '>
                <h1>Applied jobs : 0{getData ? getData.length : 0}</h1>
                <div className='flex gap-2 p-3'>
                    <button className='rounded-md text-white  p-2 bg-gradient-to-t from-[#7E90FE] to-[#9873FF]' onClick={()=> handleAllJobs(getData)}>All Jobs</button>
                    <button onClick={() => handleOnsite(getData)} className='p-2 rounded-md text-white  bg-gradient-to-t from-[#7E90FE] to-[#9873FF]'>Onsite</button>
                    <button onClick={() => handleRemote(getData)} className='rounded-md text-white  p-2 bg-gradient-to-t from-[#7E90FE] to-[#9873FF]' >Remote</button>
                </div>
            </div>

            <div>
                <div>
                    {
                        appliedalljobs ? appliedalljobs.map(data => <AppliedSingleJob
                            key={data.id}
                            appliedjobs={data}
                        ></AppliedSingleJob>) : "NO data"
                    }
                </div>
            </div>

        </div>
    );
};

export default AppliedJobs;