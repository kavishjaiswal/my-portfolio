import React from 'react';
import { Element } from 'react-scroll';
import { FaGithub, FaExternalLinkAlt, FaEye } from 'react-icons/fa';
import { SiShopify, SiReact, SiJavascript, SiHtml5, SiCss3, SiNodedotjs } from 'react-icons/si';

const ProjectsSection = () => {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A fully responsive Shopify store with custom theme development, advanced product filtering, and seamless checkout experience.",
      image: "/my-portfolio/images/programming-background-with-person-working-with-codes-computer.jpg",
      tech: ["Shopify", "Liquid", "JavaScript", "CSS"],
      icons: [SiShopify, SiJavascript, SiHtml5, SiCss3],
      github: "https://github.com/kavishjaiswal",
      live: "https://example.com",
      featured: true
    },
    {
      id: 2,
      title: "React Dashboard",
      description: "Modern admin dashboard built with React, featuring real-time analytics, user management, and responsive design.",
      image: "/my-portfolio/images/programming-background-with-person-working-with-codes-computer.jpg",
      tech: ["React", "Node.js", "MongoDB", "Express"],
      icons: [SiReact, SiNodedotjs, SiJavascript, SiCss3],
      github: "https://github.com/kavishjaiswal",
      live: "https://example.com"
    },
    {
      id: 3,
      title: "Mobile App",
      description: "Cross-platform mobile application with offline functionality, push notifications, and native performance.",
      image: "/my-portfolio/images/programming-background-with-person-working-with-codes-computer.jpg",
      tech: ["React Native", "Firebase", "Redux", "TypeScript"],
      icons: [SiReact, SiJavascript, SiHtml5, SiCss3],
      github: "https://github.com/kavishjaiswal",
      live: "https://example.com"
    },
    {
      id: 4,
      title: "API Integration",
      description: "RESTful API development with comprehensive documentation, authentication, and rate limiting.",
      image: "/my-portfolio/images/programming-background-with-person-working-with-codes-computer.jpg",
      tech: ["Node.js", "Express", "MongoDB", "JWT"],
      icons: [SiNodedotjs, SiJavascript, SiHtml5, SiCss3],
      github: "https://github.com/kavishjaiswal",
      live: "https://example.com"
    },
    {
      id: 5,
      title: "Portfolio Website",
      description: "Modern portfolio website with smooth animations, responsive design, and SEO optimization.",
      image: "/my-portfolio/images/programming-background-with-person-working-with-codes-computer.jpg",
      tech: ["React", "Tailwind CSS", "Framer Motion", "Vercel"],
      icons: [SiReact, SiJavascript, SiHtml5, SiCss3],
      github: "https://github.com/kavishjaiswal",
      live: "https://example.com"
    },
    {
      id: 6,
      title: "E-Learning Platform",
      description: "Interactive learning management system with video streaming, progress tracking, and certification.",
      image: "/my-portfolio/images/programming-background-with-person-working-with-codes-computer.jpg",
      tech: ["React", "Node.js", "AWS", "Stripe"],
      icons: [SiReact, SiNodedotjs, SiJavascript, SiCss3],
      github: "https://github.com/kavishjaiswal",
      live: "https://example.com"
    }
  ];

  return (
    <Element name="projects">
      <section className="py-20 bg-white relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-purple-600/5 to-transparent"></div>
        
        {/* Floating elements */}
        <div className="absolute top-40 left-20 w-32 h-32 bg-purple-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 right-20 w-40 h-40 bg-pink-500/5 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-black mb-6 bg-gradient-to-r from-gray-900 via-purple-800 to-gray-900 bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore my latest work showcasing innovative solutions and cutting-edge technologies
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto rounded-full mt-6"></div>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={project.id} className="group relative">
                <div className="glass rounded-3xl overflow-hidden border border-white/20 transition-all duration-500 hover:scale-105 hover:shadow-2xl">
                  {/* Project Image */}
                  <div className="relative h-48 overflow-hidden">
                    <div 
                      className="w-full h-full bg-gradient-to-br from-purple-500 via-pink-500 to-blue-500"
                      style={{
                        backgroundImage: `url(${project.image})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
                      }}
                    >
                      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-all duration-300"></div>
                    </div>
                    
                    {/* Featured Badge */}
                    {project.featured && (
                      <div className="absolute top-4 left-4 bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                        Featured
                      </div>
                    )}

                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center space-x-4">
                      <a href={project.github} target="_blank" rel="noopener noreferrer" 
                         className="p-3 bg-white/20 rounded-full text-white hover:bg-white/30 transition-all duration-300 hover:scale-110">
                        <FaGithub className="text-xl" />
                      </a>
                      <a href={project.live} target="_blank" rel="noopener noreferrer" 
                         className="p-3 bg-white/20 rounded-full text-white hover:bg-white/30 transition-all duration-300 hover:scale-110">
                        <FaExternalLinkAlt className="text-xl" />
                      </a>
                      <button className="p-3 bg-white/20 rounded-full text-white hover:bg-white/30 transition-all duration-300 hover:scale-110">
                        <FaEye className="text-xl" />
                      </button>
                    </div>
                  </div>

                  {/* Project Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-purple-600 transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech, techIndex) => {
                        const IconComponent = project.icons[techIndex];
                        return (
                          <div key={techIndex} className="flex items-center space-x-1 px-3 py-1 bg-gray-100 rounded-full text-xs font-medium text-gray-700">
                            {IconComponent && <IconComponent className="text-sm" />}
                            <span>{tech}</span>
                          </div>
                        );
                      })}
                    </div>

                    {/* Project Links */}
                    <div className="flex space-x-3">
                      <a href={project.github} target="_blank" rel="noopener noreferrer" 
                         className="flex-1 flex items-center justify-center space-x-2 px-4 py-2 bg-gray-900 text-white rounded-lg font-medium hover:bg-gray-800 transition-colors duration-300">
                        <FaGithub className="text-sm" />
                        <span>Code</span>
                      </a>
                      <a href={project.live} target="_blank" rel="noopener noreferrer" 
                         className="flex-1 flex items-center justify-center space-x-2 px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg font-medium hover:from-purple-700 hover:to-pink-700 transition-all duration-300">
                        <FaExternalLinkAlt className="text-sm" />
                        <span>Live</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* View More Button */}
          <div className="text-center mt-12">
            <button className="group px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl">
              <span className="relative z-10">View All Projects</span>
              <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          </div>
        </div>
      </section>
    </Element>
  );
};

export default ProjectsSection; 