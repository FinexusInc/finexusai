import React, { useState, useEffect, useRef } from 'react';
import { MessageCircle, FileCheck, Check, CreditCard, ChartBar, Send, HelpCircle, UserRound, ScrollText, X } from 'lucide-react';
import { ScrollArea } from "./ui/scroll-area";
import { Textarea } from "./ui/textarea";

type MessageType = {
  text: string;
  type: 'agent' | 'action' | 'advice' | 'internal' | 'status';
  status?: 'pass' | 'fail';
};

const LoanConsultant = () => {
  const [messages, setMessages] = useState<MessageType[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const [inputMessage, setInputMessage] = useState('');
  const scrollRef = useRef<HTMLDivElement>(null);

  const conversation: MessageType[] = [
    { text: "Hello Alex, this is Sarah from Internal Loan Processing. Could you please pull up application #100283393 for review?", type: 'internal' },
    { text: "Of course, Sarah. Let me retrieve that application for you right away...", type: 'agent' },
    { text: "Pulling application #100283393...", type: 'action' },
    { text: "Step 1: Verifying Application Completeness", type: 'action' },
    { text: "All required fields are properly filled", type: 'status', status: 'pass' },
    { text: "Supporting documents verification", type: 'status', status: 'fail' },
    { text: "Step 2: Confirming Eligibility", type: 'action' },
    { text: "Business meets size requirements", type: 'status', status: 'pass' },
    { text: "Industry type eligibility check", type: 'status', status: 'pass' },
    { text: "Step 3: Document Verification", type: 'action' },
    { text: "Business registration verification", type: 'status', status: 'pass' },
    { text: "Tax returns consistency check", type: 'status', status: 'fail' },
    { text: "Step 4: Credit Assessment", type: 'action' },
    { text: "Credit score evaluation: 720", type: 'status', status: 'pass' },
    { text: "Credit history review", type: 'status', status: 'pass' },
    { text: "Step 5: Loan Pre-Approval Evaluation", type: 'action' },
    { text: "Debt-to-Income ratio analysis: 32%", type: 'status', status: 'pass' },
    { text: "Cash flow analysis", type: 'status', status: 'pass' },
    { text: "Sarah, I've completed the review of application #100283393. We have two issues that need attention:", type: 'agent' },
    { text: "1. Missing supporting documents\n2. Inconsistencies in tax returns", type: 'advice' },
    { text: "Would you like me to request these documents from the applicant?", type: 'agent' },
  ];

  useEffect(() => {
    const addMessage = (index: number) => {
      if (index < conversation.length) {
        setIsTyping(true);
        setTimeout(() => {
          setIsTyping(false);
          setMessages(prev => [...prev, conversation[index]]);
          setTimeout(() => {
            addMessage(index + 1);
            if (scrollRef.current) {
              scrollRef.current.scrollIntoView({ behavior: 'smooth' });
            }
          }, 1000);
        }, 2000);
      }
    };

    addMessage(0);
  }, []);

  const getIcon = (type: string, text: string, status?: string) => {
    if (status === 'pass') return <Check className="w-5 h-5 text-green-500" />;
    if (status === 'fail') return <X className="w-5 h-5 text-red-500" />;
    if (text.includes("Step 1")) return <FileCheck className="w-5 h-5 text-blue-500" />;
    if (text.includes("Step 2")) return <FileCheck className="w-5 h-5 text-purple-500" />;
    if (text.includes("Step 3")) return <ScrollText className="w-5 h-5 text-orange-500" />;
    if (text.includes("Step 4")) return <CreditCard className="w-5 h-5 text-indigo-500" />;
    if (text.includes("Step 5")) return <ChartBar className="w-5 h-5 text-teal-500" />;
    return null;
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputMessage.trim()) {
      setMessages(prev => [...prev, { text: inputMessage, type: 'agent' }]);
      setInputMessage('');
      if (scrollRef.current) {
        scrollRef.current.scrollIntoView({ behavior: 'smooth' });
      }
    }
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
          
          <ScrollArea className="h-[400px] pr-4 mb-4">
            <div className="space-y-4">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`animate-fade-in [animation-delay:${index * 200}ms] ${
                    message.type === 'action' ? 'pl-4 text-gray-600 border-l-2 border-blue-500 flex items-center gap-2' :
                    message.type === 'advice' ? 'bg-blue-50 p-4 rounded-lg ml-4' :
                    message.type === 'internal' ? 'bg-purple-50 p-4 rounded-lg' :
                    message.type === 'status' ? `pl-4 ${message.status === 'pass' ? 'text-green-600' : 'text-red-600'} flex items-center gap-2` : ''
                  }`}
                >
                  {getIcon(message.type, message.text, message.status)}
                  <p className={message.type === 'status' ? (message.status === 'pass' ? 'text-green-600' : 'text-red-600') : 'text-gray-900'}>
                    {message.text}
                  </p>
                </div>
              ))}
              {isTyping && (
                <div className="flex gap-2 animate-pulse">
                  <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                  <span className="w-2 h-2 bg-blue-500 rounded-full [animation-delay:200ms]"></span>
                  <span className="w-2 h-2 bg-blue-500 rounded-full [animation-delay:400ms]"></span>
                </div>
              )}
              <div ref={scrollRef} />
            </div>
          </ScrollArea>

          <form onSubmit={handleSendMessage} className="flex gap-2 mt-4">
            <Textarea
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              placeholder="Type your message..."
              className="min-h-[50px] resize-none"
            />
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors flex items-center gap-2"
              disabled={!inputMessage.trim()}
            >
              <Send size={16} />
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoanConsultant;