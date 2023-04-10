import React, { useState , useEffect } from 'react';
import SingleViewDetails from './SingleViewDetails';



const ViewDetails = () => {
    const item = localStorage.getItem("jobs");
          const jobItem = JSON.parse(item);

          const [bookmarks, setBookmarks] = useState([]);

          useEffect(() => {
              const savedBookmarks = JSON.parse(localStorage.getItem('alljobs'));
              if (savedBookmarks) {
                  setBookmarks(savedBookmarks);
              }
          }, []);
      
          const handleAppliedJobs = (id, jobNature) => {
              const isBookmarked = bookmarks.some((bookmark) => bookmark.id === id);
              if (isBookmarked) {

              } 
              else {
                  const newBookmarks = [...bookmarks, { id, jobNature }];
                  localStorage.setItem('alljobs', JSON.stringify(newBookmarks));
                  setBookmarks(newBookmarks);
                  
               
              }
          };
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