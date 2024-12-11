import React, { useState, useEffect } from 'react';
import { MessageCircle, FileCheck, Check, CreditCard, ChartBar, Send, HelpCircle, UserRound } from 'lucide-react';

type MessageType = {
  text: string;
  type: 'agent' | 'action' | 'advice';
};

const LoanConsultant = () => {
  const [messages, setMessages] = useState<MessageType[]>([]);
  const [isTyping, setIsTyping] = useState(false);

  const conversation: MessageType[] = [
    { text: "Hello! I'm Alex, your dedicated Loan Consultant. I'll be guiding you through our verification process today.", type: 'agent' },
    { text: "Let me start by reviewing your application...", type: 'agent' },
    { text: "Step 1: Verifying Application Completeness", type: 'action' },
    { text: "✓ All required fields are properly filled", type: 'advice' },
    { text: "✓ Supporting documents have been attached", type: 'advice' },
    { text: "Step 2: Confirming Eligibility", type: 'action' },
    { text: "✓ Business meets size requirements", type: 'advice' },
    { text: "✓ Industry type is eligible", type: 'advice' },
    { text: "Step 3: Document Verification", type: 'action' },
    { text: "✓ Business registration verified", type: 'advice' },
    { text: "✓ Tax returns are consistent", type: 'advice' },
    { text: "Step 4: Credit Assessment", type: 'action' },
    { text: "✓ Credit score: 720 (Excellent)", type: 'advice' },
    { text: "✓ No adverse credit history", type: 'advice' },
    { text: "Step 5: Loan Pre-Approval Evaluation", type: 'action' },
    { text: "✓ Debt-to-Income ratio: 32% (Good)", type: 'advice' },
    { text: "✓ Cash flow analysis: Positive", type: 'advice' },
    { text: "Final Step: Submitting to Underwriter", type: 'action' },
    { text: "✓ Application package prepared", type: 'advice' },
    { text: "✓ Forwarded to lending partners", type: 'advice' },
    { text: "Great news! Your application has been successfully processed and submitted to our underwriting team. They will contact you within 2 business days with their decision.", type: 'agent' },
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

  const getIcon = (type: string, text: string) => {
    if (text.includes("Step 1")) return <Check className="w-5 h-5 text-green-500" />;
    if (text.includes("Step 2")) return <FileCheck className="w-5 h-5 text-blue-500" />;
    if (text.includes("Step 3")) return <FileCheck className="w-5 h-5 text-purple-500" />;
    if (text.includes("Step 4")) return <CreditCard className="w-5 h-5 text-orange-500" />;
    if (text.includes("Step 5")) return <ChartBar className="w-5 h-5 text-indigo-500" />;
    if (text.includes("Final Step")) return <Send className="w-5 h-5 text-teal-500" />;
    return null;
  };

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
              <p className="text-sm text-gray-500">Senior Loan Consultant Agent</p>
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
                  message.type === 'action' ? 'pl-4 text-gray-600 border-l-2 border-blue-500 flex items-center gap-2' :
                  message.type === 'advice' ? 'bg-blue-50 p-4 rounded-lg ml-4' : ''
                }`}
              >
                {getIcon(message.type, message.text)}
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