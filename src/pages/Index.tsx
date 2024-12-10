import React from 'react';
import ChatbotAgent from '../components/ChatbotAgent';
import Services from '../components/Services';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-neutral to-white">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-6xl font-bold text-secondary">
                Next-Gen Financial Solutions
              </h1>
              <p className="text-xl text-gray-600">
                Empowering financial institutions with advanced lending and collection solutions.
              </p>
              <div className="flex gap-4">
                <button className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors">
                  Get Started
                </button>
                <button className="border border-primary text-primary px-6 py-3 rounded-lg hover:bg-primary/10 transition-colors">
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
        <div className="container">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Financial Services?</h2>
            <p className="text-gray-300 mb-8">
              Connect with us to discover how Finexus can elevate your lending and collection processes.
            </p>
            <button className="bg-primary text-white px-8 py-4 rounded-lg hover:bg-primary/90 transition-colors">
              Contact Us
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;