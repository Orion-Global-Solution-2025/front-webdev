import Button from "./ui/button";
import orionLogo from "../img/orion-horizontal.png";
import { Sun, Moon } from 'lucide-react';


const Navbar = ({ onNavigate, onToggleTheme, theme }) => {
  const isDark = theme === 'dark';
  const navBg = isDark ? 'bg-background/80 text-foreground border-border' : 'bg-white/90 text-foreground border-gray-200';
  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-lg border-b ${navBg}`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <div className="h-10 rounded-lg overflow-hidden shadow-primary">
              <img src={orionLogo} alt="Orion" className="h-full object-contain" />
            </div>
            <span className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              Orion
            </span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <a href="#recursos" className="text-foreground hover:text-primary transition-colors">
              Recursos
            </a>
            <a href="#como-funciona" className="text-foreground hover:text-primary transition-colors">
              Como Funciona
            </a>
            <a href="#beneficios" className="text-foreground hover:text-primary transition-colors">
              Benefícios
            </a>
            <a href="#contato" className="text-foreground hover:text-primary transition-colors">
              Contato
            </a>
          </div>
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={onToggleTheme}
              aria-label="Alternar tema"
              className="p-2 rounded-md text-foreground hover:bg-muted"
            >
              {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>

            <Button onClick={() => onNavigate("nova")}>
              Começar Agora
            </Button>
          </div>


        </div>
      </div>
    </nav>
  );
};

export default Navbar;