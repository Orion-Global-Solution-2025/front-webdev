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

  const getTabTitle = () => {
    if (activeTab === "instituicoes") return "Para Instituições";
    if (activeTab === "professores") return "Para Professores";
    if (activeTab === "alunos") return "Para Alunos";
    return "";
  };

  return (
    <div
      className={
        isDark ? "bg-background text-foreground" : "bg-white text-gray-800"
      }
    >
      <div className="min-h-screen max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-12">
        <section className="space-y-8">
          <header className="space-y-4">
            {/* FLAGS clicáveis / tipo "abas" */}
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

            {/* A busca só faz sentido na aba de experiências */}
            {activeTab === "experiencias" && (
              <SearchBar
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Buscar por nome, área ou habilidade..."
              />
            )}
          </header>

          {/* CONTEÚDO DA ABA ATUAL */}
          {activeTab === "experiencias" ? (
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
          ) : (

            <div className="py-16 text-center space-y-3">
              <h2 className="text-2xl font-semibold">{getTabTitle()}</h2>
              <p className="text-sm text-muted-foreground max-w-md mx-auto">
                Conteúdo dessa seção ainda está em construção. Aqui você vai
                conseguir ver histórias, métricas e insights específicos
                para&nbsp;
                <span className="font-medium lowercase">
                  {getTabTitle()}
                </span>
                .
              </p>
            </div>
          )}
        </section>
      </div>
    </div>
  );
};

export default RedeSocial;
