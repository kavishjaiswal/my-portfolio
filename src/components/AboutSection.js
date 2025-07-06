import React from 'react';

const AboutSection = () => (
  <section id="about" className="section-padding bg-gray-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-4xl sm:text-5xl font-bold text-center mb-16 gradient-text">
        About Me
      </h2>
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <p className="text-lg text-gray-600 leading-relaxed">
            I am Kavish, a seasoned Web Developer with over 8 years of experience in crafting exceptional online experiences. My expertise lies in Shopify storefront development, where I specialize in building highly functional, visually captivating, and user-friendly e-commerce solutions tailored to meet the unique needs of businesses.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed">
            With a strong commitment to meeting deadlines and exceeding client expectations, I focus on delivering quality work that drives results. My passion for innovation and detail-oriented approach ensures every project is not only completed on time but also aligns seamlessly with the client's vision and goals.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8">
            <div className="bg-white p-6 rounded-xl shadow-lg text-center card-hover">
              <div className="text-3xl font-bold text-primary-500 mb-2">8+</div>
              <div className="text-sm text-gray-600 font-medium">Years Experience</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg text-center card-hover">
              <div className="text-3xl font-bold text-primary-500 mb-2">387+</div>
              <div className="text-sm text-gray-600 font-medium">Reviews</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg text-center card-hover">
              <div className="text-3xl font-bold text-primary-500 mb-2">4.9★</div>
              <div className="text-sm text-gray-600 font-medium">Rating</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg text-center card-hover">
              <div className="text-3xl font-bold text-primary-500 mb-2">97%</div>
              <div className="text-sm text-gray-600 font-medium">Success Rate</div>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
          <div className="text-center mb-8 pb-6 border-b-2 border-gray-100">
            <h3 className="text-2xl font-bold text-gray-800 mb-2">Kavish J.</h3>
            <p className="text-primary-500 font-semibold">Shopify Expert</p>
          </div>
          <div className="space-y-4">
            <div className="flex justify-between items-center py-2">
              <span className="font-semibold text-gray-600">Location:</span>
              <span className="font-medium text-gray-800">India</span>
            </div>
            <div className="flex justify-between items-center py-2">
              <span className="font-semibold text-gray-600">Rate:</span>
              <span className="font-medium text-gray-800">$25 USD/Hour</span>
            </div>
            <div className="flex justify-between items-center py-2">
              <span className="font-semibold text-gray-600">Joined:</span>
              <span className="font-medium text-gray-800">May 2014</span>
            </div>
            <div className="flex justify-between items-center py-2">
              <span className="font-semibold text-gray-600">Education:</span>
              <span className="font-medium text-gray-800">B.E Computer Science</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default AboutSection; 