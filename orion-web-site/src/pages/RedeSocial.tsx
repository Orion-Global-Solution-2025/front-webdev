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

  return (
    <div
      className={
        isDark ? "bg-background text-foreground" : "bg-white text-gray-800"
      }
    >
      <section className="space-y-6">
        <header className="space-y-3">
          <p className="text-sm opacity-70">Teste</p>

          <div className="flex flex-wrap gap-2">
            <FlagTipo>Exemplo1</FlagTipo>
            <FlagTipo active>Exemplo FlagTipo</FlagTipo>
          </div>

          <SearchBar
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Buscar por nome, área ou habilidade..."
          />
        </header>

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

        <p className="text-sm opacity-70">Teste2</p>
      </section>
    </div>
  );
};

export default RedeSocial;
