import { NavLink } from "react-router-dom";
import { Shield } from "lucide-react";

const Navigation = () => {
  const baseClass =
    "text-muted-foreground hover:text-foreground transition-colors";
  const activeClass = "text-primary font-semibold";

  return (
    <nav className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">

          <NavLink
            to="/"
            className="flex items-center gap-2 text-xl font-bold text-foreground hover:text-primary transition-colors"
          >
            <Shield className="w-6 h-6 text-primary" />
            <span>IndicGuard</span>
          </NavLink>

          <div className="flex items-center gap-6">

            <NavLink to="/" className={({ isActive }) =>
              isActive ? activeClass : baseClass}>
              Home
            </NavLink>

            <NavLink to="/api" className={({ isActive }) =>
              isActive ? activeClass : baseClass}>
              API
            </NavLink>

            <NavLink to="/datasets" className={({ isActive }) =>
              isActive ? activeClass : baseClass}>
              Datasets
            </NavLink>

            <NavLink to="/experiments" className={({ isActive }) =>
              isActive ? activeClass : baseClass}>
              Experiments
            </NavLink>

            <NavLink to="/team" className={({ isActive }) =>
              isActive ? activeClass : baseClass}>
              Team
            </NavLink>

            <NavLink to="/contact" className={({ isActive }) =>
              isActive ? activeClass : baseClass}>
              Contact
            </NavLink>

          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
