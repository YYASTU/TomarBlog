import React from 'react';
import { Link } from 'react-router-dom'; // Assuming you're using react-router for navigation
import ChatImage from '../Assets/ChatImage';

const Navbar = () => {
  return (
    <nav className="bg-blue-600 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            
          <ChatImage/>
            <Link to="/" className="text-white text-xl font-bold">
              እናውራ
            </Link>
          </div>
          <div className="flex space-x-4">
            <Link to="/" className="text-white hover:bg-blue-700 px-3 py-2 rounded-md text-sm font-medium">
              Home
            </Link>
            <Link to="/about" className="text-white hover:bg-blue-700 px-3 py-2 rounded-md text-sm font-medium">
              About
            </Link>
            <Link to="/messages" className="text-white hover:bg-blue-700 px-3 py-2 rounded-md text-sm font-medium">
              Messages
            </Link>
            <Link to="/settings" className="text-white hover:bg-blue-700 px-3 py-2 rounded-md text-sm font-medium">
              Settings
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
