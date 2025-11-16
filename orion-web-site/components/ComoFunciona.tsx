import Card from "./ui/card";
import orionLogo from "../img/orion-horizontal.png";
import { Camera, Cpu, BarChart3, Lightbulb } from "lucide-react";

const steps = [
  {
    icon: Camera,
    title: "Captura",
    description: "Câmeras discretas capturam expressões faciais e linguagem corporal dos estudantes durante as aulas.",
    step: "01",
  },
  {
    icon: Cpu,
    title: "Processamento IA",
    description: "Algoritmos de deep learning analisam os dados em tempo real, identificando emoções e padrões comportamentais.",
    step: "02",
  },
  {
    icon: BarChart3,
    title: "Análise de Dados",
    description: "Sistema processa e correlaciona informações para gerar insights sobre engajamento, dificuldades e tendências.",
    step: "03",
  },
  {
    icon: Lightbulb,
    title: "Insights Acionáveis",
    description: "Relatórios detalhados e recomendações personalizadas para professores e gestores educacionais.",
    step: "04",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-24 bg-gradient-subtle relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <img src={orionLogo} alt="" className="w-full h-full object-cover" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            Como o{" "}
            <span className="bg-gradient-to-r from-[#00b4ff] to-[#8b5cf6] bg-clip-text text-transparent">
              Orion
            </span>{" "}
            Funciona
          </h2>
          <p className="text-xl text-muted-foreground">
            Um processo simples e não invasivo que transforma dados visuais em insights educacionais valiosos
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="relative">
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-20 left-[60%] w-full h-0.5 bg-gradient-to-r from-primary to-secondary" />
                )}
                
                <Card className="p-6 text-center relative hover:shadow-card transition-all duration-300 bg-card/50 backdrop-blur">
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center text-white font-bold text-lg shadow-primary">
                    {step.step}
                  </div>
                  
                  <div className="mt-8 mb-4 flex justify-center">
                    <div className="w-16 h-16 rounded-full bg-gradient-glow flex items-center justify-center">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                  <p className="text-muted-foreground text-sm">{step.description}</p>
                </Card>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
