import React from 'react';
import Navigation from '../components/Navigation';

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-neutral to-white">
      <header className="container mx-auto py-6 px-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-secondary">Finexus</h1>
        <Navigation />
      </header>
      
      <section className="py-20">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-6">About Us</h2>
            <div className="prose prose-lg">
              <p className="text-gray-600 mb-6">
                Finexus is at the forefront of revolutionizing lending operations through artificial intelligence. 
                Our mission is to transform traditional lending processes with cutting-edge AI technology, 
                making them more efficient, accurate, and accessible.
              </p>
              <p className="text-gray-600 mb-6">
                Founded by a team of financial technology experts, we combine deep industry knowledge with 
                advanced AI capabilities to deliver solutions that address the complex challenges in modern lending.
              </p>
              <h3 className="text-xl font-semibold text-secondary mb-4">Our Vision</h3>
              <p className="text-gray-600 mb-6">
                We envision a future where lending decisions are made instantly, accurately, and fairly, 
                powered by intelligent systems that continuously learn and adapt to changing market conditions.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;