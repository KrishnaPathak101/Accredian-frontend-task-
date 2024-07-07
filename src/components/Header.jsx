import React from 'react';

const Header = () => {
  return (
    <header className="bg-blue-500 py-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="logo text-white text-2xl font-bold">
          <a href="/">Accredian</a>
        </div>
        <nav className="flex space-x-4">
          <a href="#" className="text-white hover:text-gray-200">Home</a>
          <a href="#" className="text-white hover:text-gray-200">Courses</a>
          <a href="#" className="text-white hover:text-gray-200">About</a>
          <a href="#" className="text-white hover:text-gray-200">Contact</a>
        </nav>
        <button className="bg-white text-blue-500 px-4 py-2 rounded-lg hover:bg-gray-100">
          Sign In
        </button>
      </div>
    </header>
  );
};

export default Header;
