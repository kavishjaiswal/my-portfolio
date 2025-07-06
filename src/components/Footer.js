import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaHeart } from 'react-icons/fa';
import { SiShopify } from 'react-icons/si';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/5 via-pink-600/5 to-blue-600/5"></div>
      
      {/* Floating elements */}
      <div className="absolute top-0 left-1/4 w-32 h-32 bg-purple-500/10 rounded-full blur-2xl"></div>
      <div className="absolute bottom-0 right-1/4 w-40 h-40 bg-pink-500/10 rounded-full blur-2xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        <div className="text-center">
          {/* Logo and Tagline */}
          <div className="mb-8">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl flex items-center justify-center">
                <SiShopify className="text-white text-2xl" />
              </div>
              <h3 className="text-2xl font-black bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent">
                KAVISH J.
              </h3>
            </div>
            <p className="text-gray-400 max-w-md mx-auto">
              Crafting exceptional digital experiences with cutting-edge Shopify development and modern web technologies.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-8">
            <a href="https://github.com/kavishjaiswal" target="_blank" rel="noopener noreferrer" 
               className="group p-3 bg-white/10 rounded-full border border-white/20 text-white transition-all duration-300 hover:bg-white/20 hover:scale-110 hover:shadow-lg">
              <FaGithub className="text-xl group-hover:text-purple-300 transition-colors" />
            </a>
            <a href="https://linkedin.com/in/kavishjaiswal" target="_blank" rel="noopener noreferrer" 
               className="group p-3 bg-white/10 rounded-full border border-white/20 text-white transition-all duration-300 hover:bg-white/20 hover:scale-110 hover:shadow-lg">
              <FaLinkedin className="text-xl group-hover:text-blue-300 transition-colors" />
            </a>
            <a href="mailto:kavishjaiswal001@gmail.com" 
               className="group p-3 bg-white/10 rounded-full border border-white/20 text-white transition-all duration-300 hover:bg-white/20 hover:scale-110 hover:shadow-lg">
              <FaEnvelope className="text-xl group-hover:text-green-300 transition-colors" />
            </a>
          </div>

          {/* Divider */}
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent mx-auto mb-8"></div>

          {/* Copyright */}
          <div className="flex flex-col sm:flex-row items-center justify-between text-gray-400 text-sm">
            <div className="mb-4 sm:mb-0">
              © {currentYear} Kavish Jaiswal. All rights reserved.
            </div>
            <div className="flex items-center space-x-2">
              <span>Made with</span>
              <FaHeart className="text-red-500 animate-pulse" />
              <span>using React & Tailwind CSS</span>
            </div>
          </div>

          {/* Back to Top */}
          <div className="mt-8">
            <button 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="group px-6 py-3 bg-white/10 border border-white/20 text-white rounded-xl transition-all duration-300 hover:bg-white/20 hover:scale-105 hover:shadow-lg"
            >
              <span className="flex items-center space-x-2">
                <span>Back to Top</span>
                <svg className="w-4 h-4 group-hover:-translate-y-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                </svg>
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="relative">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-16">
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" fill="url(#footerGradient)"></path>
          <defs>
            <linearGradient id="footerGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#8b5cf6" />
              <stop offset="100%" stopColor="#ec4899" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </footer>
  );
};

export default Footer; 