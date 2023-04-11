import React, { createContext, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import FeaturesSingleItem from './FeaturesSingleItem';

const FeaturesItem = () => {
    const allItems = useLoaderData();
    const [items, setItems] = useState(allItems.slice(0, 4));

    const handleAppliedJobs = item => {
        localStorage.setItem("jobs", JSON.stringify(item))
    }

    const handleShowAll = allItems => setItems(allItems) ;


    return (
        <>
            <div className='grid grid-cols-2 gap-5 justify-center mx-20'>

                {
                    items.map(item => <FeaturesSingleItem
                        key={item.id}
                        item={item}
                        handleAppliedJobs={handleAppliedJobs}

                    ></FeaturesSingleItem>)
                }

            </div>
            <div className='w-full text-center'>
                <button className='my-10 bg-gradient-to-t from-[#7E90FE] to-[#9873FF] p-2 rounded-md text-white' onClick={() => handleShowAll(allItems)}>Show All</button>
            </div>

        </>
    );
};

export default FeaturesItem;