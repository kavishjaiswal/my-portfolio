import React from 'react';

const HeroSection = () => (
  <section
    id="home"
    className="relative min-h-screen flex items-center justify-center text-white text-center px-4 sm:px-6 lg:px-8 overflow-hidden"
    style={{
      backgroundImage: "url('/images/programming-background-with-person-working-with-codes-computer.jpg')",
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }}
  >
    <div className="absolute inset-0 bg-black/70"></div>
    <div className="relative z-10 max-w-4xl mx-auto">
      <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-4 animate-fade-in-up text-white drop-shadow-lg">
        Kavish Jaiswal
      </h1>
      <p className="text-xl sm:text-2xl mb-4 opacity-90 animate-fade-in-up-delay-1 text-white drop-shadow">
        Shopify Expert & Full-Stack Developer
      </p>
      <p className="text-lg mb-8 opacity-80 animate-fade-in-up-delay-2 text-white drop-shadow">
        8+ Years of Experience • 4.9★ Rating • 387+ Reviews
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up-delay-3">
        <button className="btn-primary">View My Work</button>
        <button className="btn-secondary">Get In Touch</button>
      </div>
    </div>
  </section>
);

export default HeroSection; 