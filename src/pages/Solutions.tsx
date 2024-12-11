import React, { useState, useEffect } from 'react';
import Navigation from '../components/Navigation';
import LoanConsultant from '../components/LoanConsultant';
import { MessageCircle, Upload, FileCheck, HelpCircle } from 'lucide-react';

type MessageType = {
  text: string;
  type: 'agent' | 'action' | 'upload';
};

const LoanOriginationAgent = () => {
  const [messages, setMessages] = useState<MessageType[]>([]);
  const [isTyping, setIsTyping] = useState(false);

  const conversation: MessageType[] = [
    { text: "Hi Mike, I'm Sarah, your AI Loan Assistant. I'll be helping you with your SBA 7(a) loan application today.", type: 'agent' },
    { text: "I see you're interested in a $250,000 loan. Let me analyze your preliminary information.", type: 'agent' },
    { text: "Analyzing credit report and business financials...", type: 'action' },
    { text: "Based on the initial review, your application looks promising! Here's what I found:", type: 'agent' },
    { text: "✓ Credit Score: 720 - Excellent qualification potential", type: 'action' },
    { text: "✓ Business Revenue: $45,000/month - Strong cash position", type: 'action' },
    { text: "To proceed further, I'll need a few documents from you:", type: 'agent' },
    { text: "1. Last 3 years of federal business tax returns\n2. Current balance sheet\n3. Profit & loss statement", type: 'upload' },
  ];

  useEffect(() => {
    const addMessage = (index: number) => {
      if (index < conversation.length) {
        setIsTyping(true);
        setTimeout(() => {
          setIsTyping(false);
          setMessages(prev => [...prev, conversation[index]]);
          setTimeout(() => addMessage(index + 1), 1000);
        }, 2000);
      }
    };

    addMessage(0);
  }, []);

  return (
    <div className="bg-white rounded-lg shadow-lg border border-gray-100 p-6 mb-8 animate-fade-in">
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
            {messages.map((message, index) => (
              <div
                key={index}
                className={`animate-fade-in [animation-delay:${index * 200}ms] ${
                  message.type === 'action' ? 'pl-4 text-gray-600 border-l-2 border-primary' :
                  message.type === 'upload' ? 'bg-gray-50 p-4 rounded-lg' : ''
                }`}
              >
                <p className="text-gray-900">
                  {message.text}
                  {message.type === 'upload' && (
                    <button className="mt-2 text-blue-600 hover:text-blue-700 inline-flex items-center gap-1 story-link">
                      <Upload size={16} />
                      Upload Documents
                    </button>
                  )}
                </p>
              </div>
            ))}
            {isTyping && (
              <div className="flex gap-2 animate-pulse">
                <span className="w-2 h-2 bg-primary rounded-full"></span>
                <span className="w-2 h-2 bg-primary rounded-full [animation-delay:200ms]"></span>
                <span className="w-2 h-2 bg-primary rounded-full [animation-delay:400ms]"></span>
              </div>
            )}
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
            <h2 className="text-3xl font-bold text-secondary mb-8 animate-fade-in">Loan Services</h2>
            <div className="space-y-12">
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4 animate-fade-in">Loan Consultant</h3>
                <LoanConsultant />
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4 animate-fade-in">Loan Origination Agent</h3>
                <LoanOriginationAgent />
              </div>
            </div>
            <div className="bg-white/50 backdrop-blur-sm rounded-lg p-6 border border-gray-100 mt-12 animate-fade-in [animation-delay:1200ms]">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                About Our AI Loan Assistants
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Our AI-powered loan assistants streamline the entire lending process, 
                from initial consultation to final approval. With advanced analysis capabilities 
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