import React, { useEffect, useState } from 'react';
import { MessageCircle } from 'lucide-react';

const ChatbotAgent = () => {
  const [isTyping, setIsTyping] = useState(false);
  const [message, setMessage] = useState('');
  const [currentTask, setCurrentTask] = useState('');
  
  const tasks = [
    {
      action: "Processing loan application for John Smith...",
      result: "✓ Application approved! Credit score: 720, Risk assessment complete"
    },
    {
      action: "Reviewing SBA 7(a) loan requirements...",
      result: "✓ $250,000 loan pre-qualification complete"
    },
    {
      action: "Analyzing business financials...",
      result: "✓ Last 3 years of tax returns verified"
    },
    {
      action: "Calculating loan terms...",
      result: "✓ 10-year term, 6.5% interest rate available"
    },
    {
      action: "Preparing documentation...",
      result: "✓ All required forms ready for submission"
    }
  ];

  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      setIsTyping(true);
      setCurrentTask(tasks[currentIndex].action);
      
      // Show processing message
      setMessage(tasks[currentIndex].action);
      
      // After 2 seconds, show the result
      setTimeout(() => {
        setMessage(tasks[currentIndex].result);
        setIsTyping(false);
      }, 2000);
      
      currentIndex = (currentIndex + 1) % tasks.length;
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative animate-float">
      <div className="absolute -top-16 right-0 bg-white/95 backdrop-blur-sm p-4 rounded-lg shadow-lg max-w-xs w-80 border border-gray-100">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-indigo-600 flex items-center justify-center">
            <span className="text-white text-sm font-semibold">AI</span>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-gray-900">Sarah</h4>
            <p className="text-xs text-gray-500">AI Loan Assistant</p>
          </div>
        </div>
        {isTyping ? (
          <div>
            <div className="flex gap-2 mb-2">
              <span className="w-2 h-2 bg-primary rounded-full animate-bounce"></span>
              <span className="w-2 h-2 bg-primary rounded-full animate-bounce [animation-delay:0.2s]"></span>
              <span className="w-2 h-2 bg-primary rounded-full animate-bounce [animation-delay:0.4s]"></span>
            </div>
            <p className="text-secondary text-sm">{message}</p>
          </div>
        ) : (
          <div className="space-y-1">
            <p className="text-secondary text-sm font-medium">{message}</p>
            <p className="text-xs text-gray-500">AI Agent processing loans</p>
          </div>
        )}
      </div>
      <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-full flex items-center justify-center shadow-lg cursor-pointer hover:scale-105 transition-transform">
        <MessageCircle className="w-8 h-8 text-white" />
      </div>
    </div>
  );
};

export default ChatbotAgent;