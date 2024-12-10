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
      action: "Monitoring payment schedules...",
      result: "✓ Generated payment reminders for 50 accounts"
    },
    {
      action: "Analyzing collection cases...",
      result: "✓ Prioritized 25 accounts for recovery, Restructured 10 loans"
    },
    {
      action: "Updating loan portfolio...",
      result: "✓ Risk metrics updated, Portfolio health: 95%"
    },
    {
      action: "Running credit analysis...",
      result: "✓ Credit models updated with latest market data"
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
      <div className="absolute -top-16 right-0 bg-white p-4 rounded-lg shadow-lg max-w-xs w-72">
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
            <p className="text-xs text-gray-500">AI Agent working autonomously</p>
          </div>
        )}
      </div>
      <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center shadow-lg">
        <MessageCircle className="w-8 h-8 text-white" />
      </div>
    </div>
  );
};

export default ChatbotAgent;