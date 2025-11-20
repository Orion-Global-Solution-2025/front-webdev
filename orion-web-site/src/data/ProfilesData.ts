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
    foto: "https://randomuser.me/api/portraits/women/1.jpg",
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
      { curso: "MSc em Ciência de Dados", instituicao: "USP", ano: 2021 }
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
    foto: "https://randomuser.me/api/portraits/men/2.jpg",
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
      { curso: "Doutorado em Psicologia Educacional", instituicao: "UFRJ", ano: 2019 }
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
    foto: "https://randomuser.me/api/portraits/women/3.jpg",
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
      { curso: "Bacharelado em Ciência da Computação", instituicao: "UFMG", ano: 2020 }
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
    foto: "https://randomuser.me/api/portraits/men/4.jpg",
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
      { curso: "MSc em Estatística", instituicao: "UnB", ano: 2021 }
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
    foto: "https://randomuser.me/api/portraits/women/5.jpg",
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
      { curso: "Bacharelado em Design Gráfico", instituicao: "UFPR", ano: 2019 }
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
    foto: "https://randomuser.me/api/portraits/men/6.jpg",
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
      { curso: "Engenharia de Computação", instituicao: "UNICAMP", ano: 2020 }
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
  },
    {
    id: 7,
    nome: "Luiza Nogueira Martins",
    foto: "https://randomuser.me/api/portraits/women/7.jpg",
    cargo: "Cientista de Aprendizagem",
    resumo: "Pesquisa padrões de engajamento e evasão em cursos híbridos.",
    localizacao: "Porto Alegre/RS",
    area: "Learning Analytics",
    habilidadesTecnicas: ["Python", "Pandas", "Power BI", "SQL", "Jupyter"],
    softSkills: ["Curiosidade", "Pensamento analítico", "Comunicação"],
    experiencias: [
      {
        empresa: "Instituto Aprender+",
        cargo: "Learning Data Scientist",
        inicio: "2021-02",
        fim: "2024-12",
        descricao: "Modelagem de risco de evasão e painéis de engajamento docente."
      }
    ],
    formacao: [
      { curso: "Engenharia de Produção", instituicao: "UFRGS", ano: 2019 }
    ],
    projetos: [
      {
        titulo: "Radar de Evasão",
        link: "https://github.com/example/radar-evasao",
        descricao: "Modelo preditivo para identificar alunos com risco alto de desligamento."
      }
    ],
    certificacoes: ["Power BI Data Analyst", "Formação em Learning Analytics"],
    idiomas: [
      { idioma: "Português", nivel: "Nativo" },
      { idioma: "Inglês", nivel: "Intermediário" }
    ],
    areaInteresses: ["Evasão", "Indicadores Acadêmicos", "Ensino Híbrido"]
  },
  {
    id: 8,
    nome: "Rafael Lima Barros",
    foto: "https://randomuser.me/api/portraits/men/8.jpg",
    cargo: "Engenheiro de Dados",
    resumo: "Constrói pipelines de dados educacionais em tempo real.",
    localizacao: "Recife/PE",
    area: "Engenharia de Dados",
    habilidadesTecnicas: ["Python", "Airflow", "Kafka", "Spark", "SQL"],
    softSkills: ["Organização", "Trabalho em equipe", "Resolução de problemas"],
    experiencias: [
      {
        empresa: "EdData Pipeline",
        cargo: "Data Engineer",
        inicio: "2020-05",
        fim: "2024-12",
        descricao: "Integração de dados de LMS, CRM e sistemas acadêmicos."
      }
    ],
    formacao: [
      { curso: "Ciência da Computação", instituicao: "UFPE", ano: 2018 }
    ],
    projetos: [
      {
        titulo: "Lago de Dados Acadêmicos",
        link: "https://github.com/example/edu-datalake",
        descricao: "Arquitetura de data lake para universidades multicampi."
      }
    ],
    certificacoes: ["Azure Data Engineer Associate", "DBT Fundamentals"],
    idiomas: [
      { idioma: "Português", nivel: "Nativo" },
      { idioma: "Inglês", nivel: "Avançado" }
    ],
    areaInteresses: ["Data Lake", "Streaming", "Qualidade de Dados"]
  },
  {
    id: 9,
    nome: "Isabela Rocha Farias",
    foto: "https://randomuser.me/api/portraits/women/9.jpg",
    cargo: "Product Manager EdTech",
    resumo: "Lidera produtos digitais voltados à experiência do aluno.",
    localizacao: "São Paulo/SP",
    area: "Gestão de Produto",
    habilidadesTecnicas: ["Product Discovery", "OKRs", "Roadmapping", "Figma"],
    softSkills: ["Visão de negócio", "Empatia", "Facilitação"],
    experiencias: [
      {
        empresa: "Campus Digital",
        cargo: "Product Manager",
        inicio: "2021-01",
        fim: "2024-12",
        descricao: "Gestão de plataforma omnichannel para relacionamento com alunos."
      }
    ],
    formacao: [
      { curso: "Administração", instituicao: "FGV", ano: 2017 }
    ],
    projetos: [
      {
        titulo: "App do Estudante 360",
        link: "https://example.com/app-estudante",
        descricao: "Aplicativo que integra notas, finanças e bem-estar do aluno."
      }
    ],
    certificacoes: ["CSPO", "Product Management para EdTech"],
    idiomas: [
      { idioma: "Português", nivel: "Nativo" },
      { idioma: "Inglês", nivel: "Fluente" }
    ],
    areaInteresses: ["Experiência do Aluno", "Onboarding", "Pesquisa com Usuários"]
  },
  {
    id: 10,
    nome: "Thiago Correia Souza",
    foto: "https://randomuser.me/api/portraits/men/10.jpg",
    cargo: "DevOps Engineer",
    resumo: "Garante que a infraestrutura das plataformas educacionais seja estável e escalável.",
    localizacao: "Florianópolis/SC",
    area: "DevOps",
    habilidadesTecnicas: ["Docker", "Kubernetes", "CI/CD", "Linux", "Terraform"],
    softSkills: ["Proatividade", "Colaboração", "Comunicação clara"],
    experiencias: [
      {
        empresa: "CloudCampus",
        cargo: "DevOps Engineer",
        inicio: "2019-09",
        fim: "2024-12",
        descricao: "Automação de deploys e monitoramento de APIs educacionais."
      }
    ],
    formacao: [
      { curso: "Sistemas de Informação", instituicao: "UFSC", ano: 2016 }
    ],
    projetos: [
      {
        titulo: "Plataforma Always-On",
        link: "https://github.com/example/always-on",
        descricao: "Infraestrutura resiliente para ambientes acadêmicos críticos."
      }
    ],
    certificacoes: ["CKA", "AWS SysOps Administrator"],
    idiomas: [
      { idioma: "Português", nivel: "Nativo" },
      { idioma: "Inglês", nivel: "Intermediário" }
    ],
    areaInteresses: ["Observabilidade", "SRE", "Automação"]
  },
  {
    id: 11,
    nome: "Marina Castro Azevedo",
    foto: "https://randomuser.me/api/portraits/women/11.jpg",
    cargo: "Pesquisadora em Inclusão Digital",
    resumo: "Estuda barreiras de acesso e inclusão em ambientes virtuais de aprendizagem.",
    localizacao: "Belém/PA",
    area: "Educação e Sociedade",
    habilidadesTecnicas: ["Metodologias Qualitativas", "Entrevistas", "Análise de Conteúdo"],
    softSkills: ["Escuta ativa", "Sensibilidade social", "Escrita acadêmica"],
    experiencias: [
      {
        empresa: "Instituto Amazônico de Educação",
        cargo: "Pesquisadora",
        inicio: "2018-04",
        fim: "2024-12",
        descricao: "Projetos sobre inclusão digital de estudantes ribeirinhos."
      }
    ],
    formacao: [
      { curso: "Pedagogia", instituicao: "UFPA", ano: 2015 }
    ],
    projetos: [
      {
        titulo: "Conectando Ribeiras",
        link: "https://research.example.com/conectando-ribeiras",
        descricao: "Estudo de soluções híbridas para ensino em regiões remotas."
      }
    ],
    certificacoes: ["Formação em Educação Inclusiva"],
    idiomas: [
      { idioma: "Português", nivel: "Nativo" },
      { idioma: "Inglês", nivel: "Leitura avançada" }
    ],
    areaInteresses: ["Inclusão Digital", "Políticas Públicas", "Educação Híbrida"]
  },
  {
    id: 12,
    nome: "João Pedro Cavalcanti",
    foto: "https://randomuser.me/api/portraits/men/12.jpg",
    cargo: "Analista de Suporte Acadêmico",
    resumo: "Ponte entre tecnologia e usuários em sistemas educacionais.",
    localizacao: "Fortaleza/CE",
    area: "Suporte Técnico",
    habilidadesTecnicas: ["SQL básico", "Service Desk", "Zendesk", "Odoo"],
    softSkills: ["Paciência", "Didática", "Orientação ao cliente"],
    experiencias: [
      {
        empresa: "Universidade Atlântico",
        cargo: "Analista de Suporte",
        inicio: "2020-01",
        fim: "2024-12",
        descricao: "Atendimento a professores e alunos em plataformas digitais."
      }
    ],
    formacao: [
      { curso: "Tecnologia em Redes de Computadores", instituicao: "IFCE", ano: 2018 }
    ],
    projetos: [
      {
        titulo: "Central de Ajuda Acadêmica",
        link: "https://example.com/helpcenter",
        descricao: "Base de conhecimento para dúvidas frequentes sobre plataformas."
      }
    ],
    certificacoes: ["ITIL Foundation"],
    idiomas: [
      { idioma: "Português", nivel: "Nativo" }
    ],
    areaInteresses: ["Experiência de Suporte", "Documentação", "Automação de Tickets"]
  },
  {
    id: 13,
    nome: "Paula Menezes Rios",
    foto: "https://randomuser.me/api/portraits/women/13.jpg",
    cargo: "Especialista em Avaliação Educacional",
    resumo: "Desenha instrumentos de avaliação alinhados a competências.",
    localizacao: "Salvador/BA",
    area: "Avaliação",
    habilidadesTecnicas: ["Teoria de Resposta ao Item", "SPSS", "Excel Avançado"],
    softSkills: ["Organização", "Pensamento crítico", "Comunicação escrita"],
    experiencias: [
      {
        empresa: "Centro de Avaliação Acadêmica",
        cargo: "Especialista",
        inicio: "2019-03",
        fim: "2024-12",
        descricao: "Criação de matrizes de competências e rubricas avaliativas."
      }
    ],
    formacao: [
      { curso: "Licenciatura em Matemática", instituicao: "UFBA", ano: 2016 }
    ],
    projetos: [
      {
        titulo: "Banco de Itens por Competência",
        link: "https://example.com/banco-itens",
        descricao: "Estruturação de banco de questões com métricas psicométricas."
      }
    ],
    certificacoes: ["Especialização em Avaliação Educacional"],
    idiomas: [
      { idioma: "Português", nivel: "Nativo" },
      { idioma: "Inglês", nivel: "Intermediário" }
    ],
    areaInteresses: ["Competências", "Avaliação Formativa", "Indicadores"]
  },
  {
    id: 14,
    nome: "Mateus Guimarães Prado",
    foto: "https://randomuser.me/api/portraits/men/14.jpg",
    cargo: "Desenvolvedor Mobile",
    resumo: "Cria aplicativos educacionais focados em microlearning.",
    localizacao: "São José dos Campos/SP",
    area: "Desenvolvimento Mobile",
    habilidadesTecnicas: ["React Native", "Expo", "TypeScript", "REST APIs"],
    softSkills: ["Criatividade", "Autonomia", "Comunicação"],
    experiencias: [
      {
        empresa: "PocketLearning",
        cargo: "Mobile Developer",
        inicio: "2021-07",
        fim: "2024-12",
        descricao: "Apps de trilhas curtas de aprendizagem para estudantes universitários."
      }
    ],
    formacao: [
      { curso: "Análise e Desenvolvimento de Sistemas", instituicao: "FATEC", ano: 2020 }
    ],
    projetos: [
      {
        titulo: "App Trilhas Rápidas",
        link: "https://github.com/example/trilhas-mobile",
        descricao: "Aplicativo com jornadas de estudo gamificadas."
      }
    ],
    certificacoes: ["React Native Developer"],
    idiomas: [
      { idioma: "Português", nivel: "Nativo" },
      { idioma: "Inglês", nivel: "Intermediário" }
    ],
    areaInteresses: ["Mobile Learning", "Gamificação", "UX Mobile"]
  },
  {
    id: 15,
    nome: "Camila Duarte Pires",
    foto: "https://randomuser.me/api/portraits/women/15.jpg",
    cargo: "Coordenadora de Tutoria Online",
    resumo: "Organiza equipes de tutores para cursos a distância.",
    localizacao: "Goiânia/GO",
    area: "Gestão Acadêmica",
    habilidadesTecnicas: ["Moodle", "Canvas", "Gestão de Equipes", "KPI Acadêmico"],
    softSkills: ["Liderança", "Empatia", "Organização"],
    experiencias: [
      {
        empresa: "Universidade Conecta",
        cargo: "Coordenadora de Tutoria",
        inicio: "2018-02",
        fim: "2024-12",
        descricao: "Gestão de tutores e acompanhamento de indicadores de participação."
      }
    ],
    formacao: [
      { curso: "Pedagogia", instituicao: "PUC Goiás", ano: 2015 }
    ],
    projetos: [
      {
        titulo: "Programa de Acolhimento EAD",
        link: "https://example.com/acolhimento-ead",
        descricao: "Estratégias de tutoria ativa nas primeiras semanas de curso."
      }
    ],
    certificacoes: ["MBA em Gestão de EAD"],
    idiomas: [
      { idioma: "Português", nivel: "Nativo" }
    ],
    areaInteresses: ["Tutoria", "EAD", "Engajamento Inicial"]
  },
  {
    id: 16,
    nome: "Leonardo Assis Moreira",
    foto: "https://randomuser.me/api/portraits/men/16.jpg",
    cargo: "Engenheiro de Segurança da Informação",
    resumo: "Protege dados sensíveis de alunos e pesquisas.",
    localizacao: "São Paulo/SP",
    area: "Segurança da Informação",
    habilidadesTecnicas: ["ISO 27001", "LGPD", "Pentest básico", "IAM"],
    softSkills: ["Atenção aos detalhes", "Pensamento crítico", "Comunicação"],
    experiencias: [
      {
        empresa: "SecureCampus",
        cargo: "Security Engineer",
        inicio: "2020-06",
        fim: "2024-12",
        descricao: "Implementação de políticas de segurança em ambientes acadêmicos."
      }
    ],
    formacao: [
      { curso: "Engenharia de Computação", instituicao: "Mackenzie", ano: 2017 }
    ],
    projetos: [
      {
        titulo: "LGPD na Prática Acadêmica",
        link: "https://github.com/example/lgpd-campus",
        descricao: "Guia e scripts de apoio à adequação de dados estudantis."
      }
    ],
    certificacoes: ["ISO 27001 Lead Implementer", "LGPD para Desenvolvedores"],
    idiomas: [
      { idioma: "Português", nivel: "Nativo" },
      { idioma: "Inglês", nivel: "Avançado" }
    ],
    areaInteresses: ["Privacidade", "Governança de Dados", "Segurança em Nuvem"]
  },
  {
    id: 17,
    nome: "Bruna Lopes Ferreira",
    foto: "https://randomuser.me/api/portraits/women/17.jpg",
    cargo: "Psicopedagoga Universitária",
    resumo: "Apoia estudantes com dificuldades de aprendizagem.",
    localizacao: "Campinas/SP",
    area: "Psicopedagogia",
    habilidadesTecnicas: ["Atendimento Clínico", "Psicopedagogia Institucional", "Entrevistas Devolutivas"],
    softSkills: ["Escuta ativa", "Empatia", "Comunicação"],
    experiencias: [
      {
        empresa: "Centro de Apoio ao Estudante",
        cargo: "Psicopedagoga",
        inicio: "2017-03",
        fim: "2024-12",
        descricao: "Atendimento individual e oficinas de estratégias de estudo."
      }
    ],
    formacao: [
      { curso: "Psicologia", instituicao: "PUC-Campinas", ano: 2014 }
    ],
    projetos: [
      {
        titulo: "Oficina de Hábitos de Estudo",
        link: "https://example.com/habitos-estudo",
        descricao: "Programa para calouros sobre organização e autogestão."
      }
    ],
    certificacoes: ["Especialização em Psicopedagogia"],
    idiomas: [
      { idioma: "Português", nivel: "Nativo" }
    ],
    areaInteresses: ["Neurociência", "Dificuldades de Aprendizagem", "Saúde Mental"]
  },
  {
    id: 18,
    nome: "Diego Alves Monteiro",
    foto: "https://randomuser.me/api/portraits/men/18.jpg",
    cargo: "Analista de BI",
    resumo: "Constrói dashboards para direção acadêmica e reitoria.",
    localizacao: "Rio de Janeiro/RJ",
    area: "Business Intelligence",
    habilidadesTecnicas: ["Power BI", "DAX", "SQL Server", "ETL"],
    softSkills: ["Comunicação", "Pensamento visual", "Trabalho em equipe"],
    experiencias: [
      {
        empresa: "Universidade Horizonte",
        cargo: "Analista de BI",
        inicio: "2019-08",
        fim: "2024-12",
        descricao: "Indicadores de retenção, ocupação de vagas e inadimplência."
      }
    ],
    formacao: [
      { curso: "Estatística", instituicao: "UERJ", ano: 2016 }
    ],
    projetos: [
      {
        titulo: "Painel Executivo da Reitoria",
        link: "https://example.com/painel-reitoria",
        descricao: "Visão 360º dos principais KPIs da universidade."
      }
    ],
    certificacoes: ["Microsoft Power BI Data Analyst"],
    idiomas: [
      { idioma: "Português", nivel: "Nativo" },
      { idioma: "Inglês", nivel: "Leitura avançada" }
    ],
    areaInteresses: ["Visualização de Dados", "Governança", "Planejamento Estratégico"]
  },
  {
    id: 19,
    nome: "Larissa Queiroz Silveira",
    foto: "https://randomuser.me/api/portraits/women/19.jpg",
    cargo: "Bibliotecária Digital",
    resumo: "Cuida de repositórios acadêmicos e acesso aberto.",
    localizacao: "Natal/RN",
    area: "Biblioteconomia",
    habilidadesTecnicas: ["Repositórios OAI-PMH", "Catalogação", "Curadoria de Conteúdo"],
    softSkills: ["Organização", "Atenção aos detalhes", "Trabalho em equipe"],
    experiencias: [
      {
        empresa: "Biblioteca Central Universitária",
        cargo: "Bibliotecária Digital",
        inicio: "2018-01",
        fim: "2024-12",
        descricao: "Gestão de acervo digital e apoio a pesquisadores."
      }
    ],
    formacao: [
      { curso: "Biblioteconomia", instituicao: "UFRN", ano: 2015 }
    ],
    projetos: [
      {
        titulo: "Repositório Aberto Campus",
        link: "https://example.com/repositorio",
        descricao: "Plataforma de acesso aberto a trabalhos e artigos."
      }
    ],
    certificacoes: ["Curadoria Digital"],
    idiomas: [
      { idioma: "Português", nivel: "Nativo" }
    ],
    areaInteresses: ["Acesso Aberto", "Dados de Pesquisa", "Direitos Autorais"]
  },
  {
    id: 20,
    nome: "Gustavo Faria Teles",
    foto: "https://randomuser.me/api/portraits/men/20.jpg",
    cargo: "Instrutor de Laboratório de IA",
    resumo: "Ajuda alunos a colocarem modelos em prática em projetos reais.",
    localizacao: "São Paulo/SP",
    area: "Ensino de Tecnologia",
    habilidadesTecnicas: ["Python", "Jupyter", "Git", "Machine Learning básico"],
    softSkills: ["Didática", "Paciência", "Mentoria"],
    experiencias: [
      {
        empresa: "LabTech Academy",
        cargo: "Instrutor de IA",
        inicio: "2021-02",
        fim: "2024-12",
        descricao: "Monitoria em projetos de visão computacional e NLP."
      }
    ],
    formacao: [
      { curso: "Engenharia Elétrica", instituicao: "USP", ano: 2020 }
    ],
    projetos: [
      {
        titulo: "Bootcamp de IA para Universitários",
        link: "https://github.com/example/bootcamp-ia",
        descricao: "Trilhas guiadas de IA aplicada ao contexto acadêmico."
      }
    ],
    certificacoes: ["Azure AI Fundamentals"],
    idiomas: [
      { idioma: "Português", nivel: "Nativo" },
      { idioma: "Inglês", nivel: "Intermediário" }
    ],
    areaInteresses: ["Ensino Prático", "Projetos Hands-on", "Comunidades Tech"]
  },
  {
    id: 21,
    nome: "Helena Prado Antunes",
    foto: "https://randomuser.me/api/portraits/women/21.jpg",
    cargo: "Coordenadora de Carreiras",
    resumo: "Conecta estudantes com oportunidades de estágio e emprego.",
    localizacao: "São Paulo/SP",
    area: "Carreira e Empregabilidade",
    habilidadesTecnicas: ["Planejamento de Carreira", "Parcerias Corporativas", "LinkedIn"],
    softSkills: ["Networking", "Comunicação", "Escuta ativa"],
    experiencias: [
      {
        empresa: "Centro de Carreiras Universitário",
        cargo: "Coordenadora",
        inicio: "2017-05",
        fim: "2024-12",
        descricao: "Programas de mentoria, feiras de carreira e trilhas de soft skills."
      }
    ],
    formacao: [
      { curso: "Psicologia", instituicao: "PUC-SP", ano: 2013 }
    ],
    projetos: [
      {
        titulo: "Programa Trajetórias",
        link: "https://example.com/trajetorias",
        descricao: "Apoio estruturado à transição universidade-mercado."
      }
    ],
    certificacoes: ["Coaching de Carreira"],
    idiomas: [
      { idioma: "Português", nivel: "Nativo" },
      { idioma: "Inglês", nivel: "Intermediário" }
    ],
    areaInteresses: ["Empregabilidade", "Mentoria", "Competências do Futuro"]
  },
  {
    id: 22,
    nome: "Igor Batista Fonseca",
    foto: "https://randomuser.me/api/portraits/men/22.jpg",
    cargo: "Administrador de Sistemas Acadêmicos",
    resumo: "Mantém sistemas de matrícula, notas e histórico funcionando sem parar.",
    localizacao: "Curitiba/PR",
    area: "Infraestrutura",
    habilidadesTecnicas: ["Linux", "PostgreSQL", "Backup", "Monitoramento"],
    softSkills: ["Responsabilidade", "Comunicação", "Trabalho em equipe"],
    experiencias: [
      {
        empresa: "Universidade do Sul",
        cargo: "Sysadmin Acadêmico",
        inicio: "2016-09",
        fim: "2024-12",
        descricao: "Administração de servidores de sistemas acadêmicos legado e novos."
      }
    ],
    formacao: [
      { curso: "Tecnologia em Redes de Computadores", instituicao: "UTFPR", ano: 2014 }
    ],
    projetos: [
      {
        titulo: "Migração para Nuvem Acadêmica",
        link: "https://example.com/migracao-nuvem",
        descricao: "Plano de migração gradual de sistemas para cloud."
      }
    ],
    certificacoes: ["Linux Professional Institute 1"],
    idiomas: [
      { idioma: "Português", nivel: "Nativo" }
    ],
    areaInteresses: ["Alta Disponibilidade", "Cloud", "Automação de Infra"]
  },
  {
    id: 23,
    nome: "Nathalia Souza Brito",
    foto: "https://randomuser.me/api/portraits/women/23.jpg",
    cargo: "Analista de Experiência do Estudante",
    resumo: "Mapeia jornadas e pontos de atrito na vida acadêmica.",
    localizacao: "Belo Horizonte/MG",
    area: "CX Acadêmico",
    habilidadesTecnicas: ["Mapeamento de Jornada", "Pesquisas NPS", "Design de Serviço"],
    softSkills: ["Empatia", "Comunicação", "Visão sistêmica"],
    experiencias: [
      {
        empresa: "Universidade Viva",
        cargo: "Analista de CX",
        inicio: "2020-03",
        fim: "2024-12",
        descricao: "Pesquisas de satisfação e melhoria da jornada do aluno."
      }
    ],
    formacao: [
      { curso: "Administração", instituicao: "UFMG", ano: 2018 }
    ],
    projetos: [
      {
        titulo: "Mapa da Jornada do Aluno",
        link: "https://example.com/jornada-aluno",
        descricao: "Visualização ponta a ponta da experiência acadêmica."
      }
    ],
    certificacoes: ["Customer Experience Management"],
    idiomas: [
      { idioma: "Português", nivel: "Nativo" }
    ],
    areaInteresses: ["CX", "Service Design", "Educação Centrada no Aluno"]
  },
  {
    id: 24,
    nome: "Pedro Henrique Vidal",
    foto: "https://randomuser.me/api/portraits/men/24.jpg",
    cargo: "Engenheiro de Software Backend",
    resumo: "Constrói APIs que conectam sistemas acadêmicos, financeiros e de engajamento.",
    localizacao: "São Paulo/SP",
    area: "Backend",
    habilidadesTecnicas: ["Node.js", "TypeScript", "PostgreSQL", "RabbitMQ", "Odoo"],
    softSkills: ["Organização", "Trabalho em equipe", "Resolução de problemas"],
    experiencias: [
      {
        empresa: "EduStack",
        cargo: "Backend Engineer",
        inicio: "2021-01",
        fim: "2024-12",
        descricao: "Integração de plataformas acadêmicas com CRM e billing."
      }
    ],
    formacao: [
      { curso: "Engenharia de Software", instituicao: "FIAP", ano: 2020 }
    ],
    projetos: [
      {
        titulo: "Hub de Integrações Acadêmicas",
        link: "https://github.com/example/edu-hub",
        descricao: "Camada única para integrações de sistemas universitários."
      }
    ],
    certificacoes: ["Node.js Professional"],
    idiomas: [
      { idioma: "Português", nivel: "Nativo" },
      { idioma: "Inglês", nivel: "Avançado" }
    ],
    areaInteresses: ["APIs", "Eventos", "Escalabilidade"]
  },
  {
    id: 25,
    nome: "Sofia Ramos Cardoso",
    foto: "https://randomuser.me/api/portraits/women/25.jpg",
    cargo: "Pesquisadora em Interação Humano-Computador",
    resumo: "Investiga como interfaces afetam a aprendizagem e o bem-estar.",
    localizacao: "São Paulo/SP",
    area: "IHC",
    habilidadesTecnicas: ["UX Research", "Entrevistas", "Testes de Usabilidade"],
    softSkills: ["Curiosidade", "Empatia", "Comunicação"],
    experiencias: [
      {
        empresa: "Laboratório de IHC Educacional",
        cargo: "Pesquisadora",
        inicio: "2019-02",
        fim: "2024-12",
        descricao: "Estudos sobre usabilidade de ambientes virtuais de aprendizagem."
      }
    ],
    formacao: [
      { curso: "Design Digital", instituicao: "Senac-SP", ano: 2017 }
    ],
    projetos: [
      {
        titulo: "Avaliação de AVA Inclusivo",
        link: "https://research.example.com/ava-inclusivo",
        descricao: "Pesquisa com foco em acessibilidade e carga cognitiva."
      }
    ],
    certificacoes: ["UX-PM Nível 2"],
    idiomas: [
      { idioma: "Português", nivel: "Nativo" },
      { idioma: "Inglês", nivel: "Intermediário" }
    ],
    areaInteresses: ["Acessibilidade", "Experiência do Usuário", "Neurodesign"]
  },
  {
    id: 26,
    nome: "André Luiz Neves",
    foto: "https://randomuser.me/api/portraits/men/26.jpg",
    cargo: "Coordenador de Pesquisa Institucional",
    resumo: "Conduz estudos internos e externos para apoiar decisões estratégicas.",
    localizacao: "São Paulo/SP",
    area: "Pesquisa Institucional",
    habilidadesTecnicas: ["SPSS", "R", "Questionários", "Análise Estatística"],
    softSkills: ["Rigor científico", "Comunicação", "Visão analítica"],
    experiencias: [
      {
        empresa: "Universidade Horizonte",
        cargo: "Coordenador de Pesquisa",
        inicio: "2016-01",
        fim: "2024-12",
        descricao: "Pesquisas de perfil discente, egresso e mercado."
      }
    ],
    formacao: [
      { curso: "Sociologia", instituicao: "USP", ano: 2012 }
    ],
    projetos: [
      {
        titulo: "Mapa de Egressos",
        link: "https://example.com/egressos",
        descricao: "Estudo longitudinal sobre trajetória de ex-alunos."
      }
    ],
    certificacoes: ["Métodos Quantitativos Aplicados"],
    idiomas: [
      { idioma: "Português", nivel: "Nativo" },
      { idioma: "Inglês", nivel: "Leitura avançada" }
    ],
    areaInteresses: ["Sociologia da Educação", "Mercado de Trabalho", "Egressos"]
  },
  {
    id: 27,
    nome: "Patrícia Oliveira Sampaio",
    foto: "https://randomuser.me/api/portraits/women/27.jpg",
    cargo: "Especialista em Marketing Educacional",
    resumo: "Planeja campanhas para atração e relacionamento com candidatos.",
    localizacao: "São Luís/MA",
    area: "Marketing",
    habilidadesTecnicas: ["Inbound Marketing", "Automação", "Google Analytics"],
    softSkills: ["Comunicação", "Criatividade", "Organização"],
    experiencias: [
      {
        empresa: "Universidade Norte",
        cargo: "Marketing Specialist",
        inicio: "2018-06",
        fim: "2024-12",
        descricao: "Funil de captação do lead até a matrícula."
      }
    ],
    formacao: [
      { curso: "Publicidade e Propaganda", instituicao: "UFMA", ano: 2015 }
    ],
    projetos: [
      {
        titulo: "Jornada do Vestibulando",
        link: "https://example.com/jornada-vestibulando",
        descricao: "Nutrição de leads baseada em comportamento e interesse."
      }
    ],
    certificacoes: ["Inbound Marketing", "Google Ads"],
    idiomas: [
      { idioma: "Português", nivel: "Nativo" }
    ],
    areaInteresses: ["Funil de Vendas", "Branding Educacional", "Conteúdo"]
  },
  {
    id: 28,
    nome: "Rodrigo Teixeira Campos",
    foto: "https://randomuser.me/api/portraits/men/28.jpg",
    cargo: "Arquiteto de Soluções",
    resumo: "Desenha a arquitetura completa de sistemas para ecossistemas universitários.",
    localizacao: "Brasília/DF",
    area: "Arquitetura de Software",
    habilidadesTecnicas: ["Microservices", "Event-Driven", "Cloud Architecture"],
    softSkills: ["Visão sistêmica", "Comunicação", "Liderança técnica"],
    experiencias: [
      {
        empresa: "EduCloud Solutions",
        cargo: "Solution Architect",
        inicio: "2017-04",
        fim: "2024-12",
        descricao: "Arquiteturas integradas para ERPs, LMS e APIs externas."
      }
    ],
    formacao: [
      { curso: "Engenharia de Computação", instituicao: "UnB", ano: 2013 }
    ],
    projetos: [
      {
        titulo: "Plataforma Integrada Campus",
        link: "https://github.com/example/campus-architecture",
        descricao: "Blueprint de referência para ambientes educacionais em nuvem."
      }
    ],
    certificacoes: ["AWS Solutions Architect", "TOGAF Foundation"],
    idiomas: [
      { idioma: "Português", nivel: "Nativo" },
      { idioma: "Inglês", nivel: "Fluente" }
    ],
    areaInteresses: ["Arquitetura em Nuvem", "Integrações", "Escalabilidade"]
  },
  {
    id: 29,
    nome: "Viviane Santos Correia",
    foto: "https://randomuser.me/api/portraits/women/29.jpg",
    cargo: "Analista de Finanças Educacionais",
    resumo: "Analisa inadimplência, bolsas e sustentabilidade financeira de cursos.",
    localizacao: "Curitiba/PR",
    area: "Finanças",
    habilidadesTecnicas: ["Excel Avançado", "Power BI", "Controladoria"],
    softSkills: ["Rigor", "Comunicação", "Organização"],
    experiencias: [
      {
        empresa: "Grupo Educacional Sul",
        cargo: "Financial Analyst",
        inicio: "2018-03",
        fim: "2024-12",
        descricao: "Análise de margem por curso, bolsa e perfil de aluno."
      }
    ],
    formacao: [
      { curso: "Ciências Contábeis", instituicao: "UFPR", ano: 2016 }
    ],
    projetos: [
      {
        titulo: "Painel de Inadimplência",
        link: "https://example.com/inadimplencia",
        descricao: "Dashboard com visões por curso, campus e faixa de atraso."
      }
    ],
    certificacoes: ["Controladoria e Finanças"],
    idiomas: [
      { idioma: "Português", nivel: "Nativo" }
    ],
    areaInteresses: ["Sustentabilidade Financeira", "Precificação", "Bolsas"]
  },
  {
    id: 30,
    nome: "Caio Vieira Lopes",
    foto: "https://randomuser.me/api/portraits/men/30.jpg",
    cargo: "Engenheiro de Dados em Tempo Real",
    resumo: "Trabalha com streams de eventos de comportamento estudantil.",
    localizacao: "Porto Alegre/RS",
    area: "Streaming Data",
    habilidadesTecnicas: ["Kafka", "Flink", "Python", "SQL"],
    softSkills: ["Resolução de problemas", "Trabalho em equipe", "Comunicação"],
    experiencias: [
      {
        empresa: "StreamEdu",
        cargo: "Real-Time Data Engineer",
        inicio: "2020-07",
        fim: "2024-12",
        descricao: "Pipelines em tempo real de interações em AVAs."
      }
    ],
    formacao: [
      { curso: "Engenharia de Computação", instituicao: "PUCRS", ano: 2018 }
    ],
    projetos: [
      {
        titulo: "Event Hub Educacional",
        link: "https://github.com/example/event-hub",
        descricao: "Plataforma de eventos unificados de sistemas acadêmicos."
      }
    ],
    certificacoes: ["Confluent Developer"],
    idiomas: [
      { idioma: "Português", nivel: "Nativo" },
      { idioma: "Inglês", nivel: "Intermediário" }
    ],
    areaInteresses: ["Eventos", "Streaming", "Analytics em Tempo Real"]
  },
  {
    id: 31,
    nome: "Júlia Amaral Furtado",
    foto: "https://randomuser.me/api/portraits/women/31.jpg",
    cargo: "Especialista em Gamificação",
    resumo: "Desenha mecânicas de jogo para aumentar engajamento em disciplinas.",
    localizacao: "São Paulo/SP",
    area: "Gamificação",
    habilidadesTecnicas: ["Game Design", "Storytelling", "Figma"],
    softSkills: ["Criatividade", "Empatia", "Comunicação"],
    experiencias: [
      {
        empresa: "PlayEdu",
        cargo: "Game Designer Educacional",
        inicio: "2019-01",
        fim: "2024-12",
        descricao: "Criação de mecânicas de pontos, níveis e missões em AVAs."
      }
    ],
    formacao: [
      { curso: "Design de Games", instituicao: "Anhembi Morumbi", ano: 2017 }
    ],
    projetos: [
      {
        titulo: "Missões da Calourada",
        link: "https://example.com/missoes-calouros",
        descricao: "Jornada gamificada para acolhimento de novos estudantes."
      }
    ],
    certificacoes: ["Gamification for Learning"],
    idiomas: [
      { idioma: "Português", nivel: "Nativo" },
      { idioma: "Inglês", nivel: "Intermediário" }
    ],
    areaInteresses: ["Game Thinking", "Motivação", "Engajamento"]
  },
  {
    id: 32,
    nome: "Henrique Dias Nascimento",
    foto: "https://randomuser.me/api/portraits/men/32.jpg",
    cargo: "Desenvolvedor Frontend",
    resumo: "Cria interfaces acessíveis e responsivas para sistemas acadêmicos.",
    localizacao: "São Paulo/SP",
    area: "Frontend",
    habilidadesTecnicas: ["React", "TypeScript", "Tailwind CSS", "Accessibility"],
    softSkills: ["Atenção aos detalhes", "Trabalho em equipe", "Comunicação"],
    experiencias: [
      {
        empresa: "Campus UI Studio",
        cargo: "Frontend Engineer",
        inicio: "2021-02",
        fim: "2024-12",
        descricao: "Componentes reutilizáveis para sistemas internos de universidade."
      }
    ],
    formacao: [
      { curso: "Sistemas de Informação", instituicao: "PUC-SP", ano: 2019 }
    ],
    projetos: [
      {
        titulo: "Design System Acadêmico",
        link: "https://github.com/example/edu-design-system",
        descricao: "Biblioteca de componentes acessíveis para produtos educacionais."
      }
    ],
    certificacoes: ["Web Accessibility Specialist"],
    idiomas: [
      { idioma: "Português", nivel: "Nativo" },
      { idioma: "Inglês", nivel: "Intermediário" }
    ],
    areaInteresses: ["Design System", "Acessibilidade", "Performance Web"]
  },
  {
    id: 33,
    nome: "Renata Silveira Porto",
    foto: "https://randomuser.me/api/portraits/women/33.jpg",
    cargo: "Coordenadora de Pós-Graduação",
    resumo: "Administra portfólio de cursos lato sensu e estudantes.",
    localizacao: "São Paulo/SP",
    area: "Gestão Acadêmica",
    habilidadesTecnicas: ["Gestão de Portfólio", "Regulação", "Planejamento"],
    softSkills: ["Liderança", "Comunicação", "Organização"],
    experiencias: [
      {
        empresa: "Instituto de Pós-Graduação",
        cargo: "Coordenadora",
        inicio: "2016-03",
        fim: "2024-12",
        descricao: "Lançamento e gestão de cursos de especialização."
      }
    ],
    formacao: [
      { curso: "Administração", instituicao: "USP", ano: 2011 }
    ],
    projetos: [
      {
        titulo: "Hub de Pós Digital",
        link: "https://example.com/hub-pos",
        descricao: "Modelo híbrido de oferta de pós-graduação."
      }
    ],
    certificacoes: ["MBA em Gestão Educacional"],
    idiomas: [
      { idioma: "Português", nivel: "Nativo" }
    ],
    areaInteresses: ["Pós-Graduação", "Regulação", "Novos Produtos"]
  },
  {
    id: 34,
    nome: "Marcelo Rocha Guedes",
    foto: "https://randomuser.me/api/portraits/men/34.jpg",
    cargo: "Consultor de ESG Acadêmico",
    resumo: "Ajuda instituições a alinhar sustentabilidade, impacto social e governança.",
    localizacao: "São Paulo/SP",
    area: "ESG",
    habilidadesTecnicas: ["Relatórios ESG", "ODS", "Engajamento de Stakeholders"],
    softSkills: ["Visão sistêmica", "Comunicação", "Articulação"],
    experiencias: [
      {
        empresa: "ImpactEdu",
        cargo: "Consultor ESG",
        inicio: "2019-01",
        fim: "2024-12",
        descricao: "Projetos de sustentabilidade em campus universitários."
      }
    ],
    formacao: [
      { curso: "Engenharia Ambiental", instituicao: "UFSCAR", ano: 2014 }
    ],
    projetos: [
      {
        titulo: "Campus Carbono Neutro",
        link: "https://example.com/campus-carbono",
        descricao: "Plano de transição ecológica para universidades."
      }
    ],
    certificacoes: ["ESG Practitioner"],
    idiomas: [
      { idioma: "Português", nivel: "Nativo" }
    ],
    areaInteresses: ["Sustentabilidade", "ODS", "Impacto Social"]
  },
  {
    id: 35,
    nome: "Talita Moura de Souza",
    foto: "https://randomuser.me/api/portraits/women/35.jpg",
    cargo: "Especialista em Dados de Bibliometria",
    resumo: "Mapeia produção científica e impacto de pesquisas.",
    localizacao: "São Paulo/SP",
    area: "Bibliometria",
    habilidadesTecnicas: ["VOSviewer", "Scopus", "Web of Science", "R"],
    softSkills: ["Rigor analítico", "Organização", "Curiosidade"],
    experiencias: [
      {
        empresa: "Núcleo de Pesquisas Científicas",
        cargo: "Analista de Bibliometria",
        inicio: "2018-06",
        fim: "2024-12",
        descricao: "Análises de impacto de grupos de pesquisa."
      }
    ],
    formacao: [
      { curso: "Biblioteconomia", instituicao: "USP", ano: 2015 }
    ],
    projetos: [
      {
        titulo: "Mapa de Colaborações Acadêmicas",
        link: "https://example.com/colaboracoes",
        descricao: "Visualização de redes de coautoria e citações."
      }
    ],
    certificacoes: ["Bibliometria Aplicada"],
    idiomas: [
      { idioma: "Português", nivel: "Nativo" },
      { idioma: "Inglês", nivel: "Leitura avançada" }
    ],
    areaInteresses: ["Produção Científica", "Redes de Colaboração", "Indicadores"]
  },
  {
    id: 36,
    nome: "Felipe Aragão Pinto",
    foto: "https://randomuser.me/api/portraits/men/36.jpg",
    cargo: "Coordenador de Inovação Acadêmica",
    resumo: "Conecta professores, tecnologia e metodologias ativas.",
    localizacao: "São Paulo/SP",
    area: "Inovação",
    habilidadesTecnicas: ["Design Thinking", "Metodologias Ativas", "Gestão de Projetos"],
    softSkills: ["Liderança", "Facilitação", "Comunicação"],
    experiencias: [
      {
        empresa: "Laboratório de Inovação Acadêmica",
        cargo: "Coordenador",
        inicio: "2017-02",
        fim: "2024-12",
        descricao: "Programas de formação docente e pilotos de tecnologias educacionais."
      }
    ],
    formacao: [
      { curso: "Pedagogia", instituicao: "UNESP", ano: 2012 }
    ],
    projetos: [
      {
        titulo: "Sala de Aula Invertida 2.0",
        link: "https://example.com/flipped-2",
        descricao: "Modelo de implementação de metodologias ativas em graduação."
      }
    ],
    certificacoes: ["Formação em Metodologias Ativas"],
    idiomas: [
      { idioma: "Português", nivel: "Nativo" },
      { idioma: "Inglês", nivel: "Intermediário" }
    ],
    areaInteresses: ["Inovação Curricular", "EdTech", "Formação Docente"]
  },
    {
    id: 37,
    nome: "Melissa Prado Cunha",
    foto: "https://randomuser.me/api/portraits/women/37.jpg",
    cargo: "Pesquisadora em Ética em IA",
    resumo: "Investiga vieses algorítmicos em sistemas de recomendação educacional.",
    localizacao: "São Paulo/SP",
    area: "Ética em IA",
    habilidadesTecnicas: ["Python", "Fairlearn", "Jupyter", "Estatística", "Pesquisa Qualitativa"],
    softSkills: ["Pensamento crítico", "Escrita acadêmica", "Comunicação"],
    experiencias: [
      {
        empresa: "Laboratório de Ética Algorítmica",
        cargo: "Pesquisadora",
        inicio: "2019-03",
        fim: "2024-12",
        descricao: "Auditoria de modelos de recomendação de disciplinas e trilhas de estudo."
      }
    ],
    formacao: [
      { curso: "Mestrado em Ciência da Computação", instituicao: "USP", ano: 2018 }
    ],
    projetos: [
      {
        titulo: "BiasCheck EDU",
        link: "https://github.com/example/biascheck-edu",
        descricao: "Ferramentas para avaliar vieses em modelos de IA educacionais."
      }
    ],
    certificacoes: ["AI Ethics Professional", "LGPD para Cientistas de Dados"],
    idiomas: [
      { idioma: "Português", nivel: "Nativo" },
      { idioma: "Inglês", nivel: "Fluente" }
    ],
    areaInteresses: ["Fairness", "Transparência", "Direitos Digitais"]
  },
  {
    id: 38,
    nome: "Otávio Rezende Cardoso",
    foto: "https://randomuser.me/api/portraits/men/38.jpg",
    cargo: "Coordenador de TI Acadêmico",
    resumo: "Gere portfólio de sistemas e projetos de TI para a universidade.",
    localizacao: "Campinas/SP",
    area: "Gestão de TI",
    habilidadesTecnicas: ["Gestão de Projetos", "ITIL", "Governança de TI", "O365", "Odoo"],
    softSkills: ["Liderança", "Negociação", "Visão estratégica"],
    experiencias: [
      {
        empresa: "Universidade Paulista do Interior",
        cargo: "Coordenador de TI",
        inicio: "2016-05",
        fim: "2024-12",
        descricao: "Planejamento de roadmap tecnológico e gestão de fornecedores."
      }
    ],
    formacao: [
      { curso: "Sistemas de Informação", instituicao: "PUC-Campinas", ano: 2012 }
    ],
    projetos: [
      {
        titulo: "Portal Integrado do Estudante",
        link: "https://example.com/portal-estudante",
        descricao: "Unificação de serviços em um único login para alunos."
      }
    ],
    certificacoes: ["ITIL v4 Foundation", "PMP"],
    idiomas: [
      { idioma: "Português", nivel: "Nativo" },
      { idioma: "Inglês", nivel: "Intermediário" }
    ],
    areaInteresses: ["Governança", "Arquitetura Corporativa", "Transformação Digital"]
  },
  {
    id: 39,
    nome: "Letícia Barbosa Simões",
    foto: "https://randomuser.me/api/portraits/women/39.jpg",
    cargo: "Engenheira de Machine Learning Júnior",
    resumo: "Focada em modelos de detecção de emoções em vídeo.",
    localizacao: "São Paulo/SP",
    area: "Visão Computacional",
    habilidadesTecnicas: ["Python", "PyTorch", "OpenCV", "MLflow"],
    softSkills: ["Curiosidade", "Aprendizado rápido", "Trabalho em equipe"],
    experiencias: [
      {
        empresa: "Orion Labs",
        cargo: "ML Engineer Jr.",
        inicio: "2023-02",
        fim: "2024-12",
        descricao: "Treinamento de modelos de reconhecimento facial e de expressões."
      }
    ],
    formacao: [
      { curso: "Engenharia de Software", instituicao: "FIAP", ano: 2022 }
    ],
    projetos: [
      {
        titulo: "EmotionCam",
        link: "https://github.com/example/emotioncam",
        descricao: "POC de câmera inteligente para salas de aula."
      }
    ],
    certificacoes: ["Formação Deep Learning", "OpenCV Essentials"],
    idiomas: [
      { idioma: "Português", nivel: "Nativo" },
      { idioma: "Inglês", nivel: "Intermediário" }
    ],
    areaInteresses: ["Computer Vision", "MLOps", "Edge Computing"]
  },
  {
    id: 40,
    nome: "Sara Meneghini Rocha",
    foto: "https://randomuser.me/api/portraits/women/40.jpg",
    cargo: "Analista de Dados de Gente & Gestão",
    resumo: "Analisa engajamento de colaboradores e performance docente.",
    localizacao: "Curitiba/PR",
    area: "People Analytics",
    habilidadesTecnicas: ["Power BI", "Python", "Excel Avançado", "R"],
    softSkills: ["Empatia", "Comunicação", "Visão analítica"],
    experiencias: [
      {
        empresa: "Grupo Educacional Horizonte",
        cargo: "People Analytics Analyst",
        inicio: "2020-04",
        fim: "2024-12",
        descricao: "Indicadores de clima, engajamento e produtividade acadêmica."
      }
    ],
    formacao: [
      { curso: "Psicologia", instituicao: "UFPR", ano: 2017 }
    ],
    projetos: [
      {
        titulo: "Mapa de Engajamento Docente",
        link: "https://example.com/engajamento-docente",
        descricao: "Dashboard cruzando NPS, evasão e avaliações internas."
      }
    ],
    certificacoes: ["Certificação em People Analytics"],
    idiomas: [
      { idioma: "Português", nivel: "Nativo" },
      { idioma: "Inglês", nivel: "Leitura avançada" }
    ],
    areaInteresses: ["Cultura Organizacional", "Engajamento", "Formação Docente"]
  },
  {
    id: 41,
    nome: "Bruno de Lara Paixão",
    foto: "https://randomuser.me/api/portraits/men/41.jpg",
    cargo: "Professor de Estatística Aplicada",
    resumo: "Ajuda alunos a entenderem estatística usando dados reais da universidade.",
    localizacao: "São Paulo/SP",
    area: "Estatística",
    habilidadesTecnicas: ["R", "Python", "SPSS", "Modelagem Estatística"],
    softSkills: ["Didática", "Paciência", "Clareza na explicação"],
    experiencias: [
      {
        empresa: "Universidade Centro-Leste",
        cargo: "Professor",
        inicio: "2015-02",
        fim: "2024-12",
        descricao: "Disciplinas de Estatística, Probabilidade e Métodos Quantitativos."
      }
    ],
    formacao: [
      { curso: "Mestrado em Estatística", instituicao: "UNICAMP", ano: 2014 }
    ],
    projetos: [
      {
        titulo: "Estatística com Dados Reais",
        link: "https://example.com/estatistica-real",
        descricao: "Repositorio de atividades usando dados internos da instituição."
      }
    ],
    certificacoes: ["Formação em Data Science para Educadores"],
    idiomas: [
      { idioma: "Português", nivel: "Nativo" },
      { idioma: "Inglês", nivel: "Intermediário" }
    ],
    areaInteresses: ["Educação Estatística", "Data Literacy", "Aprendizagem Ativa"]
  },
  {
    id: 42,
    nome: "Clara Pimentel Dias",
    foto: "https://randomuser.me/api/portraits/women/42.jpg",
    cargo: "Coordenadora de Bem-Estar Estudantil",
    resumo: "Cria programas de apoio psicológico e de vida universitária.",
    localizacao: "Rio de Janeiro/RJ",
    area: "Vida Estudantil",
    habilidadesTecnicas: ["Gestão de Projetos Sociais", "Psicoeducação", "Mediação de Conflitos"],
    softSkills: ["Empatia", "Protagonismo", "Comunicação"],
    experiencias: [
      {
        empresa: "Universidade Oceânica",
        cargo: "Coordenadora de Bem-Estar",
        inicio: "2018-01",
        fim: "2024-12",
        descricao: "Programas de acolhimento, escuta e prevenção de adoecimento mental."
      }
    ],
    formacao: [
      { curso: "Psicologia", instituicao: "UFRJ", ano: 2015 }
    ],
    projetos: [
      {
        titulo: "Semana da Saúde Mental",
        link: "https://example.com/saude-mental-campus",
        descricao: "Iniciativa anual com rodas de conversa, oficinas e atendimento breve."
      }
    ],
    certificacoes: ["Formação em Prevenção ao Suicídio", "Mediação de Conflitos"],
    idiomas: [
      { idioma: "Português", nivel: "Nativo" }
    ],
    areaInteresses: ["Saúde Mental", "Comunidades de Apoio", "Vida Universitária"]
  },
  {
    id: 43,
    nome: "Eduardo Siqueira Nunes",
    foto: "https://randomuser.me/api/portraits/men/43.jpg",
    cargo: "Desenvolvedor de Chatbots Educacionais",
    resumo: "Cria assistentes virtuais para suporte a alunos e professores.",
    localizacao: "São Paulo/SP",
    area: "IA Conversacional",
    habilidadesTecnicas: ["Node.js", "Python", "Dialogflow", "REST APIs", "PostgreSQL"],
    softSkills: ["Criatividade", "Comunicação", "Trabalho em equipe"],
    experiencias: [
      {
        empresa: "EduBots",
        cargo: "Chatbot Developer",
        inicio: "2021-06",
        fim: "2024-12",
        descricao: "Bots para dúvidas acadêmicas, financeiras e de vida universitária."
      }
    ],
    formacao: [
      { curso: "Ciência da Computação", instituicao: "UNESP", ano: 2020 }
    ],
    projetos: [
      {
        titulo: "Bot do Calouro",
        link: "https://github.com/example/bot-calouro",
        descricao: "Assistente que guia estudantes nos primeiros 100 dias."
      }
    ],
    certificacoes: ["Conversational AI Developer"],
    idiomas: [
      { idioma: "Português", nivel: "Nativo" },
      { idioma: "Inglês", nivel: "Intermediário" }
    ],
    areaInteresses: ["NLP", "Chatbots", "Automação de Atendimento"]
  },
  {
    id: 44,
    nome: "Giovana Lemos Tavares",
    foto: "https://randomuser.me/api/portraits/women/44.jpg",
    cargo: "Analista de Operações Acadêmicas",
    resumo: "Cuida do funcionamento diário de calendários, turmas e matrículas.",
    localizacao: "São Paulo/SP",
    area: "Operações Acadêmicas",
    habilidadesTecnicas: ["Excel", "Sistemas Acadêmicos", "Modelagem de Processos"],
    softSkills: ["Organização", "Detalhismo", "Comunicação"],
    experiencias: [
      {
        empresa: "Faculdade Nova Geração",
        cargo: "Analista Acadêmica",
        inicio: "2019-03",
        fim: "2024-12",
        descricao: "Execução de calendário acadêmico e fluxos de matrícula."
      }
    ],
    formacao: [
      { curso: "Administração", instituicao: "FMU", ano: 2018 }
    ],
    projetos: [
      {
        titulo: "Guia de Processos Acadêmicos",
        link: "https://example.com/guia-academico",
        descricao: "Documentação visual de fluxos principais do setor."
      }
    ],
    certificacoes: ["Lean Office"],
    idiomas: [
      { idioma: "Português", nivel: "Nativo" }
    ],
    areaInteresses: ["Processos", "Automação", "Atendimento ao Aluno"]
  },
  {
    id: 45,
    nome: "Hugo Carvalho Pacheco",
    foto: "https://randomuser.me/api/portraits/men/45.jpg",
    cargo: "Cientista de Dados em Educação Médica",
    resumo: "Trabalha com dados de simulação clínica e desempenho de residentes.",
    localizacao: "São Paulo/SP",
    area: "Data Science em Saúde",
    habilidadesTecnicas: ["Python", "R", "SQL", "Machine Learning", "Dashboards"],
    softSkills: ["Rigor analítico", "Curiosidade", "Comunicação"],
    experiencias: [
      {
        empresa: "Escola de Ciências da Saúde",
        cargo: "Data Scientist",
        inicio: "2020-01",
        fim: "2024-12",
        descricao: "Modelagem de desempenho e trilhas de competência em Medicina."
      }
    ],
    formacao: [
      { curso: "Engenharia Biomédica", instituicao: "UNIFESP", ano: 2017 }
    ],
    projetos: [
      {
        titulo: "Simulador Analítico de OSCE",
        link: "https://github.com/example/osce-analytics",
        descricao: "Análise de avaliações práticas em simulações clínicas."
      }
    ],
    certificacoes: ["Health Data Science Certification"],
    idiomas: [
      { idioma: "Português", nivel: "Nativo" },
      { idioma: "Inglês", nivel: "Fluente" }
    ],
    areaInteresses: ["Educação Médica", "Competências", "Simulação"]
  },
  {
    id: 46,
    nome: "Ingrid Araújo Melo",
    foto: "https://randomuser.me/api/portraits/women/46.jpg",
    cargo: "Especialista em Acessibilidade Digital",
    resumo: "Garante que plataformas educacionais sejam acessíveis para todos.",
    localizacao: "São Paulo/SP",
    area: "Acessibilidade",
    habilidadesTecnicas: ["WCAG", "WAI-ARIA", "Testes com Leitor de Tela"],
    softSkills: ["Empatia", "Didática", "Comunicação"],
    experiencias: [
      {
        empresa: "Inclusiva Tech",
        cargo: "Accessibility Specialist",
        inicio: "2018-04",
        fim: "2024-12",
        descricao: "Auditoria e orientação de equipes de desenvolvimento."
      }
    ],
    formacao: [
      { curso: "Design Digital", instituicao: "Senac-SP", ano: 2016 }
    ],
    projetos: [
      {
        titulo: "Guia de Acessibilidade para AVA",
        link: "https://example.com/guia-acessibilidade-ava",
        descricao: "Boas práticas para AVAs mais inclusivos."
      }
    ],
    certificacoes: ["IAAP CPACC"],
    idiomas: [
      { idioma: "Português", nivel: "Nativo" },
      { idioma: "Libras", nivel: "Intermediário" },
      { idioma: "Inglês", nivel: "Intermediário" }
    ],
    areaInteresses: ["UX Inclusivo", "Tecnologias Assistivas", "Direitos Humanos"]
  },
  {
    id: 47,
    nome: "Jorge Matos Figueiredo",
    foto: "https://randomuser.me/api/portraits/men/47.jpg",
    cargo: "Engenheiro de Software de Integrações",
    resumo: "Especialista em conectar ERPs acadêmicos com outras plataformas.",
    localizacao: "São Paulo/SP",
    area: "Integrações",
    habilidadesTecnicas: ["Python", "Odoo", "REST APIs", "RabbitMQ", "Docker"],
    softSkills: ["Resolução de problemas", "Atenção a detalhes", "Comunicação"],
    experiencias: [
      {
        empresa: "IntegraEdu",
        cargo: "Software Engineer",
        inicio: "2019-02",
        fim: "2024-12",
        descricao: "Integrações entre sistemas financeiros, acadêmicos e de CRM."
      }
    ],
    formacao: [
      { curso: "Engenharia de Computação", instituicao: "Insper", ano: 2017 }
    ],
    projetos: [
      {
        titulo: "Conectores Acadêmicos",
        link: "https://github.com/example/edu-connectors",
        descricao: "Coleção de conectores e scripts de integração para universidades."
      }
    ],
    certificacoes: ["Odoo Developer", "Linux Foundation Container Fundamentals"],
    idiomas: [
      { idioma: "Português", nivel: "Nativo" },
      { idioma: "Inglês", nivel: "Avançado" }
    ],
    areaInteresses: ["Eventos", "Microserviços", "Mensageria"]
  },
  {
    id: 48,
    nome: "Karla Nunes de Sá",
    foto: "https://randomuser.me/api/portraits/women/48.jpg",
    cargo: "Coordenadora de Comunidade de Alunos",
    resumo: "Constrói redes de apoio e comunidades internas nas universidades.",
    localizacao: "Fortaleza/CE",
    area: "Comunidade",
    habilidadesTecnicas: ["Gestão de Comunidade", "Eventos", "Redes Sociais"],
    softSkills: ["Comunicação", "Empatia", "Organização"],
    experiencias: [
      {
        empresa: "Universidade Conecta",
        cargo: "Community Manager",
        inicio: "2020-03",
        fim: "2024-12",
        descricao: "Programas de embaixadores, mentorias e grupos de interesse."
      }
    ],
    formacao: [
      { curso: "Relações Públicas", instituicao: "UFC", ano: 2016 }
    ],
    projetos: [
      {
        titulo: "Programa Embaixadores do Campus",
        link: "https://example.com/embaixadores",
        descricao: "Rede de alunos representantes em cada curso."
      }
    ],
    certificacoes: ["Community Management"],
    idiomas: [
      { idioma: "Português", nivel: "Nativo" }
    ],
    areaInteresses: ["Comunidades", "Eventos", "Engajamento Orgânico"]
  },
  {
    id: 49,
    nome: "Lucas Peixoto Andrade",
    foto: "https://randomuser.me/api/portraits/men/49.jpg",
    cargo: "Engenheiro de Machine Learning Senior",
    resumo: "Lidera time de IA aplicado à análise de vídeo em salas de aula.",
    localizacao: "São Paulo/SP",
    area: "IA Aplicada",
    habilidadesTecnicas: ["Python", "PyTorch", "TensorRT", "MLOps", "Kubernetes"],
    softSkills: ["Liderança técnica", "Mentoria", "Comunicação"],
    experiencias: [
      {
        empresa: "Orion Analytics",
        cargo: "Senior ML Engineer",
        inicio: "2018-01",
        fim: "2024-12",
        descricao: "Arquitetura de modelos de detecção de emoção e engajamento."
      }
    ],
    formacao: [
      { curso: "Engenharia Elétrica", instituicao: "POLI-USP", ano: 2014 }
    ],
    projetos: [
      {
        titulo: "Orion Vision Stack",
        link: "https://github.com/example/orion-vision",
        descricao: "Stack de visão computacional otimizada para produção."
      }
    ],
    certificacoes: ["NVIDIA Jetson Specialist", "TensorFlow Developer"],
    idiomas: [
      { idioma: "Português", nivel: "Nativo" },
      { idioma: "Inglês", nivel: "Fluente" }
    ],
    areaInteresses: ["Edge AI", "Otimização de Modelos", "Visão Computacional"]
  },
  {
    id: 50,
    nome: "Márcia Souza Lacerda",
    foto: "https://randomuser.me/api/portraits/women/50.jpg",
    cargo: "Consultora Pedagógica em Metodologias Ativas",
    resumo: "Auxilia professores a redesenhar disciplinas usando metodologias ativas.",
    localizacao: "Belo Horizonte/MG",
    area: "Metodologias Ativas",
    habilidadesTecnicas: ["PBL", "Sala de Aula Invertida", "Design de Atividades"],
    softSkills: ["Facilitação", "Comunicação", "Escuta ativa"],
    experiencias: [
      {
        empresa: "Instituto de Inovação Pedagógica",
        cargo: "Consultora",
        inicio: "2017-01",
        fim: "2024-12",
        descricao: "Formações docentes e acompanhamento de projetos de inovação."
      }
    ],
    formacao: [
      { curso: "Pedagogia", instituicao: "UFMG", ano: 2012 }
    ],
    projetos: [
      {
        titulo: "Trilhas Ativas para Engenharia",
        link: "https://example.com/trilhas-engenharia",
        descricao: "Redesenho de disciplinas com foco em projetos reais."
      }
    ],
    certificacoes: ["Metodologias Ativas na Educação Superior"],
    idiomas: [
      { idioma: "Português", nivel: "Nativo" }
    ],
    areaInteresses: ["PBL", "Avaliação por Competências", "Inovação Curricular"]
  },
  {
    id: 51,
    nome: "Nelson Prado Gama",
    foto: "https://randomuser.me/api/portraits/men/51.jpg",
    cargo: "Administrador de Redes",
    resumo: "Responsável pela infraestrutura de rede de campus multi-local.",
    localizacao: "Porto Alegre/RS",
    area: "Redes",
    habilidadesTecnicas: ["Cisco", "Firewall", "VPN", "Wi-Fi Corporativo"],
    softSkills: ["Resiliência", "Trabalho sob pressão", "Comunicação"],
    experiencias: [
      {
        empresa: "Universidade das Américas do Sul",
        cargo: "Network Administrator",
        inicio: "2015-08",
        fim: "2024-12",
        descricao: "Gestão de backbone de rede e segurança perimetral."
      }
    ],
    formacao: [
      { curso: "Tecnologia em Redes", instituicao: "SENAC-RS", ano: 2013 }
    ],
    projetos: [
      {
        titulo: "Wi-Fi Único no Campus",
        link: "https://example.com/wifi-campus",
        descricao: "Rede sem fio unificada com roaming para todos os prédios."
      }
    ],
    certificacoes: ["CCNA", "Security+"],
    idiomas: [
      { idioma: "Português", nivel: "Nativo" }
    ],
    areaInteresses: ["Segurança de Rede", "Alta Disponibilidade", "Monitoramento"]
  },
  {
    id: 52,
    nome: "Olívia Tavares Lima",
    foto: "https://randomuser.me/api/portraits/women/52.jpg",
    cargo: "Gestora de Projetos de Extensão",
    resumo: "Coordena ações de impacto social ligadas à universidade.",
    localizacao: "Salvador/BA",
    area: "Extensão Universitária",
    habilidadesTecnicas: ["Gestão de Projetos", "Articulação Comunitária", "Elaboração de Editais"],
    softSkills: ["Empatia", "Organização", "Comunicação"],
    experiencias: [
      {
        empresa: "Universidade do Atlântico",
        cargo: "Coordenadora de Extensão",
        inicio: "2016-03",
        fim: "2024-12",
        descricao: "Projetos em comunidades, escolas e organizações sociais."
      }
    ],
    formacao: [
      { curso: "Serviço Social", instituicao: "UFBA", ano: 2012 }
    ],
    projetos: [
      {
        titulo: "Universidade na Comunidade",
        link: "https://example.com/extensao",
        descricao: "Rede de projetos de extensão interdisciplinares."
      }
    ],
    certificacoes: ["Gestão de Projetos Sociais"],
    idiomas: [
      { idioma: "Português", nivel: "Nativo" }
    ],
    areaInteresses: ["Impacto Social", "ODS", "Participação Comunitária"]
  },
  {
    id: 53,
    nome: "Paulo Henrique Dantas",
    foto: "https://randomuser.me/api/portraits/men/53.jpg",
    cargo: "Instrutor de Laboratório de Robótica",
    resumo: "Acompanha projetos de robótica e automação em cursos de engenharia.",
    localizacao: "São José dos Campos/SP",
    area: "Robótica Educacional",
    habilidadesTecnicas: ["Arduino", "Raspberry Pi", "C++", "Impressão 3D"],
    softSkills: ["Paciência", "Criatividade", "Trabalho em equipe"],
    experiencias: [
      {
        empresa: "Centro Tecnológico do Vale",
        cargo: "Instrutor de Laboratório",
        inicio: "2018-02",
        fim: "2024-12",
        descricao: "Apoio em projetos de competição e disciplinas práticas."
      }
    ],
    formacao: [
      { curso: "Engenharia de Controle e Automação", instituicao: "FATEC", ano: 2016 }
    ],
    projetos: [
      {
        titulo: "Liga de Robótica Campus",
        link: "https://github.com/example/liga-robotica",
        descricao: "Grupo de extensão focado em competições nacionais."
      }
    ],
    certificacoes: ["Robotics Fundamentals"],
    idiomas: [
      { idioma: "Português", nivel: "Nativo" }
    ],
    areaInteresses: ["Hardware", "Competição", "Aprendizagem Maker"]
  },
  {
    id: 54,
    nome: "Queila Santos Barreto",
    foto: "https://randomuser.me/api/portraits/women/54.jpg",
    cargo: "Analista de Comunicação Interna",
    resumo: "Garante que informações circulem bem entre alunos e colaboradores.",
    localizacao: "Recife/PE",
    area: "Comunicação",
    habilidadesTecnicas: ["Redação", "Intranet", "E-mail Marketing", "Design Básico"],
    softSkills: ["Clareza", "Organização", "Criatividade"],
    experiencias: [
      {
        empresa: "Universidade Atlântico Norte",
        cargo: "Analista de Comunicação",
        inicio: "2019-04",
        fim: "2024-12",
        descricao: "Campanhas internas, comunicados e gestão de canais."
      }
    ],
    formacao: [
      { curso: "Jornalismo", instituicao: "UFPE", ano: 2016 }
    ],
    projetos: [
      {
        titulo: "Portal de Notícias do Campus",
        link: "https://example.com/portal-campus",
        descricao: "Plataforma com notícias, avisos e agenda de eventos."
      }
    ],
    certificacoes: ["Comunicação Interna Estratégica"],
    idiomas: [
      { idioma: "Português", nivel: "Nativo" }
    ],
    areaInteresses: ["Employee Experience", "Branding Interno", "Conteúdo Digital"]
  },
  {
    id: 55,
    nome: "Roberta Almeida Sá",
    foto: "https://randomuser.me/api/portraits/women/55.jpg",
    cargo: "Pesquisadora em Neuroeducação",
    resumo: "Estuda como emoção e atenção influenciam aprendizagem universitária.",
    localizacao: "São Paulo/SP",
    area: "Neuroeducação",
    habilidadesTecnicas: ["Desenho de Experimentos", "EEG básico", "Estatística"],
    softSkills: ["Curiosidade", "Rigor científico", "Comunicação"],
    experiencias: [
      {
        empresa: "Laboratório de Neurociência Educacional",
        cargo: "Pesquisadora",
        inicio: "2018-01",
        fim: "2024-12",
        descricao: "Experimentos sobre atenção, memória e motivação."
      }
    ],
    formacao: [
      { curso: "Mestrado em Neurociência", instituicao: "USP", ano: 2017 }
    ],
    projetos: [
      {
        titulo: "Atenção em Aulas Híbridas",
        link: "https://research.example.com/atencao-hibrida",
        descricao: "Estudos comparando modos presenciais e remotos."
      }
    ],
    certificacoes: ["Formação em Neurociência da Aprendizagem"],
    idiomas: [
      { idioma: "Português", nivel: "Nativo" },
      { idioma: "Inglês", nivel: "Fluente" }
    ],
    areaInteresses: ["Atenção", "Emoções", "Aprendizagem Ativa"]
  },
  {
    id: 56,
    nome: "Samuel Cunha Ribeiro",
    foto: "https://randomuser.me/api/portraits/men/56.jpg",
    cargo: "Analista de Sistemas de Biblioteca",
    resumo: "Administra sistemas de gestão de acervo e empréstimos.",
    localizacao: "Porto Alegre/RS",
    area: "Sistemas de Biblioteca",
    habilidadesTecnicas: ["Koha", "SQL", "Linux", "Z39.50"],
    softSkills: ["Organização", "Trabalho em equipe", "Comunicação"],
    experiencias: [
      {
        empresa: "Biblioteca Central Sul",
        cargo: "Analista de Sistemas",
        inicio: "2017-05",
        fim: "2024-12",
        descricao: "Manutenção e integração de sistemas de biblioteca."
      }
    ],
    formacao: [
      { curso: "Análise e Desenvolvimento de Sistemas", instituicao: "IFRS", ano: 2015 }
    ],
    projetos: [
      {
        titulo: "Integração Biblioteca–AVA",
        link: "https://example.com/integracao-biblio-ava",
        descricao: "Links contextuais de acervo dentro de disciplinas."
      }
    ],
    certificacoes: ["Linux Professional"],
    idiomas: [
      { idioma: "Português", nivel: "Nativo" }
    ],
    areaInteresses: ["Sistemas de Informação", "Dados de Acervo", "Integrações"]
  },
  {
    id: 57,
    nome: "Tatiane Gomes Moreira",
    foto: "https://randomuser.me/api/portraits/women/57.jpg",
    cargo: "Facilitadora de Design Sprint",
    resumo: "Ajuda equipes docentes a prototipar rapidamente novas disciplinas.",
    localizacao: "São Paulo/SP",
    area: "Inovação",
    habilidadesTecnicas: ["Design Sprint", "Canvas", "Prototipagem Rápida"],
    softSkills: ["Facilitação", "Escuta ativa", "Criatividade"],
    experiencias: [
      {
        empresa: "Studio de Inovação Educacional",
        cargo: "Facilitadora",
        inicio: "2019-08",
        fim: "2024-12",
        descricao: "Workshops para redesenho de experiências de aprendizagem."
      }
    ],
    formacao: [
      { curso: "Design", instituicao: "FAAP", ano: 2016 }
    ],
    projetos: [
      {
        titulo: "Sprint de Disciplinas Online",
        link: "https://example.com/sprint-online",
        descricao: "Metodologia para redesenho de disciplinas em 5 dias."
      }
    ],
    certificacoes: ["Design Sprint Master"],
    idiomas: [
      { idioma: "Português", nivel: "Nativo" }
    ],
    areaInteresses: ["Inovação", "Co-criação", "Futuro do Trabalho"]
  },
  {
    id: 58,
    nome: "Ubirajara Lima Costa",
    foto: "https://randomuser.me/api/portraits/men/58.jpg",
    cargo: "Analista de Infraestrutura em Nuvem",
    resumo: "Responsável por recursos de nuvem que suportam plataformas educacionais.",
    localizacao: "São Paulo/SP",
    area: "Cloud",
    habilidadesTecnicas: ["AWS", "Azure", "Terraform", "Docker", "Kubernetes"],
    softSkills: ["Proatividade", "Resolução de problemas", "Comunicação"],
    experiencias: [
      {
        empresa: "CloudEdu",
        cargo: "Cloud Engineer",
        inicio: "2018-11",
        fim: "2024-12",
        descricao: "Migração e manutenção de workloads acadêmicos na nuvem."
      }
    ],
    formacao: [
      { curso: "Ciência da Computação", instituicao: "UFABC", ano: 2016 }
    ],
    projetos: [
      {
        titulo: "Campus Cloud",
        link: "https://github.com/example/campus-cloud",
        descricao: "Infraestrutura como código para ambientes acadêmicos."
      }
    ],
    certificacoes: ["AWS Solutions Architect Associate", "Azure Administrator"],
    idiomas: [
      { idioma: "Português", nivel: "Nativo" },
      { idioma: "Inglês", nivel: "Intermediário" }
    ],
    areaInteresses: ["Infraestrutura", "SRE", "Automação"]
  },
  {
    id: 59,
    nome: "Vitória Nascimento Leal",
    foto: "https://randomuser.me/api/portraits/women/59.jpg",
    cargo: "Especialista em Suporte Psicológico Online",
    resumo: "Desenvolve protocolos e ferramentas para atendimento remoto a estudantes.",
    localizacao: "São Paulo/SP",
    area: "Psicologia Online",
    habilidadesTecnicas: ["Teleatendimento", "Psicologia Cognitivo-Comportamental", "Ferramentas de Vídeo"],
    softSkills: ["Escuta ativa", "Empatia", "Comunicação clara"],
    experiencias: [
      {
        empresa: "Centro de Apoio Virtual ao Estudante",
        cargo: "Psicóloga",
        inicio: "2020-04",
        fim: "2024-12",
        descricao: "Atendimento remoto durante pandemia e pós-pandemia."
      }
    ],
    formacao: [
      { curso: "Psicologia", instituicao: "PUC-SP", ano: 2018 }
    ],
    projetos: [
      {
        titulo: "Protocolo de Teleatendimento Universitário",
        link: "https://example.com/protocolo-psico-online",
        descricao: "Guia para serviços psicológicos em contexto acadêmico remoto."
      }
    ],
    certificacoes: ["Formação em Telepsicologia"],
    idiomas: [
      { idioma: "Português", nivel: "Nativo" }
    ],
    areaInteresses: ["Saúde Mental", "Teleatendimento", "Jovens Adultos"]
  },
  {
    id: 60,
    nome: "Wagner Costa Freire",
    foto: "https://randomuser.me/api/portraits/men/60.jpg",
    cargo: "Coordenador de TI de Laboratórios",
    resumo: "Gerencia parques de computadores e softwares especializados.",
    localizacao: "Vitória/ES",
    area: "Suporte de Laboratórios",
    habilidadesTecnicas: ["Windows Server", "Linux", "Imagens de Sistema", "Inventário"],
    softSkills: ["Organização", "Trabalho em equipe", "Comunicação"],
    experiencias: [
      {
        empresa: "Centro Universitário Capixaba",
        cargo: "Coordenador de LABs",
        inicio: "2015-09",
        fim: "2024-12",
        descricao: "Gestão de todos os laboratórios de informática e softwares licenciados."
      }
    ],
    formacao: [
      { curso: "Tecnologia em Redes", instituicao: "IFES", ano: 2013 }
    ],
    projetos: [
      {
        titulo: "Padronização de Labs",
        link: "https://example.com/padronizacao-labs",
        descricao: "Imagens padronizadas e automação de deploy em massa."
      }
    ],
    certificacoes: ["MCSA", "ITIL Foundation"],
    idiomas: [
      { idioma: "Português", nivel: "Nativo" }
    ],
    areaInteresses: ["Automação de Infra", "Gestão de Ativos", "Suporte"]
  },
  {
    id: 61,
    nome: "Xênia Duarte Albuquerque",
    foto: "https://randomuser.me/api/portraits/women/61.jpg",
    cargo: "Pesquisadora em Estudos de Gênero e Educação",
    resumo: "Analisa desigualdades de gênero no ensino superior.",
    localizacao: "Brasília/DF",
    area: "Ciências Humanas",
    habilidadesTecnicas: ["Pesquisa Qualitativa", "Entrevistas", "Análise de Discurso"],
    softSkills: ["Empatia", "Escrita", "Análise crítica"],
    experiencias: [
      {
        empresa: "Núcleo de Estudos de Gênero",
        cargo: "Pesquisadora",
        inicio: "2017-02",
        fim: "2024-12",
        descricao: "Projetos sobre permanência de mulheres em cursos STEM."
      }
    ],
    formacao: [
      { curso: "Ciências Sociais", instituicao: "UnB", ano: 2014 }
    ],
    projetos: [
      {
        titulo: "Mulheres na Engenharia",
        link: "https://research.example.com/mulheres-stem",
        descricao: "Estudo sobre barreiras e trajetórias de alunas."
      }
    ],
    certificacoes: ["Formação em Metodologias Feministas"],
    idiomas: [
      { idioma: "Português", nivel: "Nativo" }
    ],
    areaInteresses: ["Gênero", "Educação Superior", "Equidade"]
  },
  {
    id: 62,
    nome: "Yuri Matias Braga",
    foto: "https://randomuser.me/api/portraits/men/62.jpg",
    cargo: "Desenvolvedor de Realidade Aumentada",
    resumo: "Cria experiências de RA para laboratórios virtuais.",
    localizacao: "São Paulo/SP",
    area: "Realidade Aumentada",
    habilidadesTecnicas: ["Unity", "C#", "ARCore", "ARKit", "3D Modeling básico"],
    softSkills: ["Criatividade", "Trabalho em equipe", "Comunicação"],
    experiencias: [
      {
        empresa: "AR4Edu",
        cargo: "AR Developer",
        inicio: "2020-06",
        fim: "2024-12",
        descricao: "Simulações de laboratório de química e física em RA."
      }
    ],
    formacao: [
      { curso: "Jogos Digitais", instituicao: "UNIP", ano: 2018 }
    ],
    projetos: [
      {
        titulo: "Laboratório no Bolso",
        link: "https://example.com/lab-ar",
        descricao: "App de RA para experimentos científicos seguros."
      }
    ],
    certificacoes: ["Unity Certified Associate"],
    idiomas: [
      { idioma: "Português", nivel: "Nativo" },
      { idioma: "Inglês", nivel: "Intermediário" }
    ],
    areaInteresses: ["XR", "Educação Imersiva", "Simulações"]
  },
  {
    id: 63,
    nome: "Zélia Campos Ferraz",
    foto: "https://randomuser.me/api/portraits/women/63.jpg",
    cargo: "Gestora de Qualidade Acadêmica",
    resumo: "Monitora indicadores de qualidade e prepara a instituição para avaliações externas.",
    localizacao: "São Paulo/SP",
    area: "Qualidade",
    habilidadesTecnicas: ["Planejamento", "Indicadores", "Regulação", "Relatórios"],
    softSkills: ["Organização", "Comunicação", "Visão sistêmica"],
    experiencias: [
      {
        empresa: "Centro Universitário Metropolitano",
        cargo: "Gestora de Qualidade",
        inicio: "2016-01",
        fim: "2024-12",
        descricao: "Preparação para ENADE, visitas do MEC e acreditações."
      }
    ],
    formacao: [
      { curso: "Pedagogia", instituicao: "UNESP", ano: 2011 }
    ],
    projetos: [
      {
        titulo: "Painel de Qualidade Acadêmica",
        link: "https://example.com/qualidade-academica",
        descricao: "Consolidação de indicadores em único painel."
      }
    ],
    certificacoes: ["Gestão da Qualidade na Educação Superior"],
    idiomas: [
      { idioma: "Português", nivel: "Nativo" }
    ],
    areaInteresses: ["Avaliação Externa", "Indicadores", "Regulação"]
  },
  {
    id: 64,
    nome: "Adriana Pinto Loureiro",
    foto: "https://randomuser.me/api/portraits/women/64.jpg",
    cargo: "Consultora em Internacionalização",
    resumo: "Apoia universidades em parcerias internacionais e mobilidade estudantil.",
    localizacao: "São Paulo/SP",
    area: "Internacionalização",
    habilidadesTecnicas: ["Acordos Internacionais", "Intercâmbio", "Idiomas"],
    softSkills: ["Comunicação intercultural", "Organização", "Negociação"],
    experiencias: [
      {
        empresa: "Global Campus Consulting",
        cargo: "Consultora",
        inicio: "2017-09",
        fim: "2024-12",
        descricao: "Projetos de dupla titulação, summer schools e intercâmbio."
      }
    ],
    formacao: [
      { curso: "Relações Internacionais", instituicao: "PUC-SP", ano: 2013 }
    ],
    projetos: [
      {
        titulo: "Programa Campus Global",
        link: "https://example.com/campus-global",
        descricao: "Modelo de internacionalização para faculdades privadas."
      }
    ],
    certificacoes: ["International Education Professional"],
    idiomas: [
      { idioma: "Português", nivel: "Nativo" },
      { idioma: "Inglês", nivel: "Fluente" },
      { idioma: "Espanhol", nivel: "Avançado" }
    ],
    areaInteresses: ["Mobilidade", "Parcerias", "Experiências Globais"]
  },
  {
    id: 65,
    nome: "Bruno Henrique Soares",
    foto: "https://randomuser.me/api/portraits/men/65.jpg",
    cargo: "Coordenador de Estágios",
    resumo: "Conecta estudantes a empresas e acompanha experiências práticas.",
    localizacao: "São Paulo/SP",
    area: "Estágios",
    habilidadesTecnicas: ["Gestão de Convênios", "Sistemas de Estágio", "Relacionamento com Empresas"],
    softSkills: ["Networking", "Comunicação", "Organização"],
    experiencias: [
      {
        empresa: "Universidade Cidadã",
        cargo: "Coordenador de Estágios",
        inicio: "2018-03",
        fim: "2024-12",
        descricao: "Responsável por contratos, visitas técnicas e acompanhamento de alunos."
      }
    ],
    formacao: [
      { curso: "Administração", instituicao: "UNIP", ano: 2015 }
    ],
    projetos: [
      {
        titulo: "Feira de Estágios e Trainee",
        link: "https://example.com/feira-estagios",
        descricao: "Evento anual com empresas parceiras e oficinas de carreira."
      }
    ],
    certificacoes: ["Gestão de Programas de Estágio"],
    idiomas: [
      { idioma: "Português", nivel: "Nativo" }
    ],
    areaInteresses: ["Empregabilidade", "Parcerias", "Carreira"]
  },
  {
    id: 66,
    nome: "Carolina Duarte Sales",
    foto: "https://randomuser.me/api/portraits/women/66.jpg",
    cargo: "Especialista em Customer Success para Universidades",
    resumo: "Acompanha adoção de soluções digitais por equipes acadêmicas.",
    localizacao: "São Paulo/SP",
    area: "Customer Success",
    habilidadesTecnicas: ["Onboarding", "Health Score", "Gestão de Contas"],
    softSkills: ["Comunicação", "Empatia", "Organização"],
    experiencias: [
      {
        empresa: "SaaS para Educação",
        cargo: "Customer Success Manager",
        inicio: "2020-05",
        fim: "2024-12",
        descricao: "Atuação com times acadêmicos e de TI em implantação de plataformas."
      }
    ],
    formacao: [
      { curso: "Administração", instituicao: "UFSCAR", ano: 2017 }
    ],
    projetos: [
      {
        titulo: "Programa de Adoção Guiada",
        link: "https://example.com/adocao-guiada",
        descricao: "Metodologia para implantar soluções EdTech com menor atrito."
      }
    ],
    certificacoes: ["Customer Success Manager"],
    idiomas: [
      { idioma: "Português", nivel: "Nativo" },
      { idioma: "Inglês", nivel: "Intermediário" }
    ],
    areaInteresses: ["Engajamento de Usuário", "Sucesso do Cliente", "Educação Digital"]
  },
  {
    id: 67,
    nome: "Diego Rocha Silvério",
    foto: "https://randomuser.me/api/portraits/men/67.jpg",
    cargo: "Gestor de Projetos de Pesquisa & Inovação",
    resumo: "Gerencia editais, submissões e acompanhamento de projetos de pesquisa.",
    localizacao: "São Carlos/SP",
    area: "Pesquisa e Inovação",
    habilidadesTecnicas: ["Gestão de Projetos", "Editais", "Prestação de Contas"],
    softSkills: ["Organização", "Comunicação", "Negociação"],
    experiencias: [
      {
        empresa: "Pró-Reitoria de Pesquisa",
        cargo: "Gestor de Projetos",
        inicio: "2016-06",
        fim: "2024-12",
        descricao: "Gestão de portfólio de projetos internos e externos."
      }
    ],
    formacao: [
      { curso: "Engenharia de Produção", instituicao: "UFSCar", ano: 2013 }
    ],
    projetos: [
      {
        titulo: "Plataforma de Projetos de Pesquisa",
        link: "https://example.com/projetos-pesquisa",
        descricao: "Sistema para submissão, avaliação e monitoramento de projetos."
      }
    ],
    certificacoes: ["PMP", "Gestão de Inovação"],
    idiomas: [
      { idioma: "Português", nivel: "Nativo" },
      { idioma: "Inglês", nivel: "Leitura avançada" }
    ],
    areaInteresses: ["Inovação", "Pesquisa Aplicada", "Captação de Recursos"]
  },
  {
    id: 68,
    nome: "Elaine Marques Costa",
    foto: "https://randomuser.me/api/portraits/women/68.jpg",
    cargo: "Especialista em Dados de Sustentabilidade",
    resumo: "Analisa indicadores ambientais de campus e projetos de neutralização de carbono.",
    localizacao: "São Paulo/SP",
    area: "Sustentabilidade",
    habilidadesTecnicas: ["Inventário de Carbono", "Planilhas Avançadas", "BI"],
    softSkills: ["Rigor", "Comunicação", "Visão sistêmica"],
    experiencias: [
      {
        empresa: "Campus Verde",
        cargo: "Analista de Sustentabilidade",
        inicio: "2019-01",
        fim: "2024-12",
        descricao: "Monitoramento de energia, água, resíduos e emissões."
      }
    ],
    formacao: [
      { curso: "Engenharia Ambiental", instituicao: "USP", ano: 2016 }
    ],
    projetos: [
      {
        titulo: "Relatório de Carbono do Campus",
        link: "https://example.com/carbono-campus",
        descricao: "Inventário anual e plano de mitigação de emissões."
      }
    ],
    certificacoes: ["GHG Protocol"],
    idiomas: [
      { idioma: "Português", nivel: "Nativo" }
    ],
    areaInteresses: ["ESG", "ODS", "Carbono Neutro"]
  },
  {
    id: 69,
    nome: "Fabrício Nogueira Teixeira",
    foto: "https://randomuser.me/api/portraits/men/69.jpg",
    cargo: "Coordenador de Núcleo de Empreendedorismo",
    resumo: "Estimula cultura empreendedora e projetos de startups entre estudantes.",
    localizacao: "Florianópolis/SC",
    area: "Empreendedorismo",
    habilidadesTecnicas: ["Mentoria de Startups", "Modelagem de Negócios", "Pitch"],
    softSkills: ["Comunicação", "Liderança", "Visão de futuro"],
    experiencias: [
      {
        empresa: "Núcleo de Empreendedorismo Universitário",
        cargo: "Coordenador",
        inicio: "2017-03",
        fim: "2024-12",
        descricao: "Hackathons, pré-aceleração e programas de ideação."
      }
    ],
    formacao: [
      { curso: "Administração", instituicao: "UFSC", ano: 2013 }
    ],
    projetos: [
      {
        titulo: "Programa StartCampus",
        link: "https://example.com/startcampus",
        descricao: "Trilhas de formação empreendedora para universitários."
      }
    ],
    certificacoes: ["Startup Mentor"],
    idiomas: [
      { idioma: "Português", nivel: "Nativo" },
      { idioma: "Inglês", nivel: "Intermediário" }
    ],
    areaInteresses: ["Startups", "Inovação", "Ecossistemas Empreendedores"]
  },
  {
    id: 70,
    nome: "Gabriela Rezende Moretti",
    foto: "https://randomuser.me/api/portraits/women/70.jpg",
    cargo: "Analista de Dados de Engajamento Estudantil",
    resumo: "Trabalha cruzando dados de AVA, presença e emoções captadas pelo Orion.",
    localizacao: "São Paulo/SP",
    area: "Learning Analytics",
    habilidadesTecnicas: ["Python", "Pandas", "SQL", "Power BI", "Estatística"],
    softSkills: ["Curiosidade", "Comunicação", "Pensamento analítico"],
    experiencias: [
      {
        empresa: "Orion Analytics",
        cargo: "Learning Data Analyst",
        inicio: "2022-01",
        fim: "2024-12",
        descricao: "Criação de modelos de risco de evasão e dashboards de engajamento."
      }
    ],
    formacao: [
      { curso: "Engenharia de Produção", instituicao: "USP", ano: 2020 }
    ],
    projetos: [
      {
        titulo: "Mapa de Engajamento Orion",
        link: "https://github.com/example/orion-engajamento",
        descricao: "Visualizações combinando emoções, presença e desempenho."
      }
    ],
    certificacoes: ["Data Analytics Professional"],
    idiomas: [
      { idioma: "Português", nivel: "Nativo" },
      { idioma: "Inglês", nivel: "Avançado" }
    ],
    areaInteresses: ["Learning Analytics", "Engajamento", "Modelos Preditivos"]
  },


];
