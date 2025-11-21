import Card from "./ui/card";
import { GraduationCap, Users2, Building2 } from "lucide-react";

const benefits = [
  {
    icon: Building2,
    title: "Para Universidades",
    items: [
      "Melhoria na qualidade do ensino",
      "Retenção de alunos aumentada",
      "Dados para tomada de decisão estratégica",
      "Diferencial competitivo no mercado",
    ],
    color: "from-primary to-primary-glow",
  },
  {
    icon: GraduationCap,
    title: "Para Professores",
    items: [
      "Feedback em tempo real sobre aulas",
      "Identificação de alunos com dificuldades",
      "Ajuste dinâmico de metodologias",
      "Avaliação objetiva de desempenho",
    ],
    color: "from-secondary to-accent",
  },
  {
    icon: Users2,
    title: "Para Alunos",
    items: [
      "Ensino mais personalizado",
      "Suporte psicológico proativo",
      "Ambiente de aprendizado otimizado",
      "Desenvolvimento acadêmico acelerado",
    ],
    color: "from-accent to-secondary",
  },
];

const Benefits = () => {
  return (
    <section id="beneficios" className="py-24 bg-background relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-glow blur-3xl opacity-20" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            Benefícios para{" "}
            <span className="bg-gradient-to-r from-[#00b4ff] to-[#8b5cf6] bg-clip-text text-transparent">
              Todos
            </span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Uma solução que transforma a experiência educacional para toda a comunidade universitária
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <Card
                key={index}
                title={benefit.title}
                className="p-8 hover:shadow-card transition-all duration-300 hover:-translate-y-2 border-2"
              >
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${benefit.color} flex items-center justify-center mb-6 shadow-primary`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold mb-6">{benefit.title}</h3>
                
                <ul className="space-y-3">
                  {benefit.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
