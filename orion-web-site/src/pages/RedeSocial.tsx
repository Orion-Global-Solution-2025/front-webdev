

import { useState } from "react";
import FlagTipo from "../../components/ui/FlagTipo";
import { SearchBar } from "../../components/ui/SearchBar";
import  PerfilCard from "../../components/PerfilCard";
import  ProfileDetail from "../../components/PerfilDetalhes";
import type { Profile } from "../data/ProfilesData";
import { profiles } from "../data/ProfilesData";

const RedeSocial = ({ theme }: { theme?: 'light' | 'dark' }) => {
  const isDark = theme === 'dark';
  const [selectedProfile, setSelectedProfile] = useState<Profile | null>(
    profiles[0] || null
  );

  return (
    <div className={isDark ? 'bg-background text-foreground' : 'bg-white text-gray-800'}>
      <section className="space-y-6">
        <header className="space-y-3">
          <p className="text-sm opacity-70">Teste</p>

          <div className="flex flex-wrap gap-2">
            <FlagTipo>Exemplo1</FlagTipo>
            <FlagTipo active>Exemplo FlagTipo</FlagTipo>
          </div>

          <SearchBar />
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {profiles.map((profile) => (
            <PerfilCard
              key={profile.id}
              profile={profile}
              onClick={() => setSelectedProfile(profile)}
            />
          ))}
        </div>

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
