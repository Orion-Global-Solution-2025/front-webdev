import Card from "./ui/card";
import { Brain, TrendingUp, Users, Star, Shield, Zap } from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "Análise de Emoções",
    description: "Detecção em tempo real de emoções como alegria, frustração, confusão e engajamento através de visão computacional avançada.",
    color: "text-primary",
  },
  {
    icon: TrendingUp,
    title: "Tendências de Aprendizado",
    description: "Identifique padrões de interesse e tendências nas áreas de estudo, ajudando a personalizar o conteúdo educacional.",
    color: "text-secondary",
  },
  {
    icon: Users,
    title: "Engajamento da Turma",
    description: "Monitore o nível de engajamento coletivo e individual durante as aulas para otimizar a metodologia de ensino.",
    color: "text-accent",
  },
  {
    icon: Star,
    title: "Avaliação de Professores",
    description: "Feedback objetivo sobre o desempenho docente baseado na resposta emocional dos estudantes.",
    color: "text-primary",
  },
  {
    icon: Shield,
    title: "Perfil Psicológico",
    description: "Avaliação não invasiva de características como timidez, ansiedade e confiança para suporte personalizado.",
    color: "text-secondary",
  },
  {
    icon: Zap,
    title: "Insights em Tempo Real",
    description: "Dashboards interativos com dados processados instantaneamente para tomada de decisão imediata.",
    color: "text-accent",
  },
];

const Features = () => {
    return (
    <section id="recursos" className="py-24 bg-background relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-glow blur-3xl opacity-30" />

<div className="container mx-auto px-4 relative z-10">
<div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
 <h2 className="text-4xl md:text-5xl font-bold">
 Recursos{" "}
 <span className="bg-gradient-to-r from-[#00b4ff] to-[#8b5cf6] bg-clip-text text-transparent">
 Poderosos
 </span>
 </h2>
 <p className="text-xl text-muted-foreground">
Tecnologia de ponta para transformar a experiência educacional através de dados emocionais e comportamentais
 </p>
 </div>

 <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
 {features.map((feature, index) => {
 const Icon = feature.icon;

 return (
<Card
 key={index}

 className="hover:shadow-card transition-all duration-300 hover:-translate-y-1 border-2 group"
                title={feature.title}
                
                icon={

                  <div className={`w-12 h-12 rounded-lg bg-gradient-glow flex items-center justify-center group-hover:scale-110 transition-transform`}>
                    <Icon className={`w-6 h-6 ${feature.color}`} />
                  </div>
                }
 >
                {feature.description}
              </Card>
 );
})}
 </div>
</div>
 </section>
 );
};

export default Features;