import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Courses, TestSeries, Scholarship, Results, StudyMaterial, About } from "../pages/courses";
import { Button } from "./Button";

const NavLink = ({ to, children }) => (
  <Link 
    to={to} 
    className="px-4 py-2 text-gray-300 hover:text-cyan-400 transition-colors relative group"
  >
    {children}
    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-400 transition-all group-hover:w-full"></span>
  </Link>
);

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <BrowserRouter>
      <header 
        className={`sticky top-0 z-50 w-full transition-colors duration-300 ${
          isScrolled ? "bg-black/80 shadow-md backdrop-blur-lg" : "bg-black"
        }`}
      >
        <nav className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between max-w-6xl mx-auto">
            {/* Logo */}
            <Link to="/">
              <img 
                src="https://allen.in/logo_light.svg"
                alt="Allen Logo" 
                className="h-6 w-auto"
              />
            </Link>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex justify-center items-center text-xs overflow-visible">
              <NavLink to="/">Home</NavLink>
              <NavLink to="/courses">Courses</NavLink>
              <NavLink to="/series">Test Series</NavLink>
              <NavLink to="/scholarship">Scholarship</NavLink>
              <NavLink to="/results">Results</NavLink>
              <NavLink to="/study-materials">Study Materials</NavLink>
              <NavLink to="/about-us">About us</NavLink>
            </div>

            {/* Action Buttons */}
            <div className="hidden md:flex items-center gap-6">
              <Button variant="secondary" size="sm">Contact us</Button>
              <Button variant="outline" size="sm">Login</Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-gray-300 hover:text-cyan-400 focus:outline-none"
              onClick={toggleMobileMenu}
            >
              <svg
                className="h-6 w-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
              </svg>
            </button>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden mt-4">
              <div className="flex flex-col space-y-2">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/courses">Courses</NavLink>
                <NavLink to="/series">Test Series</NavLink>
                <NavLink to="/scholarship">Scholarship</NavLink>
                <NavLink to="/results">Results</NavLink>
                <NavLink to="/study-materials">Study Materials</NavLink>
                <NavLink to="/about-us">About us</NavLink>
              </div>
              <div className="mt-4 flex flex-col space-y-2">
                <Button variant="secondary" size="sm" className="w-full">Contact us</Button>
                <Button variant="outline" size="sm" className="w-full">Login</Button>
              </div>
            </div>
          )}
        </nav>
      </header>

      {/* Main Content */}
      <div className="pt-16">
        <main className="container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<h1>Home Page</h1>} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/series" element={<TestSeries />} />
            <Route path="/scholarship" element={<Scholarship />} />
            <Route path="/results" element={<Results />} />
            <Route path="/study-materials" element={<StudyMaterial />} />
            <Route path="/about-us" element={<About />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

