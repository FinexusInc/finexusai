import React from 'react';
import { Brain, Bot, Database, BarChart } from 'lucide-react';

const ServiceCard = ({ icon: Icon, title, description }: { icon: any, title: string, description: string }) => (
  <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-neutral/20">
    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
      <Icon className="w-6 h-6 text-primary" />
    </div>
    <h3 className="text-xl font-semibold mb-2 text-secondary">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const Services = () => {
  const services = [
    {
      icon: Brain,
      title: "AI-Powered Lending",
      description: "Advanced artificial intelligence algorithms for smarter, faster lending decisions."
    },
    {
      icon: Bot,
      title: "Intelligent Collection Agents",
      description: "AI-driven collection agents that optimize recovery processes with machine learning."
    },
    {
      icon: Database,
      title: "Smart Loan Origination System",
      description: "AI-enhanced LOS that automates and streamlines the entire loan origination process."
    },
    {
      icon: BarChart,
      title: "Intelligent Loan Management",
      description: "AI-powered LMS for predictive analytics and automated portfolio management."
    }
  ];

  return (
    <section className="py-20" id="services">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">Our AI Solutions</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Leveraging cutting-edge artificial intelligence to transform lending operations
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;