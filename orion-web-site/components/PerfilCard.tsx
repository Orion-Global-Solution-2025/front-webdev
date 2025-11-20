import React from "react";
import { MapPin, GraduationCap, Award } from "lucide-react";
import FlagTipo from "./ui/FlagTipo";
import type { Profile } from "../src/data/ProfilesData";

interface PerfilCardProps {
  profile: Profile;
  onClick?: () => void; 
}

export default function PerfilCard({ profile, onClick }: PerfilCardProps) {
  return (
    <div
      className="w-full max-w-md bg-white rounded-xl border p-6 shadow-sm cursor-pointer hover:shadow-md transition"
      onClick={onClick}
    >
      <div className="flex items-center gap-4">
        <img
          src={profile.foto}
          alt={profile.nome}
          className="w-14 h-14 rounded-full border object-cover"
        />
        <div>
          <h2 className="text-xl font-semibold text-gray-900">{profile.nome}</h2>
          <p className="text-gray-600 text-sm">{profile.cargo}</p>
          <div className="flex items-center gap-1 text-gray-500 text-xs mt-1">
            <MapPin size={14} />
            <span>{profile.localizacao}</span>
          </div>
        </div>
      </div>

      <p className="text-gray-700 text-sm mt-4 leading-relaxed">{profile.resumo}</p>

      <div className="mt-4">
        <p className="text-gray-600 text-sm font-medium mb-2">Área</p>
        <FlagTipo active>{profile.area}</FlagTipo>
      </div>

      <div className="mt-4">
        <p className="text-gray-600 text-sm font-medium mb-2">Habilidades Técnicas</p>
        <div className="flex flex-wrap gap-2">
          {profile.habilidadesTecnicas.map((skill, idx) => (
            <FlagTipo key={idx}>{skill}</FlagTipo>
          ))}
        </div>
      </div>

      <div className="flex items-center gap-6 mt-6 text-gray-500 text-xs font-medium">
        <div className="flex items-center gap-1">
          <GraduationCap size={14} />
          <span>{profile.formacao.length} formação{profile.formacao.length > 1 ? 'es' : ''}</span>
        </div>
        <div className="flex items-center gap-1">
          <Award size={14} />
          <span>{profile.certificacoes.length} certificado{profile.certificacoes.length > 1 ? 's' : ''}</span>
        </div>
      </div>
    </div>
  );
}
