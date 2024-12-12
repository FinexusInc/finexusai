import React from 'react';
import Navigation from '../components/Navigation';
import Logo from '../components/Logo';
import AnimatedHero from '../components/AnimatedHero';
import Services from '../components/Services';
import ChatbotAgent from '../components/ChatbotAgent';

const Index = () => {
  return (
    <div className="min-h-[90vh] bg-white">
      {/* Header */}
      <header className="sticky top-0 backdrop-blur-lg bg-white/80 border-b border-gray-100 z-50">
        <div className="container mx-auto py-4 px-4 flex justify-between items-center">
          <Logo />
          <Navigation />
        </div>
      </header>

      {/* Hero Section with Animation */}
      <AnimatedHero />

      {/* Services Section */}
      <Services />

      {/* Chatbot Agent */}
      <div className="fixed bottom-8 right-8 z-50">
        <ChatbotAgent />
      </div>

      {/* Contact Section */}
      <section className="py-32 bg-neutral">
        <div className="container px-4">
          <div className="text-center max-w-2xl mx-auto space-y-6">
            <h2 className="text-4xl md:text-5xl font-semibold text-secondary tracking-tight">
              Experience the Future of Lending
            </h2>
            <p className="text-muted text-lg leading-relaxed">
              Join the future of lending with our AI-driven solutions. Our deep expertise in lending technology 
              and intelligent systems ensures superior results for your financial institution.
            </p>
            <button className="bg-primary text-white px-8 py-4 rounded-full hover:bg-primary/90 transition-all 
              transform hover:scale-105 font-medium text-lg shadow-lg hover:shadow-xl">
              Contact Us
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;