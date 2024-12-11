import React, { useState, useEffect } from 'react';
import { MessageCircle, FileCheck, HelpCircle, UserRound } from 'lucide-react';

type MessageType = {
  text: string;
  type: 'agent' | 'action' | 'advice';
};

const LoanConsultant = () => {
  const [messages, setMessages] = useState<MessageType[]>([]);
  const [isTyping, setIsTyping] = useState(false);

  const conversation: MessageType[] = [
    { text: "Hello! I'm Alex, your dedicated Loan Consultant. I specialize in helping businesses find the right financing solutions.", type: 'agent' },
    { text: "I notice you're exploring financing options. Let me provide a personalized assessment.", type: 'agent' },
    { text: "Analyzing your business profile...", type: 'action' },
    { text: "Based on your industry and business size, here are my recommendations:", type: 'agent' },
    { text: "✓ SBA 7(a) Loan - Best for general business purposes", type: 'advice' },
    { text: "✓ Equipment Financing - 100% funding available", type: 'advice' },
    { text: "✓ Business Line of Credit - For flexible working capital", type: 'advice' },
    { text: "Would you like to discuss any of these options in detail?", type: 'agent' },
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
        <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-cyan-600 flex items-center justify-center flex-shrink-0 animate-scale-in">
          <UserRound className="w-6 h-6 text-white" />
        </div>
        <div className="flex-1">
          <div className="flex justify-between items-start mb-4">
            <div className="animate-fade-in [animation-delay:200ms]">
              <h3 className="text-lg font-semibold text-gray-900">Alex</h3>
              <p className="text-sm text-gray-500">Senior Loan Consultant</p>
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
                  message.type === 'action' ? 'pl-4 text-gray-600 border-l-2 border-blue-500' :
                  message.type === 'advice' ? 'bg-blue-50 p-4 rounded-lg' : ''
                }`}
              >
                <p className="text-gray-900">{message.text}</p>
              </div>
            ))}
            {isTyping && (
              <div className="flex gap-2 animate-pulse">
                <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                <span className="w-2 h-2 bg-blue-500 rounded-full [animation-delay:200ms]"></span>
                <span className="w-2 h-2 bg-blue-500 rounded-full [animation-delay:400ms]"></span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoanConsultant;