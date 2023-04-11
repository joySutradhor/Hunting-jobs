import React, { useState , useEffect } from 'react';
import SingleViewDetails from './SingleViewDetails';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
      
          const handleAppliedJobs = (id , job) => {
              const isBookmarked = bookmarks.some((bookmark) => bookmark.id === id);
              if (isBookmarked) {
                const notify = () => toast("Already Applied Bro !!")
                notify() ;
              } 
              else {
                  const newBookmarks = [...bookmarks, { id , job }];
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