import { motion } from "framer-motion";
import { Code, BarChart3, Megaphone, Smartphone, Globe, Zap } from "lucide-react";

const services = [
  {
    icon: Code,
    title: "Desenvolvimento Web",
    description: "Sites e aplicações sob medida, com foco em performance e experiência do usuário.",
  },
  {
    icon: BarChart3,
    title: "Marketing Digital",
    description: "Estratégias completas de tráfego pago, SEO e redes sociais para escalar seus resultados.",
  },
  {
    icon: Megaphone,
    title: "Branding & Design",
    description: "Identidade visual marcante e materiais que comunicam o DNA da sua marca.",
  },
  {
    icon: Smartphone,
    title: "Aplicativos Mobile",
    description: "Apps nativos e multiplataforma que conectam sua empresa ao seu público.",
  },
  {
    icon: Globe,
    title: "E-commerce",
    description: "Lojas virtuais otimizadas para conversão e crescimento sustentável.",
  },
  {
    icon: Zap,
    title: "Automações",
    description: "Processos automatizados que economizam tempo e aumentam a eficiência.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" },
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
          <span className="text-sm font-semibold gradient-text uppercase tracking-widest">Serviços</span>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mt-3">
            O que fazemos de melhor
          </h2>
          <p className="text-muted-foreground mt-4 max-w-lg mx-auto">
            Soluções completas para posicionar sua empresa no mercado digital.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="group relative p-8 rounded-2xl border border-border bg-background hover:shadow-lg transition-shadow duration-300"
            >
              <div className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center mb-5">
                <service.icon className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{service.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
              {/* Gradient hover line */}
              <div className="absolute bottom-0 left-8 right-8 h-0.5 gradient-bg opacity-0 group-hover:opacity-100 transition-opacity rounded-full" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
