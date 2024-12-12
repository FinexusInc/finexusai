import React from 'react';
import { Bot, FileText, Settings, MessageSquare } from 'lucide-react';

const AnimatedHero = () => {
  return (
    <div className="relative w-full max-w-6xl mx-auto min-h-[400px] md:h-[600px] my-8 md:my-12">
      {/* Center content */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center z-10 w-full px-4 md:px-0">
        <h1 className="text-3xl md:text-6xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent">
          We are lending AI
        </h1>
        <p className="text-base md:text-xl text-gray-600 mb-6 md:mb-8">
          Faster Processing, Smarter Decision with Finexus AI
        </p>
        <div className="flex flex-col md:flex-row justify-center gap-4 md:gap-6">
          <button className="bg-gradient-to-r from-primary to-primary/80 text-white px-6 md:px-8 py-3 md:py-4 rounded-full hover:shadow-glass transition-all duration-300 hover:-translate-y-1">
            Book a demo
          </button>
          <button className="bg-gradient-glass backdrop-blur-sm border border-white/20 px-6 md:px-8 py-3 md:py-4 rounded-full hover:shadow-glass transition-all duration-300 hover:-translate-y-1 text-primary">
            How it works
          </button>
        </div>
      </div>

      {/* Floating elements */}
      <div className="absolute inset-0">
        {/* Top left */}
        <div className="absolute top-8 md:top-12 left-8 md:left-12 animate-float">
          <div className="bg-gradient-glass backdrop-blur-sm p-2 md:p-3 rounded-full shadow-glass border border-white/20">
            <MessageSquare className="w-4 h-4 md:w-6 md:h-6 text-primary" />
          </div>
        </div>

        {/* Top right */}
        <div className="absolute top-8 md:top-12 right-8 md:right-12 animate-float" style={{ animationDelay: '0.5s' }}>
          <div className="bg-gradient-glass backdrop-blur-sm p-2 md:p-3 rounded-full shadow-glass border border-white/20">
            <Settings className="w-4 h-4 md:w-6 md:h-6 text-primary" />
          </div>
        </div>

        {/* Bottom left */}
        <div className="absolute bottom-8 md:bottom-12 left-8 md:left-12 animate-float" style={{ animationDelay: '1s' }}>
          <div className="bg-gradient-glass backdrop-blur-sm p-2 md:p-3 rounded-full shadow-glass border border-white/20">
            <FileText className="w-4 h-4 md:w-6 md:h-6 text-primary" />
          </div>
        </div>

        {/* Bottom right */}
        <div className="absolute bottom-8 md:bottom-12 right-8 md:right-12 animate-float" style={{ animationDelay: '1.5s' }}>
          <div className="bg-gradient-glass backdrop-blur-sm p-2 md:p-3 rounded-full shadow-glass border border-white/20">
            <Bot className="w-4 h-4 md:w-6 md:h-6 text-primary" />
          </div>
        </div>

        {/* SVG connecting lines */}
        <svg className="absolute inset-0 w-full h-full" style={{ zIndex: -1 }}>
          <path
            d="M100 100 L400 300 L700 100"
            stroke="url(#gradient)"
            strokeWidth="2"
            fill="none"
            className="animate-draw hidden md:block"
          />
          <path
            d="M100 500 L400 300 L700 500"
            stroke="url(#gradient)"
            strokeWidth="2"
            fill="none"
            className="animate-draw hidden md:block"
          />
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0.1" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
};

export default AnimatedHero;