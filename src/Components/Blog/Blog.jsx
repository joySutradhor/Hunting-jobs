import React from 'react';

const Blog = () => {
    return (
        <div className='md:mx-20'>
            <div className='shadow-sm p-2 my-3'>
                <h1 className='font-semibold'>When should you use context API?</h1>
                <p className='text-[#757575]'>Context API gives us super power , we can't need to props drilling . We use Context api for data passing grand father to grand child more easy way . The Context API is the React feature used for solving props drilling problems.Its give us more easy way to data passing .</p>
            </div>
            <div className='shadow-sm p-2'>
                <h1 className='font-semibold'>What is a custom hook?</h1>
                <p className='text-[#757575]'>We can create our own custom hooks using the 'use' prefix.We are created using use prefix like as ureEffect , useSate and others .Example , i need fetch data from api , so i can use my custom hook like 'useDataFromApi' . It contains URL and return data form api .</p>
            </div>
            <div className='shadow-sm p-2 my-3'>
                <h1 className='font-semibold'>What is useRef?</h1>
                <p className='text-[#757575]'>useRef is a hook that returns a mutable ref object.It means we can change and update the value.The useRef hook is called with an initial value as its argument, and it returns an object with a single property called current. The current property is initially set to the initial value passed to useRef, but it can be updated by assigning a new value to it.</p>
            </div>
            <div className='shadow-sm p-2'>
                <h1 className='font-semibold'>What is useMomo?</h1>
                <p className='text-[#757575]'>useMemo is also a react hook .That can memoize our  calculations or any changes . So that he can only re-computed when their dependencies change.useMomo takes an array of dependencies . If value is changed then it re-computed else retrun memoized data from his memory or cache.</p>
            </div>
        </div>
    );
};

export default Blog;