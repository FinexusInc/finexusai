import React from 'react';
import { Bot } from 'lucide-react';

const Logo = () => {
  return (
    <div className="flex items-center gap-2">
      <div className="relative">
        <Bot className="w-8 h-8 text-primary animate-float" />
        <div className="absolute -top-1 -right-1">
          <div className="w-3 h-3 bg-accent rounded-full" />
        </div>
      </div>
      <span className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
        Finexus
      </span>
    </div>
  );
};

export default Logo;