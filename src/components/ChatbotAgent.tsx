import React, { useEffect, useState } from 'react';
import { MessageCircle } from 'lucide-react';

const ChatbotAgent = () => {
  const [isTyping, setIsTyping] = useState(false);
  const [message, setMessage] = useState('');
  const messages = [
    "Hello! I'm your Finexus agent.",
    "Need help with lending solutions?",
    "Let me assist you with collections.",
  ];

  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      setIsTyping(true);
      setMessage(messages[currentIndex]);
      currentIndex = (currentIndex + 1) % messages.length;
      
      setTimeout(() => setIsTyping(false), 2000);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative animate-float">
      <div className="absolute -top-16 right-0 bg-white p-4 rounded-lg shadow-lg max-w-xs">
        {isTyping ? (
          <div className="flex gap-2">
            <span className="w-2 h-2 bg-primary rounded-full animate-bounce"></span>
            <span className="w-2 h-2 bg-primary rounded-full animate-bounce [animation-delay:0.2s]"></span>
            <span className="w-2 h-2 bg-primary rounded-full animate-bounce [animation-delay:0.4s]"></span>
          </div>
        ) : (
          <p className="text-secondary">{message}</p>
        )}
      </div>
      <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center shadow-lg">
        <MessageCircle className="w-8 h-8 text-white" />
      </div>
    </div>
  );
};

export default ChatbotAgent;