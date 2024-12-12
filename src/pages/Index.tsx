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
      <header className="sticky top-0 backdrop-blur-lg bg-white/80 border-b border-gray-100 z-50 px-4 md:px-0">
        <div className="container mx-auto py-4 flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0">
          <Logo />
          <Navigation />
        </div>
      </header>

      {/* Hero Section with Animation */}
      <div className="px-4 md:px-0">
        <AnimatedHero />
      </div>

      {/* Services Section */}
      <div className="px-4 md:px-0">
        <Services />
      </div>

      {/* Chatbot Agent */}
      <div className="fixed bottom-4 right-4 md:bottom-8 md:right-8 z-50">
        <ChatbotAgent />
      </div>

      {/* Contact Section */}
      <section className="py-16 md:py-32 bg-neutral px-4 md:px-0">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto space-y-4 md:space-y-6">
            <h2 className="text-3xl md:text-5xl font-semibold text-secondary tracking-tight">
              Experience the Future of Lending
            </h2>
            <p className="text-base md:text-lg text-muted leading-relaxed px-4 md:px-0">
              Join the future of lending with our AI-driven solutions. Our deep expertise in lending technology 
              and intelligent systems ensures superior results for your financial institution.
            </p>
            <button className="w-full md:w-auto bg-primary text-white px-6 md:px-8 py-3 md:py-4 rounded-full 
              hover:bg-primary/90 transition-all transform hover:scale-105 font-medium text-base md:text-lg 
              shadow-lg hover:shadow-xl">
              Contact Us
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;