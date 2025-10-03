import React from "react";

export default function Navbar() {
  return (
    <nav className="fixed w-full z-20 backdrop-blur bg-white/70 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Company Logo / Name */}
        <h1 className="text-2xl font-extrabold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          MegacodeiT
        </h1>

        {/* Navigation Links */}
        <div className="space-x-6 text-gray-700 font-medium">
          <a href="#home" className="hover:text-blue-600">Home</a>
          <a href="#about" className="hover:text-blue-600">About</a>
          <a href="#services" className="hover:text-blue-600">Services</a>
          <a href="#portfolio" className="hover:text-blue-600">Portfolio</a>
          <a href="#contact" className="hover:text-blue-600">Contact</a>
          <a href="#careers" className="hover:text-blue-600">Careers</a>
          <a href="#contact" className="hover:text-blue-600">Blog</a>
        </div>
      </div>
    </nav>
  );
}
