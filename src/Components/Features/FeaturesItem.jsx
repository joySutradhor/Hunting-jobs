import React, { createContext, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import FeaturesSingleItem from './FeaturesSingleItem';

const FeaturesItem = () => {
    const allItems = useLoaderData() ;
    const [items , setItems] = useState(allItems.slice(0,4)) ;
    const handleAppliedJobs = item => {
      localStorage.setItem ("jobs", JSON.stringify(item))
    }
    
    

    return (
        <div className='grid grid-cols-3 gap-5 justify-center mx-20'>

           {
                items.map (item => <FeaturesSingleItem
                key={item.id}
                item = {item}
                handleAppliedJobs = {handleAppliedJobs}
                
                ></FeaturesSingleItem>)
            }
        </div>
    );
};

export default FeaturesItem;