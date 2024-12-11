import React from 'react';
import Navigation from '../components/Navigation';
import LoanConsultant from '../components/LoanConsultant';

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
            <h2 className="text-3xl font-bold text-secondary mb-8 animate-fade-in">Loan Services</h2>
            <div className="space-y-12">
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4 animate-fade-in">Loan Consultant</h3>
                <LoanConsultant />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Solutions;