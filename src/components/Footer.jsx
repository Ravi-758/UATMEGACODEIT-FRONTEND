import React from "react";

export default function Footer() {
  return (
    <footer className="bg-white border-t py-6 mt-12">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between text-gray-600 text-sm">
        {/* Left */}
        <p>© {new Date().getFullYear()} MegacodeiT — All Rights Reserved</p>

        {/* Right */}
        <div className="flex space-x-6 mt-4 md:mt-0">
          <a href="#" className="hover:text-blue-600">Linkedin</a>
          <a href="#" className="hover:text-blue-600">Github</a>
          <a href="#" className="hover:text-blue-600">Twitter</a>
        </div>
        <div className="flex space-x-6 mt-4 md:mt-0">
          <a href="#home" className="hover:text-blue-600">Home</a>
          <a href="#about" className="hover:text-blue-600">About</a>
          <a href="#services" className="hover:text-blue-600">Services</a>
          <a href="#portfolio" className="hover:text-blue-600">Portfolio</a>
          <a href="#contact" className="hover:text-blue-600">Contact</a>
        </div>
      </div>
    </footer>
  );
}
