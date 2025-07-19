import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

const Header = () => {
  return (
    <header className="relative bg-gradient-to-br from-violet-700 via-violet-600 to-violet-500 text-white py-28 px-6 md:px-20 overflow-hidden">
      {/* Animated decorative background elements */}
      <div className="absolute top-[-100px] left-[-100px] w-96 h-96 bg-violet-300 rounded-full opacity-20 blur-3xl animate-pulse z-0"></div>
      <div className="absolute bottom-[-120px] right-[-120px] w-96 h-96 bg-white rounded-full opacity-10 blur-3xl animate-pulse z-0"></div>

      <div className="relative z-10 max-w-6xl mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-6 drop-shadow-lg">
          Empowering 3+ Million Creative Minds!
        </h1>
        <p className="text-xl md:text-2xl font-light mb-4 text-white/90">
          Shape Your Future with Meaningful Learning
        </p>
        <p className="text-base md:text-lg text-white/80 max-w-2xl mx-auto mb-10 leading-relaxed">
          Dive into intuitive, flexible courses tailored to your growth. Learn smarter, not harder—with content made for real-world success.
        </p>

        <button className="backdrop-blur-sm bg-white/20 border border-white/30 text-white hover:bg-white hover:text-violet-700 px-8 py-4 rounded-full font-semibold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center gap-3 mx-auto">
          Explore Courses <FaArrowRight />
        </button>
      </div>
    </header>
  );
};

export default Header;
