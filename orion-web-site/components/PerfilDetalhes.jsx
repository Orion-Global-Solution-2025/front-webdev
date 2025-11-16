import { Profile } from "../src/data/ProfilesData";
import { Badge } from "./ui/badge";
import { Card } from "./ui/card";
import { Separator } from "./ui/separador";
import { MapPin, Briefcase, GraduationCap, Award, Globe, Heart, ExternalLink } from "lucide-react";
import { Button } from "./ui/button";


const ProfileDetail = ({ profile, onClose }) => {
  return (
    <div className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm flex items-center justify-center p-4">
      <Card className="w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-card">
        <div className="p-6 md:p-8">
          <div className="flex justify-between items-start mb-6">
            <div className="flex items-start gap-4">
              <img 
                src={profile.foto} 
                alt={profile.nome}
                className="w-24 h-24 rounded-full object-cover border-4 border-primary/20"
              />
              <div>
                <h2 className="text-2xl font-bold text-card-foreground mb-2">{profile.nome}</h2>
                <p className="text-muted-foreground flex items-center gap-2">
                  <Briefcase className="w-4 h-4" />
                  {profile.cargo}
                </p>
                <p className="text-muted-foreground flex items-center gap-2 mt-1">
                  <MapPin className="w-4 h-4" />
                  {profile.localizacao}
                </p>
                <Badge className="mt-2">{profile.area}</Badge>
              </div>
            </div>
            <Button variant="outline" onClick={onClose}>
              Fechar
            </Button>
          </div>

          <p className="text-card-foreground mb-6">{profile.resumo}</p>

          <Separator className="my-6" />

          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-card-foreground mb-3 flex items-center gap-2">
                <Award className="w-5 h-5 text-primary" />
                Habilidades Técnicas
              </h3>
              <div className="flex flex-wrap gap-2">
                {profile.habilidadesTecnicas.map((skill, idx) => (
                  <Badge key={idx} variant="secondary">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-card-foreground mb-3 flex items-center gap-2">
                <Heart className="w-5 h-5 text-accent" />
                Soft Skills
              </h3>
              <div className="flex flex-wrap gap-2">
                {profile.softSkills.map((skill, idx) => (
                  <Badge key={idx} variant="outline">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>

            <Separator />

            <div>
              <h3 className="text-lg font-semibold text-card-foreground mb-3 flex items-center gap-2">
                <Briefcase className="w-5 h-5 text-primary" />
                Experiência Profissional
              </h3>
              <div className="space-y-4">
                {profile.experiencias.map((exp, idx) => (
                  <Card key={idx} className="p-4 bg-muted/50">
                    <h4 className="font-semibold text-card-foreground">{exp.cargo}</h4>
                    <p className="text-sm text-muted-foreground">{exp.empresa}</p>
                    <p className="text-xs text-muted-foreground mt-1">
                      {exp.inicio} - {exp.fim}
                    </p>
                    <p className="text-sm text-card-foreground mt-2">{exp.descricao}</p>
                  </Card>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-card-foreground mb-3 flex items-center gap-2">
                <GraduationCap className="w-5 h-5 text-primary" />
                Formação Acadêmica
              </h3>
              <div className="space-y-3">
                {profile.formacao.map((edu, idx) => (
                  <Card key={idx} className="p-4 bg-muted/50">
                    <h4 className="font-semibold text-card-foreground">{edu.curso}</h4>
                    <p className="text-sm text-muted-foreground">{edu.instituicao}</p>
                    <p className="text-xs text-muted-foreground mt-1">{edu.ano}</p>
                  </Card>
                ))}
              </div>
            </div>

            {profile.projetos.length > 0 && (
              <div>
                <h3 className="text-lg font-semibold text-card-foreground mb-3">Projetos</h3>
                <div className="space-y-3">
                  {profile.projetos.map((proj, idx) => (
                    <Card key={idx} className="p-4 bg-muted/50">
                      <div className="flex items-start justify-between">
                        <div>
                          <h4 className="font-semibold text-card-foreground">{proj.titulo}</h4>
                          <p className="text-sm text-card-foreground mt-2">{proj.descricao}</p>
                        </div>
                        <a 
                          href={proj.link} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-primary hover:text-primary/80"
                        >
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
            )}

            <div>
              <h3 className="text-lg font-semibold text-card-foreground mb-3 flex items-center gap-2">
                <Award className="w-5 h-5 text-accent" />
                Certificações
              </h3>
              <ul className="space-y-2">
                {profile.certificacoes.map((cert, idx) => (
                  <li key={idx} className="text-sm text-card-foreground flex items-start gap-2">
                    <span className="text-accent">•</span>
                    {cert}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-card-foreground mb-3 flex items-center gap-2">
                <Globe className="w-5 h-5 text-primary" />
                Idiomas
              </h3>
              <div className="flex flex-wrap gap-2">
                {profile.idiomas.map((lang, idx) => (
                  <Badge key={idx} variant="secondary">
                    {lang.idioma} - {lang.nivel}
                  </Badge>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-card-foreground mb-3">Áreas de Interesse</h3>
              <div className="flex flex-wrap gap-2">
                {profile.areaInteresses.map((interest, idx) => (
                  <Badge key={idx} variant="outline">
                    {interest}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default ProfileDetail;
