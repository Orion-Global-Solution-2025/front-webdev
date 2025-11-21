import { useState } from "react";
import FlagTipo from "../../components/ui/FlagTipo";
import { SearchBar } from "../../components/ui/SearchBar";
import PerfilCard from "../../components/PerfilCard";
import ProfileDetail from "../../components/PerfilDetalhes";
import type { Profile } from "../data/ProfilesData";
import { profiles } from "../data/ProfilesData";

const RedeSocial = ({ theme }: { theme?: "light" | "dark" }) => {
  const isDark = theme === "dark";

  const [selectedProfile, setSelectedProfile] = useState<Profile | null>(
    profiles[0] || null
  );

  const [activeTab, setActiveTab] = useState<
    "experiencias" | "instituicoes" | "professores" | "alunos"
  >("experiencias");

  const [query, setQuery] = useState("");
  const normalizedQuery = query.trim().toLowerCase();
  const filteredProfiles = normalizedQuery
    ? profiles.filter((profile) => {
        const texto = [
          profile.nome,
          profile.cargo,
          profile.area,
          profile.localizacao,
          ...(profile.habilidadesTecnicas || []),
          ...(profile.softSkills || []),
          ...(profile.areaInteresses || []),
        ]
          .join(" ")
          .toLowerCase();

        return texto.includes(normalizedQuery);
      })
    : profiles;

  const hasResults = filteredProfiles.length > 0;

  const totalProfiles = profiles.length;
  const totalAreas = new Set(profiles.map((p) => p.area)).size;

  const allSkills = profiles.flatMap((p) => p.habilidadesTecnicas || []);
  const totalSkills = new Set(allSkills).size;

  const areaCounts: Record<string, number> = {};
  profiles.forEach((p) => {
    areaCounts[p.area] = (areaCounts[p.area] || 0) + 1;
  });

  const skillCounts: Record<string, number> = {};
  allSkills.forEach((skill) => {
    skillCounts[skill] = (skillCounts[skill] || 0) + 1;
  });
  const topSkills = Object.entries(skillCounts)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 5);

  const alertProfiles = profiles.slice(0, 4);

  const evasaoTrend = [
    { mes: "Jan", taxa: 14 },
    { mes: "Mar", taxa: 12 },
    { mes: "Mai", taxa: 10 },
    { mes: "Jul", taxa: 9 },
  ];

  const cursosEvasao = [
    { curso: "Engenharia de Software", taxa: 12 },
    { curso: "Psicologia", taxa: 10 },
    { curso: "Administração", taxa: 9 },
    { curso: "Design Digital", taxa: 8 },
  ];

  const evasaoAnualMedia = Math.round(
    evasaoTrend.reduce((total, ponto) => total + ponto.taxa, 0) /
      evasaoTrend.length
  );
  const evasaoUltimoMes = evasaoTrend[evasaoTrend.length - 1]?.taxa ?? 0;
  const cursoMaisCritico = cursosEvasao[0];

  const evasaoAnual = [
    { ano: "2022", taxa: 18 },
    { ano: "2023", taxa: 15 },
    { ano: "2024", taxa: 13 },
    { ano: "2025", taxa: 10 },
  ];

  const evasaoMensal = [
    { mes: "Jan", taxa: 14 },
    { mes: "Fev", taxa: 13 },
    { mes: "Mar", taxa: 12 },
    { mes: "Abr", taxa: 11 },
    { mes: "Mai", taxa: 10 },
    { mes: "Jun", taxa: 9 },
  ];

  const getTabTitle = () => {
    if (activeTab === "instituicoes") return "Para Instituições";
    if (activeTab === "professores") return "Para Professores";
    if (activeTab === "alunos") return "Para Alunos";
    return "";
  };

  const engajamentoPorSala = [
    { turma: "ADS 1º período - Noite", engajamento: 82 },
    { turma: "Engenharia de Produção 3º período - Manhã", engajamento: 74 },
    { turma: "Psicologia 5º período - Noite", engajamento: 68 },
    { turma: "Direito 7º período - Manhã", engajamento: 61 },
  ];

  const experimentacoes = [
    {
      metodologia: "Aula expositiva tradicional",
      impacto: 8,
      descricao:
        "Base para conteúdo teórico, mas com menor participação ativa dos alunos.",
    },
    {
      metodologia: "Estudo de caso em grupo",
      impacto: 16,
      descricao:
        "Aumenta discussões em sala e conexão com problemas reais.",
    },
    {
      metodologia: "Aulas invertidas (flipped classroom)",
      impacto: 21,
      descricao:
        "Alunos chegam mais preparados e a aula vira espaço de prática.",
    },
    {
      metodologia: "Projetos práticos orientados",
      impacto: 27,
      descricao:
        "Maior engajamento contínuo, com impacto direto na redução de evasão.",
    },
  ];

  const currentStudent = profiles[0];

  const pontosMelhorar = [
    "Participar mais de discussões em sala e fóruns online.",
    "Praticar apresentações orais para ganhar segurança ao falar em público.",
    "Organizar melhor a rotina entre trabalho, estudo e descanso.",
  ];

  const sugestoesCrescimento = [
    {
      titulo: "Trilha de liderança em projetos",
      descricao:
        "Assumir pequenos papéis de liderança em trabalhos em grupo ou monitorias.",
    },
    {
      titulo: "Aprofundar em dados e IA",
      descricao:
        "Participar de grupos de estudo e projetos práticos com foco em análise de dados.",
    },
    {
      titulo: "Desenvolver soft skills",
      descricao:
        "Explorar workshops de comunicação, colaboração e inteligência emocional.",
    },
  ];

  const progressoSemestre = [
    {
      semestre: "1º semestre",
      nota: 7.8,
      presenca: 93,
      habilidadesNovas: ["Lógica de programação", "Organização de estudos"],
      principalHabilidade: "Adaptação ao ritmo universitário",
      pontosFortes:
        "Boa presença e participação em sala, entrega de atividades em dia.",
      aMelhorar: "Gestão de ansiedade em avaliações.",
      maiorIdentificacao:
        "Aulas com exercícios guiados e exemplos práticos.",
    },
    {
      semestre: "2º semestre",
      nota: 8.4,
      presenca: 90,
      habilidadesNovas: ["Trabalho em equipe", "Comunicação em grupo"],
      principalHabilidade: "Colaboração em projetos",
      pontosFortes:
        "Bom desempenho em trabalhos em grupo e apresentações.",
      aMelhorar:
        "Planejamento de longo prazo para projetos maiores.",
      maiorIdentificacao:
        "Projetos em grupo com entregas parciais.",
    },
    {
      semestre: "3º semestre",
      nota: 8.9,
      presenca: 88,
      habilidadesNovas: [
        "Pensamento crítico",
        "Autonomia na aprendizagem",
      ],
      principalHabilidade: "Resolução de problemas complexos",
      pontosFortes:
        "Capacidade de análise e tomada de decisão em estudos de caso.",
      aMelhorar:
        "Equilíbrio entre carga de trabalho, estágio e estudo.",
      maiorIdentificacao:
        "Estudos de caso e projetos conectados ao mercado.",
    },
  ];

  return (
    <div
      className={
        isDark ? "bg-background text-foreground" : "bg-white text-gray-800"
      }
    >
      <div className="min-h-screen max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-12">
        <section className="space-y-8">
          <header className="space-y-4">
            <div className="flex flex-wrap gap-2">
              <FlagTipo
                active={activeTab === "experiencias"}
                onClick={() => setActiveTab("experiencias")}
              >
                Alunos Que Passaram Pela Experiência Oriun
              </FlagTipo>

              <FlagTipo
                active={activeTab === "instituicoes"}
                onClick={() => setActiveTab("instituicoes")}
              >
                Para Instituições
              </FlagTipo>

              <FlagTipo
                active={activeTab === "professores"}
                onClick={() => setActiveTab("professores")}
              >
                Para Professores
              </FlagTipo>

              <FlagTipo
                active={activeTab === "alunos"}
                onClick={() => setActiveTab("alunos")}
              >
                Para Alunos
              </FlagTipo>
            </div>

            {activeTab === "experiencias" && (
              <SearchBar
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Buscar por nome, área ou habilidade..."
              />
            )}
          </header>

          {activeTab === "experiencias" && (
            <>
              {hasResults ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                  {filteredProfiles.map((profile) => (
                    <PerfilCard
                      key={profile.id}
                      profile={profile}
                      onClick={() => setSelectedProfile(profile)}
                    />
                  ))}
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center py-16 gap-3 text-center">
                  <div className="w-16 h-16 rounded-full border border-dashed border-gray-300 flex items-center justify-center mb-2">
                    <span className="text-2xl">🔍</span>
                  </div>
                  <p className="text-sm font-medium">Nenhum perfil encontrado</p>
                  <p className="text-xs text-muted-foreground max-w-xs">
                    Tente buscar por outro nome, área ou habilidade técnica.
                  </p>
                </div>
              )}

              <ProfileDetail
                profile={selectedProfile}
                onClose={() => setSelectedProfile(null)}
              />
            </>
          )}

          {activeTab === "instituicoes" && (
            <div className="space-y-10">
              <div className="grid gap-6 md:grid-cols-3">
                <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
                  <p className="text-xs font-medium text-muted-foreground">
                    Total de perfis mapeados
                  </p>
                  <p className="mt-2 text-3xl font-bold">{totalProfiles}</p>
                  <p className="mt-1 text-xs text-muted-foreground">
                    Alunos com dados emocionais e comportamentais
                  </p>
                </div>

                <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
                  <p className="text-xs font-medium text-muted-foreground">
                    Áreas de atuação
                  </p>
                  <p className="mt-2 text-3xl font-bold">{totalAreas}</p>
                  <p className="mt-1 text-xs text-muted-foreground">
                    Distribuição entre tecnologia, psicologia, design, etc.
                  </p>
                </div>

                <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
                  <p className="text-xs font-medium text-muted-foreground">
                    Habilidades técnicas únicas
                  </p>
                  <p className="mt-2 text-3xl font-bold">{totalSkills}</p>
                  <p className="mt-1 text-xs text-muted-foreground">
                    Competências que podem ser desenvolvidas em trilhas
                  </p>
                </div>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <div className="rounded-xl border border-border bg-card p-6 shadow-sm space-y-4 min-h-[320px]">
                    <h3 className="text-sm font-semibold mb-4">
                      Habilidades em destaque
                    </h3>
                    <p className="text-xs text-muted-foreground mb-4">
                      Tecnologias e competências mais recorrentes entre os alunos
                      mapeados pela Oriun.
                    </p>
                    <ul className="space-y-2">
                      {topSkills.map(([skill, count]) => (
                        <li
                          key={skill}
                          className="flex items-center justify-between text-xs"
                        >
                          <span className="font-medium">{skill}</span>
                          <span className="text-muted-foreground">
                            {count} aluno{count > 1 ? "s" : ""}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="rounded-xl border border-border bg-card p-6 shadow-sm space-y-4">
                  <h3 className="text-sm font-semibold">Visão geral de evasão</h3>
                  <p className="text-xs text-muted-foreground">
                    Evasão consolidada em 2025, combinando sinais emocionais, presença
                    e desempenho acadêmico.
                  </p>

                  <div className="grid gap-4 sm:grid-cols-3">
                    <div className="space-y-1">
                      <p className="text-[11px] text-muted-foreground uppercase tracking-wide">
                        Evasão anual
                      </p>
                      <p className="text-2xl font-bold">{evasaoAnualMedia}%</p>
                      <p className="text-[11px] text-emerald-500">
                        Queda em relação ao ano anterior
                      </p>
                    </div>

                    <div className="space-y-1">
                      <p className="text-[11px] text-muted-foreground uppercase tracking-wide">
                        Último período
                      </p>
                      <p className="text-2xl font-bold">{evasaoUltimoMes}%</p>
                      <p className="text-[11px] text-muted-foreground">
                        Referente ao último bimestre analisado
                      </p>
                    </div>

                    <div className="space-y-1">
                      <p className="text-[11px] text-muted-foreground uppercase tracking-wide">
                        Curso mais crítico
                      </p>
                      <p className="text-sm font-semibold leading-snug">
                        {cursoMaisCritico.curso}
                      </p>
                      <p className="text-[11px] text-red-500">
                        {cursoMaisCritico.taxa}% de evasão
                      </p>
                    </div>
                  </div>

                  <div className="mt-2 border-t border-border pt-3">
                    <p className="text-[11px] text-muted-foreground">
                      A Oriun permite acompanhar esses indicadores em tempo real, disparando
                      alertas antes da evasão se concretizar.
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-xl border border-border bg-card p-6 shadow-sm space-y-6">
                <div className="flex items-center justify-between gap-2">
                  <h3 className="text-sm font-semibold">
                    Gráficos de evasão de alunos
                  </h3>
                  <span className="text-[11px] text-muted-foreground">
                    Visão consolidada por ano, por mês e por curso.
                  </span>
                </div>

                <div className="grid gap-6 md:grid-cols-3">
                  <div className="space-y-3">
                    <p className="text-xs font-semibold">Evasão anual</p>
                    <p className="text-[11px] text-muted-foreground">
                      Comparativo dos últimos anos letivos.
                    </p>
                    <div className="space-y-2">
                      {evasaoAnual.map((item) => (
                        <div key={item.ano} className="space-y-1">
                          <div className="flex items-center justify-between text-[11px]">
                            <span>{item.ano}</span>
                            <span className="font-medium">{item.taxa}%</span>
                          </div>
                          <div className="h-2 rounded-full bg-muted overflow-hidden">
                            <div
                              className="h-full bg-gradient-to-r from-red-500 to-emerald-400"
                              style={{ width: `${item.taxa}%` }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-3">
                    <p className="text-xs font-semibold">Evasão mensal</p>
                    <p className="text-[11px] text-muted-foreground">
                      Pequeno “sparkline” mostrando a tendência de queda.
                    </p>
                    <div className="flex items-end gap-2 h-24">
                      {evasaoMensal.map((item) => (
                        <div
                          key={item.mes}
                          className="flex-1 flex flex-col items-center gap-1"
                        >
                          <div className="w-full bg-muted rounded-full overflow-hidden h-full flex items-end">
                            <div
                              className="w-full bg-gradient-to-t from-red-500 to-emerald-400 rounded-full"
                              style={{ height: `${item.taxa * 2}px` }}
                            />
                          </div>
                          <span className="text-[10px] text-muted-foreground">
                            {item.mes}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-3">
                    <p className="text-xs font-semibold">Evasão por curso</p>
                    <p className="text-[11px] text-muted-foreground">
                      Cursos com maior risco relativo de abandono.
                    </p>
                    <div className="space-y-2">
                      {cursosEvasao.map((curso) => (
                        <div key={curso.curso} className="space-y-1">
                          <div className="flex items-center justify-between text-[11px]">
                            <span className="truncate max-w-[180px]">
                              {curso.curso}
                            </span>
                            <span className="font-medium text-red-500">
                              {curso.taxa}%
                            </span>
                          </div>
                          <div className="h-2 rounded-full bg-muted overflow-hidden">
                            <div
                              className="h-full bg-gradient-to-r from-red-500 to-orange-400"
                              style={{ width: `${curso.taxa}%` }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <p className="text-[11px] text-muted-foreground">
                  Esses gráficos podem ser exportados para relatórios ou
                  conectados ao BI da instituição para acompanhamento contínuo.
                </p>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                <div className="rounded-xl border border-border bg-card p-6 shadow-sm md:col-span-2">
                  <h3 className="text-sm font-semibold mb-4">
                    Engajamento por área
                  </h3>
                  <p className="text-xs text-muted-foreground mb-4">
                    Cada barra representa a quantidade de alunos em cada área.
                    O engajamento pode ser combinado com presença, participação
                    e sinais emocionais.
                  </p>
                  <div className="space-y-3">
                    {Object.entries(areaCounts).map(([area, count]) => (
                      <div key={area} className="space-y-1">
                        <div className="flex items-center justify-between text-xs">
                          <span className="font-medium">{area}</span>
                          <span className="text-muted-foreground">
                            {count} aluno{count > 1 ? "s" : ""}
                          </span>
                        </div>
                        <div className="h-2 rounded-full bg-muted overflow-hidden">
                          <div
                            className="h-full bg-gradient-to-r from-[#00b4ff] to-[#8b5cf6]"
                            style={{
                              width: `${Math.min(
                                100,
                                20 + count * 15
                              )}%`,
                            }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="rounded-xl border border-border bg-card p-6 shadow-sm space-y-6">
                <div className="flex items-center justify-between gap-2">
                  <h3 className="text-sm font-semibold">
                    Perfis que estão em alerta
                  </h3>
                  <span className="text-[11px] text-muted-foreground">
                    Foco em alunos com maior probabilidade de evasão.
                  </span>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 rounded-lg bg-muted/40 p-4">
                  <div className="w-12 h-12 rounded-full bg-red-500/10 border border-red-300/40 flex items-center justify-center text-red-500 text-sm font-semibold flex-shrink-0">
                    72%
                  </div>

                  <div className="space-y-2 text-sm">
                    <p className="font-semibold">
                      Persona de evasão:{" "}
                      <span className="text-red-500">
                        “Aluno em risco silencioso”
                      </span>
                    </p>
                    <p className="text-muted-foreground text-xs sm:text-[13px] leading-relaxed">
                      Estudantes com queda gradual de engajamento emocional, menor participação em sala,
                      aumento de expressões de cansaço ou frustração e redução de presença em atividades
                      síncronas. Normalmente estão entre o 3º e 6º período, divididos entre trabalho,
                      estágio e estudos.
                    </p>
                    <div className="flex flex-wrap gap-2 pt-1">
                      <span className="px-2 py-1 rounded-full bg-red-500/10 text-[11px] text-red-500">
                        Engajamento em queda
                      </span>
                      <span className="px-2 py-1 rounded-full bg-amber-500/10 text-[11px] text-amber-500">
                        Alta carga externa (trabalho)
                      </span>
                      <span className="px-2 py-1 rounded-full bg-sky-500/10 text-[11px] text-sky-500">
                        Pouca participação em aula
                      </span>
                    </div>
                  </div>
                </div>

                {alertProfiles.length ? (
                  <div className="space-y-3">
                    <p className="text-[11px] text-muted-foreground">
                      Abaixo, exemplos reais de perfis que hoje se encaixariam nessa persona de risco.
                    </p>

                    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                      {alertProfiles.map((profile) => (
                        <PerfilCard
                          key={profile.id}
                          profile={profile}
                          onClick={() => setSelectedProfile(profile)}
                        />
                      ))}
                    </div>
                  </div>
                ) : (
                  <div className="flex flex-col items-center justify-center py-10 gap-2 text-center border border-dashed border-border rounded-lg">
                    <span className="text-2xl">✅</span>
                    <p className="text-sm font-medium">
                      Nenhum aluno em alerta no momento
                    </p>
                    <p className="text-xs text-muted-foreground max-w-xs">
                      Quando a Oriun identificar sinais consistentes de desengajamento,
                      eles aparecerão aqui organizados por prioridade de risco.
                    </p>
                  </div>
                )}
              </div>

              <ProfileDetail
                profile={selectedProfile}
                onClose={() => setSelectedProfile(null)}
              />
            </div>
          )}

          {activeTab === "alunos" && currentStudent && (
            <div className="space-y-8">
              <div className="rounded-xl border border-border bg-card p-6 shadow-sm flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-center gap-4">
                  <img
                    src={currentStudent.foto}
                    alt={currentStudent.nome}
                    className="w-14 h-14 rounded-full border object-cover"
                  />
                  <div>
                    <p className="text-xs text-muted-foreground mb-1">
                      Seu perfil na Oriun
                    </p>
                    <h2 className="text-lg font-semibold">
                      {currentStudent.nome}
                    </h2>
                    <p className="text-xs text-muted-foreground">
                      {currentStudent.cargo} • {currentStudent.area} •{" "}
                      {currentStudent.localizacao}
                    </p>
                  </div>
                </div>

                <div className="flex flex-col items-start sm:items-end gap-1 text-xs">
                  <span className="px-3 py-1 rounded-full bg-sky-500/10 text-sky-400 font-medium">
                    Foco atual: desenvolvimento de habilidades técnicas e
                    emocionais
                  </span>
                  <span className="text-[11px] text-muted-foreground">
                    As recomendações abaixo são baseadas no seu comportamento,
                    engajamento e histórico acadêmico.
                  </span>
                </div>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                <div className="rounded-xl border border-border bg-card p-6 shadow-sm space-y-3">
                  <h3 className="text-sm font-semibold">Habilidades</h3>
                  <p className="text-xs text-muted-foreground">
                    Conjunto de competências mais fortes identificadas ao longo
                    das suas aulas e atividades.
                  </p>

                  <div className="space-y-3">
                    <div>
                      <p className="text-[11px] font-medium text-muted-foreground mb-1">
                        Técnicas
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {(currentStudent.habilidadesTecnicas || []).map(
                          (skill) => (
                            <span
                              key={skill}
                              className="px-2 py-1 rounded-full bg-sky-500/10 text-[11px] text-sky-300"
                            >
                              {skill}
                            </span>
                          )
                        )}
                      </div>
                    </div>

                    <div>
                      <p className="text-[11px] font-medium text-muted-foreground mb-1">
                        Comportamentais
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {(currentStudent.softSkills || []).map((skill) => (
                          <span
                            key={skill}
                            className="px-2 py-1 rounded-full bg-emerald-500/10 text-[11px] text-emerald-300"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="rounded-xl border border-border bg-card p-6 shadow-sm space-y-3">
                  <h3 className="text-sm font-semibold">Melhorar</h3>
                  <p className="text-xs text-muted-foreground">
                    Áreas em que pequenos ajustes podem gerar um salto grande no
                    seu desempenho.
                  </p>
                  <ul className="space-y-2 text-xs">
                    {pontosMelhorar.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2 text-muted-foreground"
                      >
                        <span className="mt-[3px] h-1.5 w-1.5 rounded-full bg-amber-400" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                <div className="rounded-xl border border-border bg-card p-6 shadow-sm space-y-3">
                  <h3 className="text-sm font-semibold">
                    Sugestões de crescimento
                  </h3>
                  <p className="text-xs text-muted-foreground">
                    Caminhos práticos que a Oriun enxerga para você continuar
                    evoluindo ao longo do curso.
                  </p>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="rounded-lg bg-muted/40 p-3 space-y-2">
                      <p className="text-xs font-semibold">Atividades sugeridas</p>
                      <ul className="space-y-1 text-[11px] text-muted-foreground list-disc list-inside">
                        <li>Participar de um grupo de estudo semanal com colegas.</li>
                        <li>Assumir um pequeno papel de liderança em um projeto de grupo.</li>
                        <li>Reservar 1h por semana para revisar conteúdos-chave da disciplina.</li>
                        <li>Registrar, em um diário rápido, o que aprendeu a cada semana.</li>
                      </ul>
                    </div>

                    <div className="rounded-lg bg-muted/40 p-3 space-y-2">
                      <p className="text-xs font-semibold">Palestras sugeridas</p>
                      <ul className="space-y-1 text-[11px] text-muted-foreground list-disc list-inside">
                        <li>Palestras sobre carreira na área de {currentStudent.area}.</li>
                        <li>Talks sobre saúde mental e organização de rotina para universitários.</li>
                        <li>Encontros com ex-alunos que passaram por desafios parecidos.</li>
                        <li>Eventos sobre inovação, IA e futuro do trabalho.</li>
                      </ul>
                    </div>
                  </div>

                  {sugestoesCrescimento.length > 0 && (
                    <div className="space-y-2 pt-2">
                      <p className="text-[11px] font-medium text-muted-foreground">
                        Outras trilhas recomendadas para o seu desenvolvimento:
                      </p>
                      <div className="grid gap-2 sm:grid-cols-2">
                        {sugestoesCrescimento.map((sugestao) => (
                          <div
                            key={sugestao.titulo}
                            className="rounded-md border border-dashed border-border/60 p-2 space-y-1"
                          >
                            <p className="text-[11px] font-semibold">
                              {sugestao.titulo}
                            </p>
                            <p className="text-[11px] text-muted-foreground">
                              {sugestao.descricao}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  <p className="text-xs text-muted-foreground italic pt-2">
                    Você não precisa acertar tudo de primeira — precisa apenas continuar
                    aparecendo, pedindo ajuda quando necessário e dando um passo de cada vez.
                    O resto, a gente constrói junto ao longo do caminho. 💫
                  </p>
                </div>

                <div className="rounded-xl border border-border bg-card p-6 shadow-sm space-y-3">
                  <h3 className="text-sm font-semibold">Ao decorrer do curso</h3>
                  <p className="text-xs text-muted-foreground">
                    Evolução por semestre combinando nota, presença e sinais de desenvolvimento
                    de habilidades ao longo da sua jornada.
                  </p>

                  <div className="space-y-4 pt-2">
                    {progressoSemestre.map((sem) => (
                      <div
                        key={sem.semestre}
                        className="rounded-lg bg-muted/40 p-3 space-y-3"
                      >
                        <div className="flex items-center justify-between text-xs">
                          <span className="font-semibold">{sem.semestre}</span>
                          <span className="text-[11px] text-muted-foreground">
                            Principal habilidade:{" "}
                            <span className="font-medium text-sky-300">
                              {sem.principalHabilidade}
                            </span>
                          </span>
                        </div>

                        <div className="space-y-2 text-[11px]">
                          <div>
                            <div className="flex items-center justify-between mb-1">
                              <span className="text-muted-foreground">Nota geral</span>
                              <span className="font-medium">
                                {sem.nota.toFixed(1)}/10
                              </span>
                            </div>
                            <div className="h-2 rounded-full bg-muted overflow-hidden">
                              <div
                                className="h-full bg-gradient-to-r from-emerald-400 to-sky-500"
                                style={{
                                  width: `${Math.min(100, sem.nota * 10)}%`,
                                }}
                              />
                            </div>
                          </div>

                          <div>
                            <div className="flex items-center justify-between mb-1">
                              <span className="text-muted-foreground">Presença</span>
                              <span className="font-medium">{sem.presenca}%</span>
                            </div>
                            <div className="h-2 rounded-full bg-muted overflow-hidden">
                              <div
                                className="h-full bg-gradient-to-r from-sky-400 to-indigo-500"
                                style={{
                                  width: `${Math.min(100, sem.presenca)}%`,
                                }}
                              />
                            </div>
                          </div>
                        </div>

                        <div className="pt-1">
                          <p className="text-[11px] font-medium text-muted-foreground mb-1">
                            Habilidades novas
                          </p>
                          <div className="flex flex-wrap gap-2">
                            {sem.habilidadesNovas.map((hab) => (
                              <span
                                key={hab}
                                className="px-2 py-1 rounded-full bg-sky-500/10 text-[11px] text-sky-300"
                              >
                                {hab}
                              </span>
                            ))}
                          </div>
                        </div>

                        <div className="grid gap-1 text-[11px] text-muted-foreground pt-1">
                          <p>
                            <span className="font-medium text-emerald-400">
                              Pontos fortes:
                            </span>{" "}
                            {sem.pontosFortes}
                          </p>
                          <p>
                            <span className="font-medium text-amber-400">
                              A melhorar:
                            </span>{" "}
                            {sem.aMelhorar}
                          </p>
                          <p>
                            <span className="font-medium text-sky-400">
                              Maior identificação:
                            </span>{" "}
                            {sem.maiorIdentificacao}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === "professores" && (
            <div className="space-y-8">
              <div className="rounded-xl border border-border bg-card p-6 shadow-sm space-y-4">
                <h3 className="text-sm font-semibold">Engajamento por sala</h3>
                <p className="text-xs text-muted-foreground">
                  Cada barra representa o nível médio de engajamento emocional e
                  participativo em cada turma ao longo do último mês.
                </p>

                <div className="space-y-3 pt-2">
                  {engajamentoPorSala.map((item) => (
                    <div key={item.turma} className="space-y-1">
                      <div className="flex items-center justify-between text-xs">
                        <span className="font-medium">{item.turma}</span>
                        <span className="text-muted-foreground">
                          {item.engajamento}%
                        </span>
                      </div>
                      <div className="h-2 rounded-full bg-muted overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-[#00b4ff] to-[#8b5cf6]"
                          style={{ width: `${item.engajamento}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>

                <p className="text-[11px] text-muted-foreground pt-2">
                  Esses dados combinam expressões faciais, atenção ao quadro,
                  participação em fala e permanência em aula.
                </p>
              </div>

              <div className="rounded-xl border border-border bg-card p-6 shadow-sm space-y-4">
                <div className="flex items-center justify-between gap-3">
                  <h3 className="text-sm font-semibold">Experimentação pedagógica</h3>

                  <button
                    type="button"
                    className="rounded-full px-6 py-2 border-transparent bg-gradient-to-r from-[#00b4ff] to-[#8b5cf6] text-white text-sm font-medium shadow-sm hover:opacity-95 transition"
                  >
                    Adicionar experimentação
                  </button>
                </div>

                <p className="text-xs text-muted-foreground">
                  Comparativo entre metodologias aplicadas e o ganho médio observado
                  em engajamento e participação dos alunos.
                </p>

                <div className="space-y-3 pt-2">
                  {experimentacoes.map((metodo) => (
                    <div key={metodo.metodologia} className="space-y-1">
                      <div className="flex items-center justify-between text-xs">
                        <span className="font-medium">{metodo.metodologia}</span>
                        <span className="text-emerald-400 font-semibold">
                          +{metodo.impacto} pts
                        </span>
                      </div>
                      <div className="h-2 rounded-full bg-muted overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-emerald-400 to-sky-500"
                          style={{
                            width: `${Math.min(100, 20 + metodo.impacto * 3)}%`,
                          }}
                        />
                      </div>
                      <p className="text-[11px] text-muted-foreground">
                        {metodo.descricao}
                      </p>
                    </div>
                  ))}
                </div>

                <p className="text-[11px] text-muted-foreground pt-2">
                  A Oriun permite testar combinações de métodos e acompanhar,
                  aula a aula, qual abordagem mantém a turma mais presente e ativa.
                </p>
              </div>
            </div>
          )}
        </section>
      </div>
    </div>
  );
};

export default RedeSocial;
