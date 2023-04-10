import React from 'react';
import SingleCetegoryItem from './SingleCetegoryItem';

const jobArray = [
    {
        id: 1,
        title: "Web Developer",
        availableJobs: "300 Jobs Available",
        img: 'data:image/png;base64,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'
    },
    {
        id: 2,
        title: "Graphic Designer",
        availableJobs: "400 Jobs Available",
        img: 'data:image/jpeg;base64,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'
    },
    {
        id: 3,
        title: "Project Manager",
        availableJobs: "420 Jobs Available",
        img: 'data:image/jpeg;base64,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'
    },
    {
        id: 4,
        title: "Marketing Specialist",
        availableJobs: "350 Jobs Available",
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRopeL-ZJoYKbAEq-5GT9aHmUpjpXjBIh39IQ&usqp=CAU'
    }
];


const CetegoryItem = () => {
    return (
        <div className=' flex'>
            {
                jobArray.map(job => <SingleCetegoryItem
                key={job.id}
                job = {job}
                ></SingleCetegoryItem>)
            }
        </div>
    );
};

export default CetegoryItem;