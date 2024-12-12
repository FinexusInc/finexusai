import React from 'react';
import Navigation from '../components/Navigation';
import LoanConsultant from '../components/LoanConsultant';
import Logo from '../components/Logo';
import { Link } from 'react-router-dom';
import { FileCheck, Users, ChartBar, Shield } from 'lucide-react';

const Solutions = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-neutral to-white">
      <header className="sticky top-0 backdrop-blur-lg bg-white/80 border-b border-gray-100 z-50">
        <div className="container mx-auto py-4 px-4 flex justify-between items-center">
          <Link to="/">
            <Logo />
          </Link>
          <Navigation />
        </div>
      </header>
      
      <section className="py-20">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-secondary mb-4 animate-fade-in">
                Back Office Solutions in Action
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Experience our intelligent loan processing system that streamlines operations, 
                reduces manual work, and ensures compliance for lending institutions.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              <div className="p-6 bg-white rounded-lg shadow-md border border-gray-100">
                <FileCheck className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">Automated Document Processing</h3>
                <p className="text-muted-foreground">
                  Smart document verification and validation system that reduces processing time by 60%.
                </p>
              </div>
              
              <div className="p-6 bg-white rounded-lg shadow-md border border-gray-100">
                <Users className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">Team Collaboration Hub</h3>
                <p className="text-muted-foreground">
                  Centralized platform for loan officers, underwriters, and processors to work seamlessly.
                </p>
              </div>
              
              <div className="p-6 bg-white rounded-lg shadow-md border border-gray-100">
                <ChartBar className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">Real-time Analytics</h3>
                <p className="text-muted-foreground">
                  Comprehensive dashboards for monitoring loan pipeline and team performance.
                </p>
              </div>
              
              <div className="p-6 bg-white rounded-lg shadow-md border border-gray-100">
                <Shield className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">Compliance Management</h3>
                <p className="text-muted-foreground">
                  Automated compliance checks and regulatory requirement monitoring.
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4 animate-fade-in">Live Demo: Loan Processing Interface</h3>
              <LoanConsultant />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Solutions;