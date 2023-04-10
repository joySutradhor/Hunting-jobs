import React from 'react';
import SingleViewDetails from './SingleViewDetails';



const ViewDetails = () => {
    const item = localStorage.getItem("jobs");
          const jobItem = JSON.parse(item);
    const handleAppliedJobs = jobs => {
        console.log(jobs)
    }
    return (
        <div>
            <SingleViewDetails 
            job = {jobItem}
            handleAppliedJobs ={handleAppliedJobs}
            > </SingleViewDetails>
        </div>
    );
};

export default ViewDetails;