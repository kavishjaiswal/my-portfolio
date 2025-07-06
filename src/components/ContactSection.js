import React from 'react';

const ContactSection = () => (
  <section id="contact" className="section-padding">
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h2 className="text-4xl sm:text-5xl font-bold mb-16 gradient-text">
        Get In Touch
      </h2>
      <div className="space-y-8">
        <div>
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Ready to Start Your Project?</h3>
          <p className="text-lg text-gray-600 leading-relaxed">
            Let's discuss how I can help bring your vision to life with a custom Shopify store or web development solution.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <div className="font-semibold text-gray-600 mb-2">Rate:</div>
            <div className="font-medium text-gray-800">$25 USD/Hour</div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <div className="font-semibold text-gray-600 mb-2">Availability:</div>
            <div className="font-medium text-gray-800">Available for New Projects</div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <div className="font-semibold text-gray-600 mb-2">Response Time:</div>
            <div className="font-medium text-gray-800">Within 24 hours</div>
          </div>
        </div>
        <button className="gradient-bg text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:transform hover:-translate-y-1 hover:shadow-lg shadow-md">
          Hire Me on Freelancer
        </button>
      </div>
    </div>
  </section>
);

export default ContactSection; 