import React from 'react';

const ProjectsSection = () => (
  <section id="projects" className="section-padding">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-4xl sm:text-5xl font-bold text-center mb-16 gradient-text">
        Featured Projects
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden card-hover">
          <div className="h-48 gradient-bg flex items-center justify-center text-white font-semibold text-xl">
            PSD to Shopify
          </div>
          <div className="p-6">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Pixel-Perfect PSD to Shopify</h3>
            <p className="text-gray-600 leading-relaxed mb-4">
              Developed a custom Shopify store by converting a detailed PSD design into a fully functional and pixel-perfect Shopify website. Focused on ensuring design accuracy and responsiveness across devices.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium">Shopify</span>
              <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium">PSD Conversion</span>
              <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium">Responsive Design</span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-lg overflow-hidden card-hover">
          <div className="h-48 gradient-bg flex items-center justify-center text-white font-semibold text-xl">
            Fitness Store
          </div>
          <div className="p-6">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Ashley Eckhoff Fitness</h3>
            <p className="text-gray-600 leading-relaxed mb-4">
              Custom Shopify website for a fitness brand committed to blending positive mindset shifts with proven fitness techniques. Converted Figma design using Dawn theme with essential e-commerce features.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium">Shopify</span>
              <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium">Figma</span>
              <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium">Dawn Theme</span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-lg overflow-hidden card-hover">
          <div className="h-48 gradient-bg flex items-center justify-center text-white font-semibold text-xl">
            Clothing Store
          </div>
          <div className="p-6">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Silverstick Clothing Store</h3>
            <p className="text-gray-600 leading-relaxed mb-4">
              Premium Shopify store for selling clothes with extensive customization. Features multiple inner pages, product functionality, and advanced cart features.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium">Shopify</span>
              <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium">E-commerce</span>
              <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium">Premium Theme</span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-lg overflow-hidden card-hover">
          <div className="h-48 gradient-bg flex items-center justify-center text-white font-semibold text-xl">
            Subscription Store
          </div>
          <div className="p-6">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Filters4You Subscription Store</h3>
            <p className="text-gray-600 leading-relaxed mb-4">
              Complete Shopify store development for filtration devices with subscription plan integration. Built from zero to live with comprehensive e-commerce functionality.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium">Shopify</span>
              <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium">Subscription</span>
              <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium">Full Development</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default ProjectsSection; 