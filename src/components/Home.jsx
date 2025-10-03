import React from "react";

export default function Home() {
  return (
    <section
      id="home"
      className="h-screen flex flex-col justify-center items-center text-center bg-gradient-to-br from-blue-50 to-purple-50 px-6"
    >
      {/* Headline */}
      <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 leading-tight">
        We help{" "}
        <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          businesses grow
        </span>
        <br />
        with modern software
      </h1>

      {/* Sub text */}
      <p className="mt-6 text-lg text-gray-600 max-w-2xl">
        Custom web apps, Salesforce solutions, and end-to-end support for your business.
      </p>

      {/* Call-to-action buttons */}
      <div className="mt-8 flex gap-4">
        <a
          href="#contact"
          className="px-6 py-3 rounded-lg bg-blue-600 text-white shadow hover:bg-blue-700"
        >
          Get Started
        </a>
        <a
          href="#services"
          className="px-6 py-3 rounded-lg border border-gray-300 hover:border-blue-600 hover:text-blue-600"
        >
          Learn More
        </a>
      </div>
    </section>
  );
}

