import React from 'react';
import AppliedSingleJob from './AppliedSingleJob';

const AppliedJobs = () => {
    const getData = JSON.parse(localStorage.getItem("alljobs"));
    return (
        <div>
            <div className='flex justify-between mx-20 mb-20 '>
                <h1>Applied jobs : 0{getData? getData.length : 0}</h1>
                <div>
                    <select className=' border border-blue-800 p-1'>
                        <option value="">Filter By</option>
                        <option value="option1">OnSite </option>
                        <option value="option2">Remote</option>
                    </select>
                </div>
            </div>

            <div>
                <div>
                    {
                        getData? getData.map(data => <AppliedSingleJob
                        key={data.id}
                        appliedjobs = {data} 
                        ></AppliedSingleJob>) : "NO data"
                    }
                </div>
            </div>

        </div>
    );
};

export default AppliedJobs;