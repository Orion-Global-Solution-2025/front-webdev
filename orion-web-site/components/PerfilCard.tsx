import React from "react";
import { MapPin, GraduationCap, Award } from "lucide-react";
import FlagTipo from "./ui/FlagTipo";

export default function PerfilCard() {
  return (
    <div className="w-full max-w-md bg-white rounded-xl border p-6 shadow-sm">
      <div className="flex items-center gap-4">
        <div className="w-14 h-14 rounded-full bg-gray-100 border" />
        <div>
          <h2 className="text-xl font-semibold text-gray-900">Ana Silva Costa</h2>
          <p className="text-gray-600 text-sm">Engenheira de Machine Learning</p>

          <div className="flex items-center gap-1 text-gray-500 text-xs mt-1">
            <MapPin size={14} />
            <span>São Paulo/SP</span>
          </div>
        </div>
      </div>

      <p className="text-gray-700 text-sm mt-4 leading-relaxed">
        Especialista em IA aplicada à educação e análise de sentimentos com 5+ anos
        de experiência
      </p>

      <div className="mt-4">
        <p className="text-gray-600 text-sm font-medium mb-2">Área</p>
        <FlagTipo active>Inteligência Artificial</FlagTipo>
      </div>
      <div className="mt-4">
        <p className="text-gray-600 text-sm font-medium mb-2">Habilidades Técnicas</p>

        <div className="flex flex-wrap gap-2">
          <FlagTipo>Python</FlagTipo>
          <FlagTipo>TensorFlow</FlagTipo>
          <FlagTipo>PyTorch</FlagTipo>
          <FlagTipo>+2</FlagTipo>
        </div>
      </div>
      <div className="flex items-center gap-6 mt-6 text-gray-500 text-xs font-medium">
        <div className="flex items-center gap-1">
          <GraduationCap size={14} />
          <span>1 formações</span>
        </div>

        <div className="flex items-center gap-1">
          <Award size={14} />
          <span>2 certificados</span>
        </div>
      </div>
    </div>
  );
}
