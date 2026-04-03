import { motion } from "framer-motion";
import { Code, Gift, Users, Bot } from "lucide-react";

const solutions = [
  {
    icon: Code,
    title: "Nex Tecnologia e Marketing",
    description: "Soluções completas em tecnologia e marketing digital para posicionar sua empresa no mercado e gerar resultados reais.",
  },
  {
    icon: Gift,
    title: "Maxxi Bônus",
    description: "Sistema de cashback e indicação via WhatsApp que fideliza clientes e impulsiona suas vendas de forma inteligente.",
  },
  {
    icon: Users,
    title: "Clube Indica",
    description: "O sistema de indicação White-Label mais completo do Brasil. Transforme seus clientes em promotores da sua marca.",
  },
  {
    icon: Bot,
    title: "ZapFunnels",
    description: "Agentes de IA via WhatsApp e disparo em massa. Automatize conversas e escale seu atendimento com inteligência artificial.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" as const },
  }),
};

const Services = () => {
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
          <span className="text-sm font-semibold gradient-text uppercase tracking-widest">Soluções</span>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mt-3">
            Nossas soluções
          </h2>
          <p className="text-muted-foreground mt-4 max-w-lg mx-auto">
            Ferramentas e estratégias completas para transformar e escalar o seu negócio.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {solutions.map((solution, i) => (
            <motion.div
              key={solution.title}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="group relative p-8 rounded-2xl border border-border bg-background hover:shadow-lg transition-shadow duration-300"
            >
              <div className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center mb-5">
                <solution.icon className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{solution.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{solution.description}</p>
              <div className="absolute bottom-0 left-8 right-8 h-0.5 gradient-bg opacity-0 group-hover:opacity-100 transition-opacity rounded-full" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
