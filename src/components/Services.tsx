import { motion } from "framer-motion";
import {
  Gift,
  Users,
  Bot,
  ExternalLink,
  CheckCircle2,
  Zap,
  ShieldCheck,
  Rocket,
} from "lucide-react";

const solutions = [
  {
    id: "maxxi",
    icon: Gift,
    title: "Maxxi Bônus",
    tagline: "Cashback & Indicação no WhatsApp",
    description:
      "Sistema inteligente de cashback e indicação integrado ao WhatsApp. Seus clientes ganham bônus a cada compra e indicam amigos, criando um ciclo de fidelização e aquisição orgânica.",
    features: [
      "Cashback automático por compra",
      "Programa de indicação integrado",
      "Notificações via WhatsApp",
      "Painel completo de gestão",
    ],
    site: "https://maxxibonus.com.br",
  },
  {
    id: "clube",
    icon: Users,
    title: "Clube Indica",
    tagline: "Indicações White-Label",
    description:
      "O sistema de indicação White-Label mais completo do Brasil. Crie seu próprio programa de indicações personalizado, com a sua marca, suas regras e suas recompensas.",
    features: [
      "100% personalizável com sua marca",
      "Regras e recompensas flexíveis",
      "Relatórios em tempo real",
      "Integração com seu site",
    ],
    site: "https://clubeindica.com.br",
  },
  {
    id: "zap",
    icon: Bot,
    title: "ZapFunnels",
    tagline: "IA & Automação no WhatsApp",
    description:
      "Automatize seu atendimento e vendas com agentes de IA via WhatsApp. Crie funis de conversão, disparos em massa segmentados e atendimento 24/7 — tudo onde seus clientes já estão.",
    features: [
      "Agentes de IA inteligentes",
      "Disparos em massa segmentados",
      "Funis de conversão automáticos",
      "Atendimento 24/7",
    ],
    site: "https://zapfunnels.com.br",
  },
];

const benefits = [
  { icon: Zap, title: "Implantação rápida", text: "Comece a usar em poucos dias" },
  { icon: ShieldCheck, title: "Pronto para escalar", text: "Infraestrutura robusta e segura" },
  { icon: Rocket, title: "Resultados comprovados", text: "Centenas de empresas usando" },
];

const Services = () => {
  return (
    <section id="servicos" className="py-24 lg:py-32">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16 max-w-2xl mx-auto"
        >
          <span className="text-sm font-semibold gradient-text uppercase tracking-widest">
            Plataformas Prontas
          </span>
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mt-3 leading-tight">
            Soluções de Mercado
          </h2>
          <p className="text-muted-foreground mt-5 text-lg">
            Plataformas prontas para usar, testadas e validadas por centenas de empresas.
            Contrate, configure e comece a vender mais hoje mesmo.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid lg:grid-cols-3 gap-6 mb-16">
          {solutions.map((s, i) => (
            <motion.div
              key={s.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative rounded-3xl border border-border bg-background p-8 hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 overflow-hidden flex flex-col"
            >
              {/* Glow */}
              <div className="absolute -top-20 -right-20 w-48 h-48 gradient-bg opacity-0 group-hover:opacity-10 blur-3xl rounded-full transition-opacity duration-500" />

              <div className="relative flex flex-col flex-1">
                {/* Icon */}
                <div className="w-16 h-16 rounded-2xl gradient-bg flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <s.icon className="w-8 h-8 text-primary-foreground" />
                </div>

                {/* Title + tagline */}
                <div className="mb-4">
                  <h3 className="text-2xl font-bold text-foreground">{s.title}</h3>
                  <p className="text-sm font-semibold text-primary mt-1">{s.tagline}</p>
                </div>

                {/* Description */}
                <p className="text-muted-foreground leading-relaxed mb-6 text-sm">
                  {s.description}
                </p>

                {/* Features */}
                <ul className="space-y-2.5 mb-8 flex-1">
                  {s.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm text-foreground">
                      <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <a
                  href={s.site}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 gradient-bg px-6 py-3 rounded-full text-primary-foreground font-semibold text-sm hover:opacity-90 transition-opacity w-full"
                >
                  Conhecer plataforma
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Benefits bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative rounded-3xl border border-border bg-secondary/40 p-8 lg:p-10 overflow-hidden"
        >
          <div className="absolute -top-20 -left-20 w-64 h-64 gradient-bg opacity-10 blur-3xl rounded-full" />
          <div className="relative grid sm:grid-cols-3 gap-8">
            {benefits.map((b) => (
              <div key={b.title} className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-background border border-border flex items-center justify-center shrink-0">
                  <b.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-foreground">{b.title}</h4>
                  <p className="text-sm text-muted-foreground mt-1">{b.text}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
