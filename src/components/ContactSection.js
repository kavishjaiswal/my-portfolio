import React, { useState } from 'react';
import { Element } from 'react-scroll';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa';
import { SiShopify } from 'react-icons/si';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  return (
    <Element name="contact">
      <section className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 via-pink-600/10 to-blue-600/10"></div>
        
        {/* Floating elements */}
        <div className="absolute top-20 left-20 w-72 h-72 bg-purple-500/20 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
        <div className="absolute bottom-20 right-20 w-72 h-72 bg-pink-500/20 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-black mb-6 bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent">
              Get In Touch
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Ready to start your next project? Let's discuss how I can help bring your ideas to life
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto rounded-full mt-6"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div className="glass p-8 rounded-3xl border border-white/20">
                <h3 className="text-2xl font-bold mb-6 text-white">Let's Connect</h3>
                <p className="text-gray-300 leading-relaxed mb-8">
                  I'm always excited to work on new projects and collaborate with amazing people. 
                  Whether you have a question or want to discuss a project, feel free to reach out!
                </p>

                {/* Contact Details */}
                <div className="space-y-6">
                  <div className="flex items-center space-x-4 p-4 rounded-xl bg-white/10 border border-white/20">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl flex items-center justify-center">
                      <FaEnvelope className="text-white text-xl" />
                    </div>
                    <div>
                      <div className="font-semibold text-white">Email</div>
                      <div className="text-gray-300">kavishjaiswal001@gmail.com</div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4 p-4 rounded-xl bg-white/10 border border-white/20">
                    <div className="w-12 h-12 bg-gradient-to-r from-pink-600 to-purple-600 rounded-xl flex items-center justify-center">
                      <FaPhone className="text-white text-xl" />
                    </div>
                    <div>
                      <div className="font-semibold text-white">Phone</div>
                      <div className="text-gray-300">+1 (555) 123-4567</div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4 p-4 rounded-xl bg-white/10 border border-white/20">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl flex items-center justify-center">
                      <FaMapMarkerAlt className="text-white text-xl" />
                    </div>
                    <div>
                      <div className="font-semibold text-white">Location</div>
                      <div className="text-gray-300">Remote / Worldwide</div>
                    </div>
                  </div>
                </div>

                {/* Social Links */}
                <div className="mt-8">
                  <h4 className="text-lg font-semibold text-white mb-4">Follow Me</h4>
                  <div className="flex space-x-4">
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
                </div>
              </div>

              {/* Availability Status */}
              <div className="glass p-6 rounded-2xl border border-white/20 text-center">
                <div className="flex items-center justify-center space-x-2 mb-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-green-400 font-semibold">Available for New Projects</span>
                </div>
                <p className="text-gray-300 text-sm">
                  Currently accepting new clients and exciting opportunities
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="glass p-8 rounded-3xl border border-white/20">
              <h3 className="text-2xl font-bold mb-6 text-white">Send Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                      placeholder="Your name"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                      placeholder="your@email.com"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                    placeholder="Project inquiry"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="5"
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 resize-none"
                    placeholder="Tell me about your project..."
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="group w-full px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl flex items-center justify-center space-x-2"
                >
                  <span>Send Message</span>
                  <FaPaperPlane className="text-sm group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </Element>
  );
};

export default ContactSection; 