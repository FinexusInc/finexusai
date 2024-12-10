import React from 'react';
import ChatbotAgent from '../components/ChatbotAgent';
import Services from '../components/Services';
import Navigation from '../components/Navigation';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-neutral to-white">
      {/* Header */}
      <header className="container mx-auto py-6 px-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-secondary">Finexus</h1>
        <Navigation />
      </header>

      {/* Hero Section */}
      <section className="relative py-12 md:py-20">
        <div className="container px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-secondary">
                AI-Powered Lending Solutions
              </h1>
              <p className="text-lg md:text-xl text-gray-600">
                Our intelligent agent-based Loan Origination System (LOS) and Loan Management System (LMS) automate complex lending operations with unmatched precision and efficiency.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="w-full sm:w-auto bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors">
                  Get Started
                </button>
                <button className="w-full sm:w-auto border border-primary text-primary px-6 py-3 rounded-lg hover:bg-primary/10 transition-colors">
                  Learn More
                </button>
              </div>
            </div>
            <div className="flex justify-center lg:justify-end">
              <ChatbotAgent />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <Services />

      {/* Contact Section */}
      <section className="py-20 bg-secondary text-white">
        <div className="container px-4">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6">Experience the Power of AI in Lending</h2>
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