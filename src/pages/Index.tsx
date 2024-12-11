import React from 'react';
import Navigation from '../components/Navigation';
import Logo from '../components/Logo';
import AnimatedHero from '../components/AnimatedHero';
import Services from '../components/Services';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-neutral to-white">
      {/* Header */}
      <header className="container mx-auto py-6 px-4 flex justify-between items-center">
        <Logo />
        <Navigation />
      </header>

      {/* Hero Section with Animation */}
      <AnimatedHero />

      {/* Services Section */}
      <Services />

      {/* Contact Section */}
      <section className="py-20 bg-secondary text-white">
        <div className="container px-4">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6">
              Experience the Power of AI in Lending
            </h2>
            <p className="text-gray-300 mb-8">
              Join the future of lending with our AI-driven solutions. Our deep expertise in lending technology and intelligent systems ensures superior results for your financial institution.
            </p>
            <button className="w-full sm:w-auto bg-primary text-white px-8 py-4 rounded-lg hover:bg-primary/90 transition-colors">
              Contact Us
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;