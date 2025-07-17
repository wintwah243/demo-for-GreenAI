import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="bg-white/80 backdrop-blur-md shadow-md fixed top-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <Link to="/" className="text-xl sm:text-2xl font-bold text-green-600" onClick={closeMenu}>
            GreenAI
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6 text-gray-800 font-medium">
            <Link
              to="/"
              className={`hover:text-green-600 transition ${
                location.pathname === '/' ? '' : ''
              }`}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={`hover:text-green-600 transition ${
                location.pathname === '/notice' ? 'text-blue-600' : ''
              }`}
            >
              About
            </Link>
            <Link
              to="/survey"
              className={`hover:text-green-600 transition ${
                location.pathname === '/notice' ? 'text-blue-600' : ''
              }`}
            >
              Survey data
            </Link>
            
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-800"
            onClick={toggleMenu}
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-md">
          <div className="px-4 py-3 space-y-2 text-gray-800 font-medium flex flex-col">
            <Link to="/" onClick={closeMenu} className={`hover:text-blue-600 ${location.pathname === '/' ? '' : ''}`}>
              Home
            </Link>
            <Link to="/about" onClick={closeMenu} className={`hover:text-blue-600 ${location.pathname === '/notice' ? '' : ''}`}>
              About
            </Link>
            <Link to="/survey" onClick={closeMenu} className={`hover:text-blue-600 ${location.pathname === '/' ? '' : ''}`}>
              Survey data
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
