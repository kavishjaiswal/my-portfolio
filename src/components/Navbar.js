import React, { useState, useEffect } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 backdrop-blur-lg bg-white/60 border-b border-white/30 shadow-sm ${
      isScrolled ? 'bg-white/80 shadow-lg' : ''
    }`}
      style={{backdropFilter: 'blur(16px)'}}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        {/* Logo */}
        <div className="flex items-center flex-shrink-0">
          <ScrollLink to="home" smooth={true} duration={500} offset={-64} className="text-2xl font-extrabold gradient-text cursor-pointer tracking-tight" onClick={closeMobileMenu}>
            KAVISH J.
          </ScrollLink>
        </div>

        {/* Nav Links */}
        <div className="hidden md:flex flex-1 justify-center items-center space-x-8">
          {[
            { to: 'home', label: 'Home' },
            { to: 'about', label: 'About' },
            { to: 'projects', label: 'Projects' },
            { to: 'skills', label: 'Skills' },
            { to: 'contact', label: 'Contact' },
          ].map(link => (
            <ScrollLink
              key={link.to}
              to={link.to}
              smooth={true}
              duration={500}
              offset={-64}
              className="relative px-2 py-1 text-gray-800 font-medium cursor-pointer transition-colors duration-300 group"
              activeClass="text-primary-500"
              onClick={closeMobileMenu}
            >
              {link.label}
              <span className="block h-0.5 w-0 bg-gradient-to-r from-primary-500 to-secondary-500 transition-all duration-300 group-hover:w-full group-hover:h-0.5 group-hover:rounded-full"></span>
            </ScrollLink>
          ))}
        </div>

        {/* Social Icons */}
        <div className="hidden md:flex items-center space-x-4">
          <a href="https://github.com/kavishjaiswal" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-primary-500 transition-colors text-xl">
            <FaGithub />
          </a>
          <a href="https://linkedin.com/in/kavishjaiswal" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-primary-500 transition-colors text-xl">
            <FaLinkedin />
          </a>
          <a href="mailto:kavishjaiswal001@gmail.com" className="text-gray-700 hover:text-primary-500 transition-colors text-xl">
            <FaEnvelope />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={toggleMobileMenu}
            className="text-gray-700 hover:text-primary-500 focus:outline-none focus:text-primary-500 transition-colors duration-300"
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center">
              <span className={`block w-5 h-0.5 bg-current transition-all duration-300 ${
                isMobileMenuOpen ? 'rotate-45 translate-y-1' : '-translate-y-1'
              }`}></span>
              <span className={`block w-5 h-0.5 bg-current transition-all duration-300 ${
                isMobileMenuOpen ? 'opacity-0' : 'opacity-100'
              }`}></span>
              <span className={`block w-5 h-0.5 bg-current transition-all duration-300 ${
                isMobileMenuOpen ? '-rotate-45 -translate-y-1' : 'translate-y-1'
              }`}></span>
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden transition-all duration-300 ease-in-out ${
        isMobileMenuOpen 
          ? 'max-h-96 opacity-100' 
          : 'max-h-0 opacity-0 overflow-hidden'
      }`}>
        <div className="px-2 pt-2 pb-3 space-y-1 bg-white/90 backdrop-blur-md border-t border-gray-200">
          {[
            { to: 'home', label: 'Home' },
            { to: 'about', label: 'About' },
            { to: 'projects', label: 'Projects' },
            { to: 'skills', label: 'Skills' },
            { to: 'contact', label: 'Contact' },
          ].map(link => (
            <ScrollLink
              key={link.to}
              to={link.to}
              smooth={true}
              duration={500}
              offset={-64}
              className="block px-3 py-2 text-gray-800 hover:text-primary-500 font-medium transition-colors duration-300 cursor-pointer"
              activeClass="text-primary-500"
              onClick={closeMobileMenu}
            >
              {link.label}
            </ScrollLink>
          ))}
          <div className="flex items-center space-x-4 mt-4 justify-center">
            <a href="https://github.com/kavishjaiswal" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-primary-500 transition-colors text-xl">
              <FaGithub />
            </a>
            <a href="https://linkedin.com/in/kavishjaiswal" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-primary-500 transition-colors text-xl">
              <FaLinkedin />
            </a>
            <a href="mailto:kavishjaiswal001@gmail.com" className="text-gray-700 hover:text-primary-500 transition-colors text-xl">
              <FaEnvelope />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 