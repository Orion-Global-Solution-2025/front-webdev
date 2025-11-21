import FlagTipo from "./ui/FlagTipo";
import Card from "./ui/card";
import { MapPin, Briefcase, GraduationCap, Award, Globe, Heart, ExternalLink } from "lucide-react";
import Button from "./ui/button";
import type { Profile } from "../src/data/ProfilesData";

interface ProfileDetailProps {
  profile: Profile | null;
  onClose?: () => void; 
}


const ProfileDetail = ({ profile, onClose }: ProfileDetailProps) => {
    if (!profile) {
    return (
      <Card className="p-6 bg-card text-center text-card-foreground">
        <p className="m-16">Nenhum perfil selecionado</p>

        <Button
          variant="outline"
          className="mt-4"
          onClick={() => {
            if (typeof window !== "undefined") {
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              });
            }
          }}
        >
          Subir para o Topo da Página
        </Button>
      </Card>
    );
  }


  return (
    <Card className="p-6 bg-card text-card-foreground mb-6">
      <div className="flex justify-between items-start mb-6">
        <div className="flex items-start gap-4">
          <img
            src={profile.foto}
            alt={profile.nome}
            className="w-24 h-24 rounded-full object-cover border-4 border-primary/20"
          />
          <div>
            <h2 className="text-2xl font-bold mb-2">{profile.nome}</h2>
            <p className="text-muted-foreground flex items-center gap-2">
              <Briefcase className="w-4 h-4" />
              {profile.cargo}
            </p>
            <p className="text-muted-foreground flex items-center gap-2 mt-1">
              <MapPin className="w-4 h-4" />
              {profile.localizacao}
            </p>
            <FlagTipo className="mt-2">{profile.area}</FlagTipo>
          </div>
        </div>
        {onClose && <Button variant="outline" onClick={onClose}>Fechar</Button>}
      </div>

      <p className="mb-6">{profile.resumo}</p>

      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
          <Award className="w-5 h-5 text-primary" />
          Habilidades Técnicas
        </h3>
        <div className="flex flex-wrap gap-2">
          {profile.habilidadesTecnicas.map((skill, idx) => (
            <FlagTipo key={idx} variant="secondary">{skill}</FlagTipo>
          ))}
        </div>
      </div>

      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
          <Heart className="w-5 h-5 text-accent" />
          Soft Skills
        </h3>
        <div className="flex flex-wrap gap-2">
          {profile.softSkills.map((skill, idx) => (
            <FlagTipo key={idx} variant="outline">{skill}</FlagTipo>
          ))}
        </div>
      </div>

      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
          <Briefcase className="w-5 h-5 text-primary" />
          Experiência Profissional
        </h3>
        <div className="space-y-4">
          {profile.experiencias.map((exp, idx) => (
            <Card key={idx} className="p-4 bg-muted/50">
              <h4 className="font-semibold">{exp.cargo}</h4>
              <p className="text-sm text-muted-foreground">{exp.empresa}</p>
              <p className="text-xs text-muted-foreground mt-1">{exp.inicio} - {exp.fim}</p>
              <p className="text-sm mt-2">{exp.descricao}</p>
            </Card>
          ))}
        </div>
      </div>

      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
          <GraduationCap className="w-5 h-5 text-primary" />
          Formação Acadêmica
        </h3>
        <div className="space-y-3">
          {profile.formacao.map((edu, idx) => (
            <Card key={idx} className="p-4 bg-muted/50">
              <h4 className="font-semibold">{edu.curso}</h4>
              <p className="text-sm text-muted-foreground">{edu.instituicao}</p>
              <p className="text-xs mt-1">{edu.ano}</p>
            </Card>
          ))}
        </div>
      </div>

      {profile.projetos.length > 0 && (
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-3">Projetos</h3>
          <div className="space-y-3">
            {profile.projetos.map((proj, idx) => (
              <Card key={idx} className="p-4 bg-muted/50">
                <div className="flex items-start justify-between">
                  <div>
                    <h4 className="font-semibold">{proj.titulo}</h4>
                    <p className="text-sm mt-2">{proj.descricao}</p>
                  </div>
                  <a href={proj.link} target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80">
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </Card>
            ))}
          </div>
        </div>
      )}

      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
          <Award className="w-5 h-5 text-accent" />
          Certificações
        </h3>
        <ul className="space-y-2">
          {profile.certificacoes.map((cert, idx) => (
            <li key={idx} className="flex items-start gap-2 text-sm">
              <span className="text-accent">•</span>
              {cert}
            </li>
          ))}
        </ul>
      </div>

      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
          <Globe className="w-5 h-5 text-primary" />
          Idiomas
        </h3>
        <div className="flex flex-wrap gap-2">
          {profile.idiomas.map((lang, idx) => (
            <FlagTipo key={idx} variant="secondary">
              {lang.idioma} - {lang.nivel}
            </FlagTipo>
          ))}
        </div>
      </div>

      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-3">Áreas de Interesse</h3>
        <div className="flex flex-wrap gap-2">
          {profile.areaInteresses.map((interest, idx) => (
            <FlagTipo key={idx} variant="outline">{interest}</FlagTipo>
          ))}
        </div>
      </div>
    </Card>
  );
};

export default ProfileDetail;
