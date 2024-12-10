import React from 'react';
import { Link } from 'react-router-dom';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const Navigation = () => {
  return (
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
  );
};

export default Navigation;