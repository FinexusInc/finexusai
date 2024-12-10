import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

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
      <NavigationMenu className="hidden md:flex">
        <NavigationMenuList>
          <NavigationMenuItem>
            <Link to="/" className="px-4 py-2 hover:text-primary transition-colors">
              Home
            </Link>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuTrigger>Solutions</NavigationMenuTrigger>
            <NavigationMenuContent>
              <div className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2">
                <div className="space-y-2">
                  <h4 className="font-medium leading-none">Loan Origination</h4>
                  <p className="text-sm text-muted-foreground">
                    AI-powered loan application processing and decisioning
                  </p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-medium leading-none">Loan Management</h4>
                  <p className="text-sm text-muted-foreground">
                    Automated portfolio monitoring and servicing
                  </p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-medium leading-none">Collections</h4>
                  <p className="text-sm text-muted-foreground">
                    Intelligent recovery and restructuring solutions
                  </p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-medium leading-none">Analytics</h4>
                  <p className="text-sm text-muted-foreground">
                    Advanced lending insights and reporting
                  </p>
                </div>
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <Link to="/about" className="px-4 py-2 hover:text-primary transition-colors">
              About Us
            </Link>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <Link to="/contact" className="px-4 py-2 hover:text-primary transition-colors">
              Contact
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </nav>
  );
};

export default Navigation;