// import React from 'react'
// import './Navbar.css'
// import logo from '../../assets/logo.svg'
// const Navbar = () => {
//   return (
//     <div className='navbar'>
//       <h1 className='text-5xl bg-[url(assets/nav_underline.svg)] bg-no-repeat bg-right-bottom bg-[length:60px]'>Jany<span className=''>a</span></h1>
//       <ul className='nav-menu '>
//         <li className='hover:font-bold'>Home</li>
//         <li className='hover:font-bold'>About</li>
//         <li className='hover:font-bold'>Services</li>
//         <li className='hover:font-bold'>Portfolio</li>
//         <li className='hover:font-bold'>Contact</li>
//       </ul>
//       <div className="nav-connect">Connect with me</div>
//     </div>
//   )
// }

// export default Navbar

import React, { useState } from 'react';
import './Navbar.css';


const Navbar = ({ onSectionChange }) => {
  const [menuOpen, setMenuOpen] = useState(false);

   const handleClick = (section) => {
    onSectionChange(section);
    setMenuOpen(false);
  };

  return (
    <>
    <nav className="w-full flex items-center justify-between px-6 py-4 bg-slate-900 text-white fixed top-0 left-0 z-50">
      {/* Logo */}
      <h1 className="text-5xl bg-[url('assets/nav_underline.svg')] bg-no-repeat bg-right-bottom bg-[length:45px]">
        Jany<span>a</span>
      </h1>

      {/* Desktop Menu */}
      <ul className="hidden md:flex gap-10 text-lg">
        <li className="cursor-pointer hover:text-gray-300" onClick={() => handleClick('home')}>Home</li>
        <li className="cursor-pointer hover:text-gray-300" onClick={() => handleClick('about')}>About</li>
        <li className="cursor-pointer hover:text-gray-300" onClick={() => handleClick('skills')}>Skills</li>
        <li className="cursor-pointer hover:text-gray-300" onClick={() => handleClick('projects')}>Project</li>
        {/* <li className="cursor-pointer  px-5 py-[10px] rounded-full bg-gradient-to-br from-[#DA7C25] to-[#B923E1]
  text-[19px] transition duration-500" onClick={() => handleClick('contact')}>Contact</li> */}
      </ul>

      {/* Connect Button (Desktop Only) */}
      <button className="hidden md:block  px-4 py-2  hover:bg-white hover:border transition  
  rounded-full
  bg-gradient-to-br from-[#DA7C25] to-[#B923E1]
  text-[19px]
  cursor-pointer
  transition duration-500" onClick={() => handleClick('contact')}>
        Connect with me
      </button>

      {/* Mobile Menu Button */}
      <button className="md:hidden text-3xl" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </button>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <ul className="absolute top-16 right-6 bg-gray-800 w-48 p-4 rounded-xl flex flex-col gap-4 md:hidden text-lg shadow-lg">
          <li className="cursor-pointer hover:text-gray-300" onClick={() => handleClick('home')}>Home</li>
          <li className="cursor-pointer hover:text-gray-300" onClick={() => handleClick('about')}>About</li>
          <li className="cursor-pointer hover:text-gray-300" onClick={() => handleClick('skills')}>Skills</li>
          <li className="cursor-pointer hover:text-gray-300" onClick={() => handleClick('projects')}>Projects</li>
          <li className="cursor-pointer hover:text-gray-300" onClick={() => handleClick('contact')}>Contact me</li>
        </ul>
      )}
    
    </nav>
    <hr />
    </>
  );
};

export default Navbar;
