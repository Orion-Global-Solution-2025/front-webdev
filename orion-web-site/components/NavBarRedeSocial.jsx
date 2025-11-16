import { NavLink } from "./NavLink";
import { Search } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <NavLink to="/" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-gradient-hero rounded-lg flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-lg">O</span>
          </div>
          <span className="text-xl font-bold text-foreground">Orion</span>
        </NavLink>
        
        <div className="flex items-center gap-6">
          <NavLink 
            to="/" 
            className="text-muted-foreground hover:text-foreground transition-colors"
            activeClassName="text-foreground font-medium"
          >
            Início
          </NavLink>
          <NavLink 
            to="/busca" 
            className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
            activeClassName="text-foreground font-medium"
          >
            <Search className="w-4 h-4" />
            Buscar Perfis
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
