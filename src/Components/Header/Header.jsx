import React from 'react';
import Navbar from './Navbar';

const links = [
  { id: 1, text: 'Home', url: '/' },
  { id: 2, text: 'Applied Jobs', url: '/appliedjobs' },
  { id: 3, text: 'Statistics', url: '/statistics' },
  { id: 4, text: 'Blog', url: '/blog' },
];

const Header = () => {
  return (
    <div>
      <Navbar links={links} />
    </div>
  );
};

export default Header;
