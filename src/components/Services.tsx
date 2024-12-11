import React from 'react';
import { Brain, Bot, Database, BarChart } from 'lucide-react';

const ServiceCard = ({ icon: Icon, title, description }: { icon: any, title: string, description: string }) => (
  <div className="relative bg-gradient-glass backdrop-blur-sm p-8 rounded-2xl hover:shadow-glass transition-all duration-300 
    border border-white/20 transform hover:-translate-y-1 group overflow-hidden">
    <div className="absolute inset-0 bg-gradient-radial from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    <div className="relative">
      <div className="w-14 h-14 bg-gradient-to-br from-primary to-primary/50 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
        <Icon className="w-7 h-7 text-white" />
      </div>
      <h3 className="text-2xl font-semibold mb-4 text-secondary tracking-tight group-hover:text-primary transition-colors">{title}</h3>
      <p className="text-muted text-lg leading-relaxed">{description}</p>
    </div>
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
    <section className="py-32 bg-gradient-to-b from-neutral to-white" id="services">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-semibold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent mb-6 tracking-tight">
            Our AI Solutions
          </h2>
          <p className="text-muted text-lg max-w-2xl mx-auto leading-relaxed">
            Leveraging cutting-edge artificial intelligence to transform lending operations
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;