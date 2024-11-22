import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Courses, TestSeries, Scholarship, Results, StudyMaterial, About } from "../pages/courses";
import { Button } from "./Button";

const NavLink = ({ to, children }) => (
  <Link 
    to={to} 
    className="px-4 py-2 text-gray-700 hover:text-cyan-400 transition-colors relative group"
  >
    {children}
    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-400 transition-all group-hover:w-full"></span>
  </Link>
);

export function Navbar() {
  return (
    <BrowserRouter>
      <div className="relative">
        {/* Navbar */}
        <div className="fixed top-0 left-0 right-0 w-full h-16 shadow-md bg-white z-50">
          <nav className="container mx-auto px-4 py-4">
            {/* Logo and Navigation Container */}
            <div className="flex items-center justify-between max-w-6xl mx-auto">
              {/* Logo */}
              <Link to="/">
                <img 
                  src="https://allen.in/logo_light.svg"
                  alt="Allen Logo" 
                  className="h-6 w-auto"
                />
              </Link>
              
              {/* Center Navigation Links */}
              <div className="flex justify-center items-center text-xs overflow-visible">
                <NavLink to="/"></NavLink>
                <NavLink to="/courses">Courses</NavLink>
                <NavLink to="/series">Test Series</NavLink>
                <NavLink to="/scholarship">Scholarship</NavLink>
                <NavLink to="/results">Results</NavLink>
                <NavLink to="/study-materials">Study Materials</NavLink>
                <NavLink to="/about-us">About us</NavLink>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-6 ">
                <Button variant="secondary" size="sm">Contact us</Button>
                <Button variant="outline" size="sm">Login</Button>
              </div>
            </div>
          </nav>
        </div>

        {/* Blurred Content Container */}
        <div className="pt-16"> {/* Add padding-top to push content below navbar */}
          <div className="backdrop-blur-md"> {/* This div applies the blur effect */}
            {/* Routes Container */}
            <main className="container mx-auto px-4 py-8">
              <Routes>
                <Route path="/" element={<div></div>} />
                <Route path="/courses" element={<Courses />} />
                <Route path="/series" element={<TestSeries />} />
                <Route path="/scholarship" element={<Scholarship />} />
                <Route path="/results" element={<Results />} />
                <Route path="/study-materials" element={<StudyMaterial />} />
                <Route path="/about-us" element={<About />} />
              </Routes>
            </main> 
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

