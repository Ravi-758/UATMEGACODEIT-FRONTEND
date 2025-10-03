import React from "react";

export default function About() {
  return (
    <section
      id="about"
      className="py-20 bg-white flex flex-col md:flex-row items-center max-w-7xl mx-auto px-6 gap-12"
    >
      {/* Left: Text */}
      <div className="flex-1 text-center md:text-left">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          About Us
        </h2>
        <p className="mt-6 text-gray-600 leading-relaxed">
          At MegacodeiT, we are a team of skilled developers and consultants passionate about helping businesses succeed with modern technology. We specialize in Salesforce development, custom applications, and end-to-end digital solutions. With expertise across industries, we ensure every project is delivered with precision, innovation, and long-term support
        </p>
        <p className="mt-4 text-gray-600 leading-relaxed">
          Our mission is to help businesses grow through technology-driven innovation.
        </p>
      </div>

      {/* Right: Illustration / Image */}
      <div className="flex-1 flex justify-center">
        <div className="w-72 h-72 bg-gradient-to-r from-blue-100 to-purple-100 rounded-2xl shadow-md flex items-center justify-center">
          <img src="/logo.webp"  alt="Illustration" className="w-100 h-100 object-contain"/>
        </div>
      </div>
    </section>
  );
}
