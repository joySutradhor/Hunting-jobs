import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Bars3BottomLeftIcon, XMarkIcon } from '@heroicons/react/24/solid'

const Navbar = ({ links }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <nav>
            <div className='md:flex justify-evenly mt-[30px] mb-[60px]  items-center ml-4'>
                <h1 className='md:text-[32px] text-[20px] text-center font-semibold text-[#1A1919]'>Hunting Jobs</h1>

                <div onClick={() => setIsOpen(!isOpen)} className='md:hidden mr-2'>
                    <span> {isOpen ? <XMarkIcon className="h-6 w-6 text-red-500" /> : <Bars3BottomLeftIcon className="h-6 w-6 text-blue-500" />}</span>
                </div>

                <div className={`md:flex md:mr-20 md:p-0 p-4 bg-white md:bg-white absolute md:static duration-500 ${isOpen ? "left-0" : "-left-36"}`}>
                    <ul className='md:flex  items-center justify-between md:mr-20 text-[14px] text-sky-500'>
                        {links.map(link => (
                            <li key={link.id}>
                                <Link to={link.url} className='md:mr-5 md:text-lg font-semibold'>{link.text}</Link>
                            </li>
                        ))}
                    </ul>
                    <button className='bg-gradient-to-t from-[#7E90FE] to-[#9873FF] md:p-2 p-2 rounded-md text-white mt-4 md:my-0 text-[12px] md:text-sm' >Start Applying</button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;