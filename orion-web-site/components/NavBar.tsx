import Button from "./ui/button";
import orionLogo from "../img/orion-horizontal.png";
import { Sun, Moon } from "lucide-react";

type Theme = "light" | "dark";

interface NavbarProps {
  onNavigate?: (page: string) => void;
  onToggleTheme: () => void;
  theme: Theme;
  currentPage?: string; 
}

const navLinks = [
  { path: "#recursos", label: "Recursos" },
  { path: "#como-funciona", label: "Como Funciona" },
  { path: "#beneficios", label: "Benefícios" },
  { path: "#contato", label: "Contato" },
];

const Navbar = ({ onNavigate, onToggleTheme, theme, currentPage }: NavbarProps) => {
  const isDark = theme === "dark";
  const isSocial = currentPage === "rede-social";

  const navBg = isDark
    ? "bg-background/80 text-foreground border-border"
    : "bg-white/90 text-foreground border-gray-200";

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-lg border-b ${navBg} ${
        isSocial ? "group py-1" : ""
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`flex items-center justify-between gap-6 overflow-hidden transition-all duration-300 origin-top ${
            isSocial ? "max-h-0 group-hover:max-h-20 group-hover:py-2" : "h-16"
          }`}
        >
          <div className="flex items-center gap-2 flex-shrink-0">
            <div className="h-10 rounded-lg overflow-hidden shadow-primary">
              <img
                src={orionLogo}
                alt="Orion"
                className="h-full w-auto object-contain"
              />
            </div>
            <span className="text-lg font-semibold tracking-tight bg-gradient-primary bg-clip-text text-transparent">
              Orion
            </span>
          </div>

          {!isSocial && (
            <div className="hidden md:flex flex-1 items-center justify-center gap-6 text-sm font-medium">
              {navLinks.map((link) => (
                <a
                  key={link.path}
                  href={link.path}
                  className="hover:text-primary transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          )}

          <div className="flex items-center gap-3 flex-shrink-0">
            <button
              type="button"
              onClick={onToggleTheme}
              aria-label="Alternar tema"
              className="p-2 rounded-md hover:bg-muted"
            >
              {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>

            {isSocial ? (
              <Button onClick={() => onNavigate?.("landing")}>
                Voltar página principal
              </Button>
            ) : (
              <Button onClick={() => onNavigate?.("nova")}>
                Começar Agora
              </Button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
