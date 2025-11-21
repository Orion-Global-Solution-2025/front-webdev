import { useState } from "react";
import Button from "./ui/button";
import { ArrowRight, Mail, CheckCircle2 } from "lucide-react";

const ComponenteAcao = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isSuccessOpen, setIsSuccessOpen] = useState(false);

  const [formData, setFormData] = useState({
    email: "",
    telefone: "",
    mensagem: "",
    data: "",
    hora: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsFormOpen(false);
    setIsSuccessOpen(true);
  };

  const handleEmailClick = () => {
    const subject = encodeURIComponent("Contato com especialista Orion");
    const body = encodeURIComponent(
      "Olá, gostaria de falar com um especialista sobre o Orion para minha instituição."
    );
    window.location.href = `mailto:contato@orion.tech?subject=${subject}&body=${body}`;
  };

  return (
    <section
      id="contato"
      className="py-24 bg-gradient-primary relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-4xl md:text-6xl font-bold text-white">
            Pronto para Transformar sua Instituição?
          </h2>

          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Junte-se às universidades líderes que já estão usando Orion para
            criar experiências educacionais excepcionais baseadas em dados
            emocionais.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button
              size="lg"
              variant="outline"
              className="bg-white text-primary hover:bg-white/90 border-0 group shadow-glow"
              onClick={() => setIsFormOpen(true)}
            >
              Solicitar Demonstração
              <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </Button>

            <Button
              size="lg"
              variant="ghost"
              className="text-white hover:bg-white/10 border-2 border-white/30"
              onClick={handleEmailClick}
            >
              <Mail className="mr-2" />
              Falar com Especialista
            </Button>
          </div>

          <div className="pt-8 flex flex-wrap justify-center gap-8 text-white/80 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-white" />
              <span>Implementação rápida</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-white" />
              <span>Suporte especializado</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-white" />
              <span>Sem contratos longos</span>
            </div>
          </div>
        </div>
      </div>

      {isFormOpen && (
        <div className="fixed inset-0 z-40 flex items-center justify-center bg-black/60 backdrop-blur-sm">
          <div className="w-full max-w-lg mx-4 rounded-2xl bg-card text-foreground shadow-2xl border border-border">
            <div className="flex items-center justify-between px-6 pt-5 pb-3 border-b border-border">
              <h3 className="text-lg font-semibold">
                Agendar conversa com especialista
              </h3>
              <button
                type="button"
                className="text-sm text-muted-foreground hover:text-foreground"
                onClick={() => setIsFormOpen(false)}
              >
                Fechar
              </button>
            </div>

            <form onSubmit={handleSubmit} className="px-6 pb-6 pt-4 space-y-4">
              <div className="space-y-1 text-left">
                <label className="text-xs font-medium text-muted-foreground">
                  E-mail
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-[#00b4ff]"
                  placeholder="voce@universidade.br"
                />
              </div>

              <div className="space-y-1 text-left">
                <label className="text-xs font-medium text-muted-foreground">
                  Telefone / WhatsApp
                </label>
                <input
                  type="tel"
                  name="telefone"
                  required
                  value={formData.telefone}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-[#00b4ff]"
                  placeholder="(11) 99999-9999"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
                <div className="space-y-1">
                  <label className="text-xs font-medium text-muted-foreground">
                    Data sugerida
                  </label>
                  <input
                    type="date"
                    name="data"
                    required
                    value={formData.data}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-[#00b4ff]"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-medium text-muted-foreground">
                    Horário sugerido
                  </label>
                  <input
                    type="time"
                    name="hora"
                    required
                    value={formData.hora}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-[#00b4ff]"
                  />
                </div>
              </div>

              <div className="space-y-1 text-left">
                <label className="text-xs font-medium text-muted-foreground">
                  Mensagem
                </label>
                <textarea
                  name="mensagem"
                  rows={4}
                  value={formData.mensagem}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-[#00b4ff]"
                  placeholder="Conte rapidamente sobre sua instituição e o que você espera da reunião."
                />
              </div>

              <div className="flex justify-end gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setIsFormOpen(false)}
                  className="text-sm px-4 py-2 rounded-full border border-border text-muted-foreground hover:bg-muted/60"
                >
                  Cancelar
                </button>
                <Button type="submit" showArrow>
                  Enviar pedido de reunião
                </Button>
              </div>
            </form>
          </div>
        </div>
      )}

      {isSuccessOpen && (
        <div className="fixed inset-0 z-40 flex items-center justify-center bg-black/60 backdrop-blur-sm">
          <div className="w-full max-w-md mx-4 rounded-2xl bg-card text-foreground shadow-2xl border border-border px-6 py-8 text-center space-y-4">
            <div className="flex justify-center">
              <div className="w-14 h-14 rounded-full bg-emerald-500/10 flex items-center justify-center">
                <CheckCircle2 className="w-8 h-8 text-emerald-400" />
              </div>
            </div>
            <h3 className="text-xl font-semibold">Reunião agendada!</h3>
            <p className="text-sm text-muted-foreground">
              Recebemos seu pedido e um especialista Orion entrará em contato
              para confirmar o melhor horário com você.
            </p>
            <Button onClick={() => setIsSuccessOpen(false)}>Fechar</Button>
          </div>
        </div>
      )}
    </section>
  );
};

export default ComponenteAcao;
