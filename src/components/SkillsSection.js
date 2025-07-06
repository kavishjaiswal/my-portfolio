import React from 'react';

const SkillsSection = () => (
  <section id="skills" className="section-padding bg-gray-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-4xl sm:text-5xl font-bold text-center mb-16 gradient-text">
        Skills & Expertise
      </h2>
      <div className="grid md:grid-cols-3 gap-8">
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h3 className="text-xl font-bold text-gray-800 mb-6 text-center">E-commerce Development</h3>
          <div className="flex flex-wrap gap-3 justify-center">
            <span className="gradient-bg text-white px-4 py-2 rounded-full text-sm font-medium">Shopify Development</span>
            <span className="gradient-bg text-white px-4 py-2 rounded-full text-sm font-medium">Shopify Templates</span>
            <span className="gradient-bg text-white px-4 py-2 rounded-full text-sm font-medium">E-commerce Solutions</span>
            <span className="gradient-bg text-white px-4 py-2 rounded-full text-sm font-medium">Payment Integration</span>
          </div>
        </div>
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h3 className="text-xl font-bold text-gray-800 mb-6 text-center">Web Technologies</h3>
          <div className="flex flex-wrap gap-3 justify-center">
            <span className="gradient-bg text-white px-4 py-2 rounded-full text-sm font-medium">HTML5 & CSS3</span>
            <span className="gradient-bg text-white px-4 py-2 rounded-full text-sm font-medium">JavaScript</span>
            <span className="gradient-bg text-white px-4 py-2 rounded-full text-sm font-medium">PHP</span>
            <span className="gradient-bg text-white px-4 py-2 rounded-full text-sm font-medium">Responsive Design</span>
          </div>
        </div>
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h3 className="text-xl font-bold text-gray-800 mb-6 text-center">Design & Tools</h3>
          <div className="flex flex-wrap gap-3 justify-center">
            <span className="gradient-bg text-white px-4 py-2 rounded-full text-sm font-medium">PSD to HTML</span>
            <span className="gradient-bg text-white px-4 py-2 rounded-full text-sm font-medium">Figma Integration</span>
            <span className="gradient-bg text-white px-4 py-2 rounded-full text-sm font-medium">UI/UX Design</span>
            <span className="gradient-bg text-white px-4 py-2 rounded-full text-sm font-medium">Pixel-Perfect Conversion</span>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default SkillsSection; 