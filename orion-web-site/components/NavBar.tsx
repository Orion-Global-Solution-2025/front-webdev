import Button from "./ui/button.jsx";
import orionLogo from "../img/orion-horizontal.png";


const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
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
          <Button >
            Começar Agora
          </Button>


        </div>
      </div>
    </nav>
  );
};

export default Navbar;