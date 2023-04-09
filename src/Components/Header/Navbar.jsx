import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ links }) => {
    console.log(links)
    return (
        <nav>
            <div className='flex justify-around mt-[30px] mb-[60px] items-center'>
            <h1 className='text-[32px] font-bold'>Hunting Jobs</h1>
            <ul className='flex'>
                {links.map(link => (
                    <li key={link.id}>
                        <Link to={link.url} className='mr-5 text-xl font-semibold'>{link.text}</Link>
                    </li>
                ))}
            </ul>
            <button className='bg-gradient-to-t from-[#7E90FE] to-[#9873FF] p-2 rounded-md text-white' >Start Applying</button>
            </div>
        </nav>
    );
};

export default Navbar;