import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="font-sans">
      {/* Navigation Bar */}
      <Navbar />

      {/* Main Content */}
      <main className="pt-20">
        <Home />
        <About />
        <Services />
        <Portfolio />
        <Contact />
      </main>

      <Footer />

    </div>
  );
}
