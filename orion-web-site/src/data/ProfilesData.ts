export interface Experience {
  empresa: string;
  cargo: string;
  inicio: string;
  fim: string;
  descricao: string;
}

export interface Education {
  curso: string;
  instituicao: string;
  ano: number;
}

export interface Project {
  titulo: string;
  link: string;
  descricao: string;
}

export interface Language {
  idioma: string;
  nivel: string;
}

export interface Profile {
  id: number;
  nome: string;
  foto: string;
  cargo: string;
  resumo: string;
  localizacao: string;
  area: string;
  habilidadesTecnicas: string[];
  softSkills: string[];
  experiencias: Experience[];
  formacao: Education[];
  projetos: Project[];
  certificacoes: string[];
  idiomas: Language[];
  areaInteresses: string[];
}

export const profiles: Profile[] = [
  {
    id: 1,
    nome: "Ana Silva Costa",
    foto: "/placeholder.svg",
    cargo: "Engenheira de Machine Learning",
    resumo: "Especialista em IA aplicada à educação e análise de sentimentos com 5+ anos de experiência",
    localizacao: "São Paulo/SP",
    area: "Inteligência Artificial",
    habilidadesTecnicas: ["Python", "TensorFlow", "PyTorch", "Computer Vision", "NLP"],
    softSkills: ["Liderança", "Comunicação", "Resolução de problemas"],
    experiencias: [
      {
        empresa: "Tech Education Labs",
        cargo: "Senior ML Engineer",
        inicio: "2022-03",
        fim: "2024-12",
        descricao: "Desenvolvimento de sistemas de reconhecimento de emoções para ambientes educacionais"
      }
    ],
    formacao: [
      {
        curso: "MSc em Ciência de Dados",
        instituicao: "USP",
        ano: 2021
      }
    ],
    projetos: [
      {
        titulo: "Sistema de Detecção de Engajamento",
        link: "https://github.com/example",
        descricao: "Plataforma para análise de engajamento estudantil usando visão computacional"
      }
    ],
    certificacoes: ["AWS Certified ML Specialist", "TensorFlow Developer Certificate"],
    idiomas: [
      { idioma: "Português", nivel: "Nativo" },
      { idioma: "Inglês", nivel: "Avançado" }
    ],
    areaInteresses: ["IA Ética", "Educação", "Computer Vision"]
  },
  {
    id: 2,
    nome: "Carlos Mendes Oliveira",
    foto: "/placeholder.svg",
    cargo: "Psicólogo Educacional",
    resumo: "Especialista em comportamento estudantil e saúde mental universitária",
    localizacao: "Rio de Janeiro/RJ",
    area: "Psicologia",
    habilidadesTecnicas: ["Análise Comportamental", "SPSS", "R", "Avaliação Psicológica"],
    softSkills: ["Empatia", "Escuta ativa", "Análise crítica"],
    experiencias: [
      {
        empresa: "Universidade Federal do Rio",
        cargo: "Psicólogo Senior",
        inicio: "2020-01",
        fim: "2024-12",
        descricao: "Atendimento e pesquisa sobre bem-estar estudantil"
      }
    ],
    formacao: [
      {
        curso: "Doutorado em Psicologia Educacional",
        instituicao: "UFRJ",
        ano: 2019
      }
    ],
    projetos: [
      {
        titulo: "Estudo sobre Timidez Acadêmica",
        link: "https://research.example.com",
        descricao: "Pesquisa longitudinal sobre impacto da timidez no desempenho acadêmico"
      }
    ],
    certificacoes: ["Registro CRP", "Especialização em Terapia Cognitivo-Comportamental"],
    idiomas: [
      { idioma: "Português", nivel: "Nativo" },
      { idioma: "Inglês", nivel: "Intermediário" }
    ],
    areaInteresses: ["Saúde Mental", "Desenvolvimento Acadêmico", "Inteligência Emocional"]
  },
  {
    id: 3,
    nome: "Beatriz Santos",
    foto: "/placeholder.svg",
    cargo: "Desenvolvedora Full Stack",
    resumo: "Desenvolvedora com foco em aplicações educacionais e dashboards analíticos",
    localizacao: "Belo Horizonte/MG",
    area: "Desenvolvimento",
    habilidadesTecnicas: ["React", "Node.js", "PostgreSQL", "TypeScript", "Docker"],
    softSkills: ["Trabalho em equipe", "Adaptabilidade", "Criatividade"],
    experiencias: [
      {
        empresa: "EduTech Solutions",
        cargo: "Full Stack Developer",
        inicio: "2021-06",
        fim: "2024-12",
        descricao: "Desenvolvimento de plataformas para gestão educacional"
      }
    ],
    formacao: [
      {
        curso: "Bacharelado em Ciência da Computação",
        instituicao: "UFMG",
        ano: 2020
      }
    ],
    projetos: [
      {
        titulo: "Dashboard Analytics",
        link: "https://example.com/dashboard",
        descricao: "Sistema de visualização de métricas educacionais em tempo real"
      }
    ],
    certificacoes: ["AWS Cloud Practitioner", "React Professional Certificate"],
    idiomas: [
      { idioma: "Português", nivel: "Nativo" },
      { idioma: "Inglês", nivel: "Avançado" },
      { idioma: "Espanhol", nivel: "Básico" }
    ],
    areaInteresses: ["EdTech", "Data Visualization", "UX Design"]
  },
  {
    id: 4,
    nome: "Daniel Rodrigues Lima",
    foto: "/placeholder.svg",
    cargo: "Cientista de Dados",
    resumo: "Especialista em análise preditiva e modelagem estatística para educação",
    localizacao: "Brasília/DF",
    area: "Data Science",
    habilidadesTecnicas: ["Python", "SQL", "Machine Learning", "Tableau", "Spark"],
    softSkills: ["Pensamento analítico", "Comunicação", "Colaboração"],
    experiencias: [
      {
        empresa: "DataEdu Analytics",
        cargo: "Data Scientist",
        inicio: "2022-01",
        fim: "2024-12",
        descricao: "Análise de tendências educacionais e desenvolvimento de modelos preditivos"
      }
    ],
    formacao: [
      {
        curso: "MSc em Estatística",
        instituicao: "UnB",
        ano: 2021
      }
    ],
    projetos: [
      {
        titulo: "Predição de Desempenho Acadêmico",
        link: "https://github.com/example/predictor",
        descricao: "Modelo para identificar alunos em risco de evasão"
      }
    ],
    certificacoes: ["Google Data Analytics Professional", "Microsoft Azure Data Scientist"],
    idiomas: [
      { idioma: "Português", nivel: "Nativo" },
      { idioma: "Inglês", nivel: "Fluente" }
    ],
    areaInteresses: ["Análise Preditiva", "Educação", "Big Data"]
  },
  {
    id: 5,
    nome: "Fernanda Almeida",
    foto: "/placeholder.svg",
    cargo: "Designer UX/UI",
    resumo: "Designer focada em experiências educacionais acessíveis e inclusivas",
    localizacao: "Curitiba/PR",
    area: "Design",
    habilidadesTecnicas: ["Figma", "Adobe XD", "User Research", "Prototyping", "Design Systems"],
    softSkills: ["Criatividade", "Empatia", "Atenção aos detalhes"],
    experiencias: [
      {
        empresa: "Innovation Design Studio",
        cargo: "Senior UX Designer",
        inicio: "2020-08",
        fim: "2024-12",
        descricao: "Criação de interfaces para plataformas educacionais"
      }
    ],
    formacao: [
      {
        curso: "Bacharelado em Design Gráfico",
        instituicao: "UFPR",
        ano: 2019
      }
    ],
    projetos: [
      {
        titulo: "Sistema de Design Educacional",
        link: "https://figma.com/example",
        descricao: "Design system completo para aplicações EdTech"
      }
    ],
    certificacoes: ["Google UX Design Professional Certificate", "Nielsen Norman Group UX Certification"],
    idiomas: [
      { idioma: "Português", nivel: "Nativo" },
      { idioma: "Inglês", nivel: "Avançado" }
    ],
    areaInteresses: ["Acessibilidade", "Design Inclusivo", "EdTech"]
  },
  {
    id: 6,
    nome: "Gabriel Torres",
    foto: "/placeholder.svg",
    cargo: "Engenheiro de Visão Computacional",
    resumo: "Especialista em processamento de imagens e reconhecimento facial para análise comportamental",
    localizacao: "Campinas/SP",
    area: "Tecnologia",
    habilidadesTecnicas: ["OpenCV", "Python", "C++", "Deep Learning", "CUDA"],
    softSkills: ["Inovação", "Resiliência", "Pensamento crítico"],
    experiencias: [
      {
        empresa: "VisionTech Labs",
        cargo: "Computer Vision Engineer",
        inicio: "2021-03",
        fim: "2024-12",
        descricao: "Desenvolvimento de algoritmos de detecção facial e análise de expressões"
      }
    ],
    formacao: [
      {
        curso: "Engenharia de Computação",
        instituicao: "UNICAMP",
        ano: 2020
      }
    ],
    projetos: [
      {
        titulo: "FaceEmotion Recognition",
        link: "https://github.com/example/faceemotion",
        descricao: "Sistema de reconhecimento de emoções em tempo real"
      }
    ],
    certificacoes: ["NVIDIA Deep Learning Institute Certificate"],
    idiomas: [
      { idioma: "Português", nivel: "Nativo" },
      { idioma: "Inglês", nivel: "Fluente" }
    ],
    areaInteresses: ["Computer Vision", "Deep Learning", "Emoções Artificiais"]
  }
];
