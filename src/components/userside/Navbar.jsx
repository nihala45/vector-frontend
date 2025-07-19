import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-white border-b border-gray-200 shadow-sm w-full">
      <div className="flex justify-between items-center px-4 sm:px-8 h-20">
        {/* Logo and Title */}
        <div className="flex items-center space-x-2">
          <img src="/fevicon.svg" alt="Vector Icon" className="w-7 h-7" />
          <span className="text-2xl font-bold text-violet-700">Vector</span>
        </div>

        {/* Navigation links */}
        <nav className="hidden md:flex space-x-30 text-gray-700 font-medium">
          <a href="#" className="hover:text-purple-600">Home</a>
          <a href="#" className="hover:text-purple-600">Courses</a>
          <a href="#" className="hover:text-purple-600">Contest</a>
          <a href="#" className="hover:text-purple-600">Discussions</a>
          <a href="#" className="hover:text-purple-600">Community</a>
        </nav>

        {/* Auth buttons */}
        <div className="space-x-3">
          <a href="#" className="px-4 py-1.5 border border-purple-600 text-purple-600 rounded hover:bg-purple-600 hover:text-white transition">Login</a>
          <a href="#" className="px-4 py-1.5 bg-purple-600 text-white rounded hover:bg-purple-700 transition">Register</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
