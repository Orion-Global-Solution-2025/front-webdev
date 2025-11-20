import Button from "./ui/button";
import { ArrowRight, Mail } from "lucide-react";

const ComponenteAcao = () => {
  return (
    <section
      id="contato"
      className="py-24 bg-gradient-primary relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-4xl md:text-6xl font-bold text-white">
            Pronto para Transformar sua Instituição?
          </h2>
          
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Junte-se às universidades líderes que já estão usando Orion para criar experiências educacionais excepcionais baseadas em dados emocionais.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button 
              size="lg" 
              variant="outline" 
              className="bg-white text-primary hover:bg-white/90 border-0 group shadow-glow"
            >
              Solicitar Demonstração
              <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button 
              size="lg" 
              variant="ghost" 
              className="text-white hover:bg-white/10 border-2 border-white/30"
            >
              <Mail className="mr-2" />
              Falar com Especialista
            </Button>
          </div>

          <div className="pt-8 flex flex-wrap justify-center gap-8 text-white/80 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-white" />
              <span>Implementação rápida</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-white" />
              <span>Suporte especializado</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-white" />
              <span>Sem contratos longos</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComponenteAcao;
