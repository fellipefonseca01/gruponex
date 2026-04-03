import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Code, Gift, Users, Bot, ExternalLink } from "lucide-react";

const solutions = [
  {
    id: "nex",
    icon: Code,
    title: "Nex Tecnologia e Marketing",
    shortTitle: "Nex Tecnologia",
    description:
      "A Nex oferece soluções completas em tecnologia e marketing digital para empresas que desejam se destacar no mercado. Desde a criação de sites e aplicações de alta performance até estratégias avançadas de tráfego pago, SEO e redes sociais — tudo pensado para gerar resultados reais e mensuráveis para o seu negócio.",
    site: "https://nextecnologia.com.br",
  },
  {
    id: "maxxi",
    icon: Gift,
    title: "Maxxi Bônus",
    shortTitle: "Maxxi Bônus",
    description:
      "O Maxxi Bônus é um sistema inteligente de cashback e indicação integrado ao WhatsApp. Seus clientes ganham bônus a cada compra e podem indicar amigos, criando um ciclo de fidelização e aquisição orgânica que impulsiona suas vendas sem aumentar o custo de marketing.",
    site: "https://maxxibonus.com.br",
  },
  {
    id: "clube",
    icon: Users,
    title: "Clube Indica",
    shortTitle: "Clube Indica",
    description:
      "O sistema de indicação White-Label mais completo do Brasil. O Clube Indica permite que qualquer empresa crie seu próprio programa de indicações personalizado, com a sua marca, suas regras e suas recompensas. Transforme seus clientes satisfeitos em verdadeiros promotores do seu negócio.",
    site: "https://clubeindica.com.br",
  },
  {
    id: "zap",
    icon: Bot,
    title: "ZapFunnels",
    shortTitle: "ZapFunnels",
    description:
      "Automatize seu atendimento e vendas com agentes de inteligência artificial via WhatsApp. O ZapFunnels permite criar funis de conversão, realizar disparos em massa segmentados e oferecer atendimento 24/7 com IA — tudo dentro do WhatsApp, onde seus clientes já estão.",
    site: "https://zapfunnels.com.br",
  },
];

const Services = () => {
  const [activeId, setActiveId] = useState(solutions[0].id);
  const active = solutions.find((s) => s.id === activeId)!;

  return (
    <section id="servicos" className="py-24 lg:py-32">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold gradient-text uppercase tracking-widest">
            Soluções
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mt-3">
            Nossas soluções
          </h2>
          <p className="text-muted-foreground mt-4 max-w-lg mx-auto">
            Ferramentas e estratégias completas para transformar e escalar o seu negócio.
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto flex flex-col lg:flex-row gap-6">
          {/* Menu lateral */}
          <div className="lg:w-64 shrink-0 flex flex-row lg:flex-col gap-2 overflow-x-auto lg:overflow-x-visible pb-2 lg:pb-0">
            {solutions.map((s) => {
              const isActive = s.id === activeId;
              return (
                <button
                  key={s.id}
                  onClick={() => setActiveId(s.id)}
                  className={`relative flex items-center gap-3 px-5 py-3.5 rounded-xl text-left text-sm font-medium whitespace-nowrap transition-all duration-300 ${
                    isActive
                      ? "bg-background shadow-md border border-border text-foreground"
                      : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="active-indicator"
                      className="absolute left-0 top-3 bottom-3 w-1 rounded-full gradient-bg"
                      transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    />
                  )}
                  <s.icon className={`w-5 h-5 shrink-0 ${isActive ? "text-primary" : ""}`} />
                  <span className="hidden lg:inline">{s.shortTitle}</span>
                  <span className="lg:hidden">{s.shortTitle}</span>
                </button>
              );
            })}
          </div>

          {/* Conteúdo */}
          <div className="flex-1 min-h-[340px] relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={active.id}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="rounded-2xl border border-border bg-background p-8 lg:p-10"
              >
                {/* Logo placeholder */}
                <div className="w-20 h-20 rounded-2xl gradient-bg flex items-center justify-center mb-6">
                  <active.icon className="w-10 h-10 text-primary-foreground" />
                </div>

                <h3 className="text-2xl font-bold text-foreground mb-3">
                  {active.title}
                </h3>

                <p className="text-muted-foreground leading-relaxed mb-8 max-w-xl">
                  {active.description}
                </p>

                <a
                  href={active.site}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 gradient-bg px-6 py-3 rounded-full text-primary-foreground font-semibold text-sm hover:opacity-90 transition-opacity"
                >
                  Visitar site
                  <ExternalLink className="w-4 h-4" />
                </a>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
