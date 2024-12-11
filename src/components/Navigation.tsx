import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="relative">
      {/* Mobile menu button */}
      <button 
        className="md:hidden p-2 text-secondary"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile menu */}
      {isOpen && (
        <div className="absolute top-full left-0 right-0 bg-white shadow-lg rounded-lg p-4 md:hidden">
          <div className="flex flex-col space-y-4">
            <Link to="/" className="hover:text-primary transition-colors" onClick={() => setIsOpen(false)}>
              Home
            </Link>
            <Link to="/solutions" className="hover:text-primary transition-colors" onClick={() => setIsOpen(false)}>
              Solutions
            </Link>
            <Link to="/about" className="hover:text-primary transition-colors" onClick={() => setIsOpen(false)}>
              About Us
            </Link>
            <Link to="/contact" className="hover:text-primary transition-colors" onClick={() => setIsOpen(false)}>
              Contact
            </Link>
          </div>
        </div>
      )}

      {/* Desktop menu */}
      <div className="hidden md:flex space-x-8">
        <Link to="/" className="hover:text-primary transition-colors">
          Home
        </Link>
        <Link to="/solutions" className="hover:text-primary transition-colors">
          Solutions
        </Link>
        <Link to="/about" className="hover:text-primary transition-colors">
          About Us
        </Link>
        <Link to="/contact" className="hover:text-primary transition-colors">
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default Navigation;