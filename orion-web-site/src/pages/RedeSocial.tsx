

import { useState, useMemo } from "react";
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
      <br/>
      <br/>
      <br/>
      <p>Teste</p>
      <FlagTipo >Exemplo1</FlagTipo>
      <FlagTipo active>Exemplo FlagTipo</FlagTipo>
      <SearchBar/>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {profiles.map((profile) => (
          <PerfilCard
          key={profile.id}
          profile={profile}
          onClick={() => setSelectedProfile(profile)}
          />
          ))}
</div>
      <ProfileDetail profile={selectedProfile} onClose={() => setSelectedProfile(null)}/>
    
      <p>Teste2</p>
    </div>
  );
};

export default RedeSocial;
