import React from 'react';
import { Bot, FileText, Settings, MessageSquare, ArrowRight } from 'lucide-react';

const AnimatedHero = () => {
  return (
    <div className="relative w-full max-w-6xl mx-auto min-h-[600px] md:h-[800px] my-8 md:my-12">
      {/* Center content */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center z-10 w-full px-4 md:px-0">
        <h1 className="text-3xl md:text-6xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent">
          We are lending AI
        </h1>
        <p className="text-base md:text-xl text-gray-600 mb-6 md:mb-8 max-w-2xl mx-auto">
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

      {/* New Graphic Section */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-4xl px-4 md:px-0">
        <div className="relative bg-gradient-to-br from-primary/10 to-primary/5 rounded-3xl p-8 backdrop-blur-sm border border-white/20 shadow-glass">
          {/* Robot Character */}
          <div className="absolute -top-20 left-8 animate-float">
            <div className="relative w-32 h-32 md:w-40 md:h-40">
              <div className="absolute inset-0 bg-gradient-to-br from-primary to-primary/80 rounded-full opacity-20 animate-pulse"></div>
              <Bot className="w-full h-full text-primary p-6" />
            </div>
          </div>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-16">
            {[
              { title: 'Loan Processing', icon: FileText },
              { title: 'Risk Assessment', icon: Settings },
              { title: 'Customer Support', icon: MessageSquare }
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-white/80 p-6 rounded-xl hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer group"
              >
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <span className="font-medium text-gray-800">{feature.title}</span>
                  <ArrowRight className="w-4 h-4 ml-auto text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>
            ))}
          </div>

          {/* Connecting Lines */}
          <svg className="absolute inset-0 w-full h-full" style={{ zIndex: -1 }}>
            <path
              d="M100 100 L400 300 L700 100"
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