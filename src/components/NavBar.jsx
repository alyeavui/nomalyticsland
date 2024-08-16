import React from 'react';
import { FaBars, FaShoppingCart, FaCommentDots, FaBell } from 'react-icons/fa';

const NavBar = () => {
  return (
    <nav className="bg-white w-full p-4  flex justify-between items-center fixed top-0 left-0 z-10">
      <div className="text-xl text-blue-900">
        <FaBars />
      </div>
      <div className="flex space-x-6 text-blue-900 items-center">
        <div className="relative">
          <FaShoppingCart />
          <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 text-xl text-teal-500"></span>
        </div>
        <div className="relative">
          <FaCommentDots />
          <span className="absolute top-0 right-0 text-xs text-teal-500"></span>
        </div>
        <div className="relative">
          <FaBell />
          <span className="absolute top-0 right-0 text-xs text-yellow-500"></span>
        </div>
        <div className="w-6 h-6 bg-gray-300 rounded-full"></div>
      </div>
    </nav>
  );
}

export default NavBar;


