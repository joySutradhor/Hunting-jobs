import React, { createContext, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import FeaturesSingleItem from './FeaturesSingleItem';

const FeaturesItem = () => {
    const allItems = useLoaderData();
    const [items, setItems] = useState(allItems.slice(0, 4));
    const [show , setShow ] = useState(false)

    const handleAppliedJobs = item => {
        localStorage.setItem("jobs", JSON.stringify(item))
    }

    const handleShowAll = allItems => {
        setItems(allItems)
        setShow(true)
    } ;


    return (
        <>
            <div className='grid grid-cols-1 mx-2 p-2 md:grid-cols-2 md:gap-5 justify-center md:mx-20 mb-10'>

                {
                    items.map(item => <FeaturesSingleItem
                        key={item.id}
                        item={item}
                        handleAppliedJobs={handleAppliedJobs}

                    ></FeaturesSingleItem>)
                }

            </div>
            <div className='w-full text-center'>
                <button className= { `mb-10 bg-gradient-to-t from-[#7E90FE] to-[#9873FF] p-2 md:text-sm rounded-md text-white ${show ? "hidden" : ""}` } onClick={() => handleShowAll(allItems)}>Show All</button>
            </div>

        </>
    );
};

export default FeaturesItem;