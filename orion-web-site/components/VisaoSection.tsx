import Button from "./ui/button";
import { Cpu, Github, ArrowRight } from "lucide-react";

type VisaoSectionProps = {
  onSeeHowWorks: () => void;
};

const VisaoSection = ({ onSeeHowWorks }: VisaoSectionProps) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-subtle">
      <div className="absolute inset-0 bg-gradient-glow opacity-50" />
      
      <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
    
          <div className="space-y-6 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-primary rounded-full text-white text-sm font-semibold">
              <Cpu className="w-4 h-4" />
              <span>Tecnologia Educacional IA</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              Entenda as{" "}
              <span className="bg-gradient-to-r from-[#00b4ff] to-[#8b5cf6] bg-clip-text text-transparent">
                emoções
              </span>{" "}
              dos seus alunos
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-xl">
              Orion usa visão computacional avançada para capturar emoções, engajamento e tendências comportamentais em tempo real no ambiente universitário.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button
                onClick={() =>
                  window.open(
                    "https://github.com/Orion-Global-Solution-2025/front-webdev.git",
                    "_blank",
                    "noopener,noreferrer"
                  )
                }
              >
                Link GitHub 
                <Github className="w-5 h-5 mr-2" />             
              </Button>
              <Button onClick={onSeeHowWorks}>
                Ver como funciona
                <ArrowRight className="group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>


            <div className="flex flex-wrap gap-8 pt-8 border-t border-border">
              <div>
                <div className="text-3xl font-bold bg-gradient-to-r from-[#00b4ff] to-[#0096d6] bg-clip-text text-transparent">95%</div>
                <div className="text-sm text-muted-foreground">Precisão</div>
              </div>
              <div>
                <div className="text-3xl font-bold bg-gradient-to-r from-[#0096d6] to-[#6b7aff] bg-clip-text text-transparent">10k+</div>
                <div className="text-sm text-muted-foreground">Alunos analisados</div>
              </div>
              <div>
                <div className="text-3xl font-bold bg-gradient-to-r from-[#6b7aff] to-[#8b5cf6] bg-clip-text text-transparent">50+</div>
                <div className="text-sm text-muted-foreground">Universidades</div>
              </div>
            </div>
          </div>

          <div className="relative lg:h-[600px] rounded-2xl overflow-hidden shadow-glow animate-fade-in-delayed">
            <video
              src="/videos/hero-gift.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            >
            </video>
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisaoSection;