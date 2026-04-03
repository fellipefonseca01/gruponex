import { motion } from "framer-motion";

const stats = [
  { value: "200+", label: "Projetos entregues" },
  { value: "50+", label: "Clientes ativos" },
  { value: "98%", label: "Satisfação" },
  { value: "5+", label: "Anos de mercado" },
];

const About = () => {
  return (
    <section id="sobre" className="py-24 lg:py-32 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-sm font-semibold gradient-text uppercase tracking-widest">Sobre nós</span>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mt-3 mb-6">
              Transformamos ideias em{" "}
              <span className="gradient-text">resultados digitais</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              A Nex é uma empresa que nasceu da paixão por tecnologia e marketing. Acreditamos que toda empresa merece ter acesso a soluções digitais de alto nível para competir e crescer no mercado atual.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Nossa equipe multidisciplinar combina criatividade, estratégia e tecnologia para entregar projetos que realmente fazem a diferença no resultado dos nossos clientes.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="p-6 rounded-2xl bg-background border border-border text-center"
              >
                <div className="text-3xl font-bold gradient-text mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
