import React from 'react';
import Navigation from '../components/Navigation';
import { Brain, Bot, Database, BarChart } from 'lucide-react';

const SolutionAgent = ({ icon: Icon, title, description, tasks }: { 
  icon: any, 
  title: string, 
  description: string,
  tasks: string[]
}) => {
  const [currentTask, setCurrentTask] = React.useState(0);
  const [isProcessing, setIsProcessing] = React.useState(false);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setIsProcessing(true);
      setTimeout(() => {
        setIsProcessing(false);
        setCurrentTask((prev) => (prev + 1) % tasks.length);
      }, 2000);
    }, 4000);

    return () => clearInterval(interval);
  }, [tasks.length]);

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-neutral/20">
      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
        <Icon className="w-6 h-6 text-primary" />
      </div>
      <h3 className="text-xl font-semibold mb-2 text-secondary">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <div className="bg-neutral/5 p-4 rounded-lg">
        {isProcessing ? (
          <div className="flex items-center gap-2">
            <div className="animate-pulse w-2 h-2 bg-primary rounded-full" />
            <div className="animate-pulse w-2 h-2 bg-primary rounded-full delay-100" />
            <div className="animate-pulse w-2 h-2 bg-primary rounded-full delay-200" />
            <span className="text-sm text-gray-600 ml-2">Processing...</span>
          </div>
        ) : (
          <div className="text-sm text-gray-600">
            ✓ {tasks[currentTask]}
          </div>
        )}
      </div>
    </div>
  );
};

const Solutions = () => {
  const solutions = [
    {
      icon: Brain,
      title: "Loan Origination System",
      description: "AI-powered loan application processing and decisioning",
      tasks: [
        "Processing new loan application for John Smith",
        "Verifying income documents automatically",
        "Running credit check and risk assessment",
        "Generating approval recommendation"
      ]
    },
    {
      icon: Bot,
      title: "Loan Management System",
      description: "Automated portfolio monitoring and servicing",
      tasks: [
        "Updating payment schedules for 50 accounts",
        "Monitoring loan performance metrics",
        "Generating monthly statements",
        "Processing automatic payments"
      ]
    },
    {
      icon: Database,
      title: "Collections Management",
      description: "Intelligent recovery and restructuring solutions",
      tasks: [
        "Analyzing delinquent accounts",
        "Prioritizing collection cases",
        "Sending automated payment reminders",
        "Proposing restructuring plans"
      ]
    },
    {
      icon: BarChart,
      title: "Analytics Dashboard",
      description: "Advanced lending insights and reporting",
      tasks: [
        "Generating portfolio health report",
        "Analyzing risk metrics",
        "Updating performance dashboards",
        "Creating compliance reports"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-neutral to-white">
      <header className="container mx-auto py-6 px-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-secondary">Finexus</h1>
        <Navigation />
      </header>
      
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">Our AI Solutions</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Experience our intelligent agents working autonomously across different lending operations
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {solutions.map((solution, index) => (
              <SolutionAgent key={index} {...solution} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Solutions;