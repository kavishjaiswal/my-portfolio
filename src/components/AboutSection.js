import React from 'react';
import { Element } from 'react-scroll';
import { FaMapMarkerAlt, FaCalendarAlt, FaCode, FaAward, FaRocket, FaUsers } from 'react-icons/fa';
import { SiShopify, SiJavascript, SiReact, SiNodedotjs } from 'react-icons/si';

const AboutSection = () => (
  <Element name="about">
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-purple-600/10 to-transparent"></div>
      
      {/* Floating elements */}
      <div className="absolute top-20 right-10 w-20 h-20 bg-purple-500/10 rounded-full blur-xl"></div>
      <div className="absolute bottom-20 left-10 w-16 h-16 bg-pink-500/10 rounded-full blur-xl"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-black mb-6 bg-gradient-to-r from-gray-900 via-purple-800 to-gray-900 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Image and Stats */}
          <div className="space-y-8">
            {/* Profile Image */}
            <div className="relative">
              <div className="w-80 h-80 mx-auto rounded-3xl bg-gradient-to-br from-purple-500 via-pink-500 to-blue-500 p-1">
                <div className="w-full h-full rounded-3xl bg-gray-900 flex items-center justify-center">
                  <SiShopify className="text-8xl text-white" />
                </div>
              </div>
              {/* Floating badge */}
              <div className="absolute -top-4 -right-4 bg-gradient-to-r from-green-500 to-blue-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                Available for Hire
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              <div className="glass p-6 rounded-2xl text-center border border-white/20">
                <div className="text-3xl font-black text-purple-600 mb-2">8+</div>
                <div className="text-gray-600 font-medium">Years Experience</div>
              </div>
              <div className="glass p-6 rounded-2xl text-center border border-white/20">
                <div className="text-3xl font-black text-pink-600 mb-2">387+</div>
                <div className="text-gray-600 font-medium">Projects Completed</div>
              </div>
              <div className="glass p-6 rounded-2xl text-center border border-white/20">
                <div className="text-3xl font-black text-blue-600 mb-2">4.9★</div>
                <div className="text-gray-600 font-medium">Client Rating</div>
              </div>
              <div className="glass p-6 rounded-2xl text-center border border-white/20">
                <div className="text-3xl font-black text-green-600 mb-2">100%</div>
                <div className="text-gray-600 font-medium">Success Rate</div>
              </div>
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="space-y-8">
            {/* Main Description */}
            <div className="glass p-8 rounded-3xl border border-white/20">
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Passionate Shopify Developer</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                I'm a dedicated Shopify expert with over 8 years of experience crafting exceptional e-commerce experiences. 
                My passion lies in transforming business ideas into powerful, scalable digital solutions that drive real results.
              </p>
              <p className="text-gray-600 leading-relaxed">
                From custom theme development to complex app integrations, I specialize in creating seamless shopping experiences 
                that convert visitors into loyal customers. Every project is an opportunity to push the boundaries of what's possible in e-commerce.
              </p>
            </div>

            {/* Key Info */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-center space-x-3 p-4 rounded-xl bg-white/50 border border-gray-200">
                <FaMapMarkerAlt className="text-purple-600 text-xl" />
                <div>
                  <div className="font-semibold text-gray-900">Location</div>
                  <div className="text-gray-600">Remote / Worldwide</div>
                </div>
              </div>
              <div className="flex items-center space-x-3 p-4 rounded-xl bg-white/50 border border-gray-200">
                <FaCalendarAlt className="text-pink-600 text-xl" />
                <div>
                  <div className="font-semibold text-gray-900">Experience</div>
                  <div className="text-gray-600">8+ Years</div>
                </div>
              </div>
              <div className="flex items-center space-x-3 p-4 rounded-xl bg-white/50 border border-gray-200">
                <FaCode className="text-blue-600 text-xl" />
                <div>
                  <div className="font-semibold text-gray-900">Specialization</div>
                  <div className="text-gray-600">Shopify Development</div>
                </div>
              </div>
              <div className="flex items-center space-x-3 p-4 rounded-xl bg-white/50 border border-gray-200">
                <FaAward className="text-green-600 text-xl" />
                <div>
                  <div className="font-semibold text-gray-900">Certification</div>
                  <div className="text-gray-600">Shopify Partner</div>
                </div>
              </div>
            </div>

            {/* Tech Stack */}
            <div className="glass p-6 rounded-2xl border border-white/20">
              <h4 className="text-lg font-bold mb-4 text-gray-900">Tech Stack</h4>
              <div className="flex flex-wrap gap-3">
                <div className="flex items-center space-x-2 px-3 py-2 bg-purple-100 rounded-full">
                  <SiShopify className="text-purple-600" />
                  <span className="text-sm font-medium text-purple-800">Shopify</span>
                </div>
                <div className="flex items-center space-x-2 px-3 py-2 bg-yellow-100 rounded-full">
                  <SiJavascript className="text-yellow-600" />
                  <span className="text-sm font-medium text-yellow-800">JavaScript</span>
                </div>
                <div className="flex items-center space-x-2 px-3 py-2 bg-blue-100 rounded-full">
                  <SiReact className="text-blue-600" />
                  <span className="text-sm font-medium text-blue-800">React</span>
                </div>
                <div className="flex items-center space-x-2 px-3 py-2 bg-green-100 rounded-full">
                  <SiNodedotjs className="text-green-600" />
                  <span className="text-sm font-medium text-green-800">Node.js</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section Divider */}
      <div className="absolute bottom-0 left-0 w-full">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-16">
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" fill="url(#gradient)"></path>
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#8b5cf6" />
              <stop offset="100%" stopColor="#ec4899" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </section>
  </Element>
);

export default AboutSection; 