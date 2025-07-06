import React from 'react';
import { Element } from 'react-scroll';
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowDown } from 'react-icons/fa';
import { SiShopify } from 'react-icons/si';

const HeroSection = () => (
  <Element name="home">
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 via-pink-600/20 to-blue-600/20 animate-pulse"></div>
      
      {/* Floating orbs */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-purple-500/30 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
      <div className="absolute top-40 right-20 w-72 h-72 bg-yellow-500/30 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-40 w-72 h-72 bg-pink-500/30 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>

      {/* Main content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Glassmorphism card */}
        <div className="glass p-8 sm:p-12 rounded-3xl backdrop-blur-xl border border-white/20 shadow-2xl">
          {/* Profile image placeholder */}
          <div className="w-32 h-32 mx-auto mb-8 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 p-1">
            <div className="w-full h-full rounded-full bg-gray-900 flex items-center justify-center">
              <SiShopify className="text-4xl text-white" />
            </div>
          </div>

          {/* Main headline */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black mb-6 bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent leading-tight">
            Kavish Jaiswal
          </h1>

          {/* Subtitle */}
          <p className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-4 text-gray-300">
            Shopify Expert & Full-Stack Developer
          </p>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-6 mb-8 text-gray-400">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span className="font-medium">8+ Years Experience</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
              <span className="font-medium">4.9★ Rating</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <span className="font-medium">387+ Reviews</span>
            </div>
          </div>

          {/* Description */}
          <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed">
            Crafting exceptional e-commerce experiences with cutting-edge Shopify development. 
            Transforming ideas into powerful, scalable digital solutions.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <button className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl">
              <span className="relative z-10">View My Work</span>
              <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
            <button className="group px-8 py-4 border-2 border-white/30 text-white font-bold rounded-xl transition-all duration-300 hover:bg-white/10 hover:border-white/50 hover:scale-105">
              Get In Touch
            </button>
          </div>

          {/* Social Icons */}
          <div className="flex justify-center space-x-6">
            <a href="https://github.com/kavishjaiswal" target="_blank" rel="noopener noreferrer" 
               className="group p-3 rounded-full bg-white/10 border border-white/20 text-white transition-all duration-300 hover:bg-white/20 hover:scale-110 hover:shadow-lg">
              <FaGithub className="text-xl group-hover:text-purple-300 transition-colors" />
            </a>
            <a href="https://linkedin.com/in/kavishjaiswal" target="_blank" rel="noopener noreferrer" 
               className="group p-3 rounded-full bg-white/10 border border-white/20 text-white transition-all duration-300 hover:bg-white/20 hover:scale-110 hover:shadow-lg">
              <FaLinkedin className="text-xl group-hover:text-blue-300 transition-colors" />
            </a>
            <a href="mailto:kavishjaiswal001@gmail.com" 
               className="group p-3 rounded-full bg-white/10 border border-white/20 text-white transition-all duration-300 hover:bg-white/20 hover:scale-110 hover:shadow-lg">
              <FaEnvelope className="text-xl group-hover:text-green-300 transition-colors" />
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <FaArrowDown className="text-white/60 text-2xl" />
        </div>
      </div>
    </section>
  </Element>
);

export default HeroSection; 