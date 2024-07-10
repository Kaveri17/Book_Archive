// import React, { useState } from 'react'
// import { Link } from 'react-router-dom'

// const Header = () => {
//     const [isOpen, setIsOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };
//   return (
//     <>
    //   <div className="navbars py-1">
    //         <div className="nav ">
    //             <div className="logo">
    //                 <img src="img/logo.png" alt="logo"/>
    //                 <Link to="/">
    //                     <h1>BOOK ARCHIVE</h1>
    //                 </Link>
    //             </div>
    //             {/* <div className="nav-content"> */}
    //             <div className={`nav-content ${isOpen ? 'show-menu' : ''}`}>
    //                 <div className="nav-links">
    //                     <Link to="/"><li>Home</li></Link>
    //                     <li><Link to="#about">Genres</Link></li>
    //                     <li><Link to="#menu">New Arrivals</Link></li>
    //                     <li><Link to="#blogpost">Categories</Link></li>
    //                     <li><Link to="#contact">Explore</Link></li>
    //                 </div>
    //                 <div className="nav-icons">
    //                     <i className="bi bi-search"></i>
    //                     <i className="fa-regular fa-user login"></i>
    //                     <Link to='/cart'>
    //                         <i className="fa-solid fa-cart-shopping cart"></i>
    //                     </Link>
    //                 </div>
    //             </div>
    //             <div className="hamburger-menu" onClick={toggleMenu}>
    //       <i className="bi bi-list"></i>
    //     </div>
    //         </div>
    //     </div>
//     </>
//   )
// }

// export default Header

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNav = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbars py-1 sticky top-0 z-10">
      <div className="nav flex justify-between items-center h-full px-4 2xl:px:16">
        {/* <div>
          <h1 className="text-3xl font-semibold">BOOK ARCHIVE</h1>
        </div> */}
        <div className="logo">
            <img src="img/logo.png" alt="logo"/>
            <Link to="/">
                <h1>BOOK ARCHIVE</h1>
            </Link>
        </div>
        <div className="nav-content hidden md:flex">
          <div className="nav-links hidden md:flex">
            <li className="">
              <Link to="/">Home</Link>
            </li>
            <li className="">
              <Link to="#about">Genres</Link>
            </li>
            <li className="">
              <Link to="#menu">New Arrivals</Link>
            </li>
            <li className="">
              <Link to="#blogpost">Categories</Link>
            </li>
            <li className="">
              <Link to="#contact">Explore</Link>
            </li>
          </div>
            <div className="nav-icons">
                <i className="bi bi-search"></i>
                <i className="fa-regular fa-user login"></i>
                <Link to='/cart'>
                    <i className="fa-solid fa-cart-shopping cart"></i>
                </Link>
            </div>
        </div>
        <div onClick={handleNav} className="md:hidden cursor-pointer text-white">
          {menuOpen ? (
            <AiOutlineClose size={25} />
          ) : (
            <AiOutlineMenu size={25} />
          )}
        </div>
      </div>
      <div
        className={`${
          menuOpen
            ? 'fixed right-0 top-0 w-[65%] md:hidden h-screen bg-[rgb(140,46,62)] p-10 ease-in duration-100'
            : 'fixed left-[-100%] top-0 p-10 ease-in duration-100'
        }`}
      >
        <div className="flex w-full items-center justify-end">
          <div onClick={handleNav} className="md:hidden cursor-pointer text-white">
            <AiOutlineClose size={25} />
          </div>
        </div>
        <div className="flex-col py-4 text-white">
          <ul>
            <li className="py-4 text-[#ffc845]">
              <Link to="/">Home</Link>
            </li>
            <li className="py-4 hover:text-[#ffc845]">
              <Link to="#about">Genres</Link>
            </li>
            <li className="py-4 hover:text-[#ffc845]">
              <Link to="#menu">New Arrivals</Link>
            </li>
            <li className="py-4 hover:text-[#ffc845]">
              <Link to="#blogpost">Categories</Link>
            </li>
            <li className="py-4 hover:text-[#ffc845]">
              <Link to="#contact">Explore</Link>
            </li>
            <div className="flex justify-between">
                <li className="py-4 hover:text-[#ffc845]">
                <Link to="/">
                    <i className="bi bi-search"></i>
                </Link>
                </li>
                <li className="py-4 hover:text-[#ffc845]">
                <Link to="/">
                    <i className="fa-regular fa-user login"></i>
                </Link>
                </li>
                <li className="py-4 hover:text-[#ffc845]">
                    <Link to='/cart'>
                        <i className="fa-solid fa-cart-shopping cart"></i>
                    </Link>
                </li>                
                    
            </div>
            
          </ul>
          
        </div>
      </div>
    </nav>
  );
};

export default Header;
