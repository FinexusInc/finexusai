import React from 'react';
import Navigation from '../components/Navigation';
import LoanConsultant from '../components/LoanConsultant';
import Logo from '../components/Logo';
import { Link } from 'react-router-dom';
import { FileCheck, Users, ChartBar, Shield, Clock, Bot, Brain, DollarSign, Smile } from 'lucide-react';

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
                AI Agents for Banks & FinTechs
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Experience our intelligent AI agents that streamline operations, automate complex decisions, 
                and ensure compliance for financial institutions.
              </p>
            </div>

            {/* Key Features Grid */}
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

            {/* Summary Section */}
            <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
              <h3 className="text-2xl font-bold text-secondary mb-6">Empowering Financial Institutions with AI</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <Bot className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold mb-2">End-to-End Automation</h4>
                      <p className="text-muted-foreground text-sm">Streamline the entire loan lifecycle with intelligent workflows and automated document processing.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Brain className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold mb-2">AI-Powered Insights</h4>
                      <p className="text-muted-foreground text-sm">Make smarter decisions with predictive analytics and risk assessment tools.</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <Clock className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold mb-2">Increased Efficiency</h4>
                      <p className="text-muted-foreground text-sm">Reduce processing time and minimize errors through automated validation and checks.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Smile className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold mb-2">Superior Experience</h4>
                      <p className="text-muted-foreground text-sm">Deliver faster approvals and transparent communication to borrowers.</p>
                    </div>
                  </div>
                </div>
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