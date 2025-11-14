import { NavLink } from "@/components/NavLink";
import { Shield } from "lucide-react";

const Navigation = () => {
  return (
    <nav className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <NavLink to="/" className="flex items-center gap-2 text-xl font-bold text-foreground hover:text-primary transition-colors">
            <Shield className="w-6 h-6 text-primary" />
            <span>SafeText AI</span>
          </NavLink>
          
          <div className="flex items-center gap-6">
            <NavLink 
              to="/" 
              className="text-muted-foreground hover:text-foreground transition-colors"
              activeClassName="text-primary font-medium"
            >
              Home
            </NavLink>
            <NavLink 
              to="/samples" 
              className="text-muted-foreground hover:text-foreground transition-colors"
              activeClassName="text-primary font-medium"
            >
              Samples
            </NavLink>
            <NavLink 
              to="/implementation" 
              className="text-muted-foreground hover:text-foreground transition-colors"
              activeClassName="text-primary font-medium"
            >
              Implementation
            </NavLink>
            <NavLink 
              to="/results" 
              className="text-muted-foreground hover:text-foreground transition-colors"
              activeClassName="text-primary font-medium"
            >
              Results
            </NavLink>
            <NavLink 
              to="/api" 
              className="text-muted-foreground hover:text-foreground transition-colors"
              activeClassName="text-primary font-medium"
            >
              API
            </NavLink>
            <NavLink 
              to="/team" 
              className="text-muted-foreground hover:text-foreground transition-colors"
              activeClassName="text-primary font-medium"
            >
              Team
            </NavLink>
            <NavLink 
              to="/contact" 
              className="text-muted-foreground hover:text-foreground transition-colors"
              activeClassName="text-primary font-medium"
            >
              Contact
            </NavLink>
            <NavLink 
              to="/about" 
              className="text-muted-foreground hover:text-foreground transition-colors"
              activeClassName="text-primary font-medium"
            >
              About Us
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
