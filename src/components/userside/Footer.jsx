import React from "react";
import { Facebook, Twitter, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 text-gray-700">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo and Description */}
        <div>
          <h2 className="text-2xl font-bold text-violet-600">Vector Edu</h2>
          <p className="mt-4 text-sm text-gray-500">
            Empowering minds with the best courses in tech, business, and design.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-violet-500 mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-violet-600">Home</a></li>
            <li><a href="#" className="hover:text-violet-600">Courses</a></li>
            <li><a href="#" className="hover:text-violet-600">About Us</a></li>
            <li><a href="#" className="hover:text-violet-600">Contact</a></li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h3 className="text-lg font-semibold text-violet-500 mb-3">Resources</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-violet-600">Help Center</a></li>
            <li><a href="#" className="hover:text-violet-600">Terms of Service</a></li>
            <li><a href="#" className="hover:text-violet-600">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-violet-600">FAQ</a></li>
          </ul>
        </div>

        {/* Newsletter & Social */}
        <div>
          <h3 className="text-lg font-semibold text-violet-500 mb-3">Stay Connected</h3>
          <form className="flex flex-col sm:flex-row items-center gap-2">
            <input
              type="email"
              placeholder="Your email"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-violet-400"
            />
            <button className="px-4 py-2 bg-violet-600 text-white rounded-md hover:bg-violet-700">
              Subscribe
            </button>
          </form>
          <div className="flex space-x-4 mt-5 text-violet-600">
            <Facebook className="hover:text-violet-800 cursor-pointer" />
            <Twitter className="hover:text-violet-800 cursor-pointer" />
            <Linkedin className="hover:text-violet-800 cursor-pointer" />
            <Mail className="hover:text-violet-800 cursor-pointer" />
          </div>
        </div>
      </div>

      <div className="text-center text-xs py-4 text-gray-400 bg-gray-50 border-t">
        © {new Date().getFullYear()} Vector Edu. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
