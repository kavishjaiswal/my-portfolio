import React from 'react';
import { Element } from 'react-scroll';
import { 
  SiShopify, SiJavascript, SiReact, SiNodedotjs, SiHtml5, SiCss3, 
  SiTailwindcss, SiGit, SiMongodb, SiFirebase, SiVercel,
  SiFigma, SiAdobexd, SiWordpress, SiPhp, SiMysql, SiDocker
} from 'react-icons/si';
import { FaCloud } from 'react-icons/fa';
import { FaDatabase, FaServer, FaMobile, FaDesktop } from 'react-icons/fa';

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: FaDesktop,
      skills: [
        { name: "React", icon: SiReact, level: 95, color: "from-blue-500 to-cyan-500" },
        { name: "JavaScript", icon: SiJavascript, level: 90, color: "from-yellow-500 to-orange-500" },
        { name: "HTML5", icon: SiHtml5, level: 95, color: "from-orange-500 to-red-500" },
        { name: "CSS3", icon: SiCss3, level: 90, color: "from-blue-500 to-indigo-500" },
        { name: "Tailwind CSS", icon: SiTailwindcss, level: 85, color: "from-cyan-500 to-blue-500" }
      ]
    },
    {
      title: "E-Commerce & CMS",
      icon: SiShopify,
      skills: [
        { name: "Shopify", icon: SiShopify, level: 98, color: "from-green-500 to-emerald-500" },
        { name: "WordPress", icon: SiWordpress, level: 80, color: "from-blue-500 to-indigo-500" },
        { name: "Liquid", icon: SiShopify, level: 95, color: "from-purple-500 to-pink-500" },
        { name: "PHP", icon: SiPhp, level: 75, color: "from-purple-500 to-indigo-500" }
      ]
    },
    {
      title: "Backend & Database",
      icon: FaServer,
      skills: [
        { name: "Node.js", icon: SiNodedotjs, level: 85, color: "from-green-500 to-emerald-500" },
        { name: "MongoDB", icon: SiMongodb, level: 80, color: "from-green-500 to-teal-500" },
        { name: "MySQL", icon: SiMysql, level: 75, color: "from-blue-500 to-indigo-500" },
        { name: "Firebase", icon: SiFirebase, level: 70, color: "from-orange-500 to-yellow-500" }
      ]
    },
    {
      title: "Tools & Platforms",
      icon: FaDatabase,
      skills: [
        { name: "Git", icon: SiGit, level: 90, color: "from-orange-500 to-red-500" },
        { name: "AWS", icon: FaCloud, level: 70, color: "from-yellow-500 to-orange-500" },
        { name: "Vercel", icon: SiVercel, level: 85, color: "from-gray-500 to-black" },
        { name: "Docker", icon: SiDocker, level: 65, color: "from-blue-500 to-cyan-500" }
      ]
    }
  ];

  return (
    <Element name="skills">
      <section className="py-20 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-purple-600/5 to-transparent"></div>
        
        {/* Floating elements */}
        <div className="absolute top-20 right-10 w-24 h-24 bg-purple-500/10 rounded-full blur-2xl"></div>
        <div className="absolute bottom-20 left-10 w-32 h-32 bg-pink-500/10 rounded-full blur-2xl"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-black mb-6 bg-gradient-to-r from-gray-900 via-purple-800 to-gray-900 bg-clip-text text-transparent">
              Skills & Expertise
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              My technical expertise spans across modern web technologies and e-commerce platforms
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto rounded-full mt-6"></div>
          </div>

          {/* Skills Categories */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <div key={categoryIndex} className="glass rounded-3xl p-8 border border-white/20">
                {/* Category Header */}
                <div className="flex items-center space-x-4 mb-8">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl flex items-center justify-center">
                    <category.icon className="text-white text-xl" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">{category.title}</h3>
                </div>

                {/* Skills List */}
                <div className="space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="group">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center space-x-3">
                          <div className="w-8 h-8 bg-gradient-to-r from-gray-100 to-gray-200 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                            <skill.icon className="text-gray-600 text-sm" />
                          </div>
                          <span className="font-semibold text-gray-900">{skill.name}</span>
                        </div>
                        <span className="text-sm font-bold text-gray-600">{skill.level}%</span>
                      </div>
                      
                      {/* Progress Bar */}
                      <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                        <div 
                          className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out`}
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Additional Skills */}
          <div className="mt-16">
            <div className="glass rounded-3xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Additional Skills</h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-4">
                {[
                  { name: "Figma", icon: SiFigma, color: "from-purple-500 to-pink-500" },
                  { name: "Adobe XD", icon: SiAdobexd, color: "from-pink-500 to-purple-500" },
                  { name: "Mobile Dev", icon: FaMobile, color: "from-blue-500 to-cyan-500" },
                  { name: "API Design", icon: FaServer, color: "from-green-500 to-emerald-500" },
                  { name: "SEO", icon: FaDesktop, color: "from-yellow-500 to-orange-500" },
                  { name: "Performance", icon: FaDatabase, color: "from-red-500 to-pink-500" }
                ].map((skill, index) => (
                  <div key={index} className="text-center group">
                    <div className={`w-16 h-16 mx-auto mb-3 bg-gradient-to-r ${skill.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <skill.icon className="text-white text-2xl" />
                    </div>
                    <span className="text-sm font-medium text-gray-700">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Experience Summary */}
          <div className="mt-16 text-center">
            <div className="glass rounded-3xl p-8 border border-white/20 max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Why Choose Me?</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                With 8+ years of experience in Shopify development and modern web technologies, 
                I bring a unique blend of technical expertise and business understanding to every project. 
                My focus is always on delivering scalable, maintainable solutions that drive real business results.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-black text-purple-600 mb-2">500+</div>
                  <div className="text-gray-600 font-medium">Projects Delivered</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-black text-pink-600 mb-2">98%</div>
                  <div className="text-gray-600 font-medium">Client Satisfaction</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-black text-blue-600 mb-2">24/7</div>
                  <div className="text-gray-600 font-medium">Support Available</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Element>
  );
};

export default SkillsSection; 