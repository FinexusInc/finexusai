import React from 'react';
import Navigation from '../components/Navigation';
import { MessageCircle, Upload, FileCheck, HelpCircle } from 'lucide-react';

const LoanOriginationAgent = () => {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6 mb-8 animate-fade-in">
      <div className="flex items-start gap-4">
        <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-indigo-600 flex items-center justify-center flex-shrink-0 animate-scale-in">
          <span className="text-white text-lg font-semibold">AI</span>
        </div>
        <div className="flex-1">
          <div className="flex justify-between items-start mb-4">
            <div className="animate-fade-in [animation-delay:200ms]">
              <h3 className="text-lg font-semibold text-gray-900">Sarah</h3>
              <p className="text-sm text-gray-500">AI Loan Assistant</p>
            </div>
            <div className="flex gap-2 animate-fade-in [animation-delay:400ms]">
              <button className="p-1 text-gray-400 hover:text-gray-600 transition-colors hover:scale-110">
                <FileCheck size={20} />
              </button>
              <button className="p-1 text-gray-400 hover:text-gray-600 transition-colors hover:scale-110">
                <HelpCircle size={20} />
              </button>
              <button className="p-1 text-gray-400 hover:text-gray-600 transition-colors hover:scale-110">
                <MessageCircle size={20} />
              </button>
            </div>
          </div>
          <div className="space-y-4">
            <p className="text-gray-900 animate-fade-in [animation-delay:600ms]">
              Hi Mike, Congratulations on starting your $250,000 SBA 7(a) loan application.
            </p>
            <p className="text-gray-900 animate-fade-in [animation-delay:800ms]">
              Next, we'll need your last 3 years of federal business tax returns and (2) other documents. You can{' '}
              <button className="text-blue-600 hover:text-blue-700 inline-flex items-center gap-1 story-link">
                <Upload size={16} />
                upload them here
              </button>.
            </p>
            <p className="text-gray-900 animate-fade-in [animation-delay:1000ms]">
              Let me know if you have any questions - I'm happy to help.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const Solutions = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-neutral to-white">
      <header className="sticky top-0 backdrop-blur-lg bg-white/80 border-b border-gray-100 z-50">
        <div className="container mx-auto py-4 px-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-secondary">Finexus</h1>
          <Navigation />
        </div>
      </header>
      
      <section className="py-20">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-secondary mb-8 animate-fade-in">Loan Origination Agent</h2>
            <LoanOriginationAgent />
            <div className="bg-white/50 backdrop-blur-sm rounded-lg p-6 border border-gray-100 animate-fade-in [animation-delay:1200ms]">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                About Our AI Loan Assistant
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Our AI-powered loan assistant streamlines the entire loan origination process, 
                from application to approval. With advanced document processing capabilities 
                and real-time assistance, we make getting a business loan faster and easier 
                than ever before.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Solutions;