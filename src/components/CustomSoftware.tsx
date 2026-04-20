import { motion } from "framer-motion";
import {
  Users,
  Heart,
  GraduationCap,
  ShoppingCart,
  Briefcase,
  Calendar,
  BarChart3,
  Building2,
  Sparkles,
  Code2,
  Cog,
  Rocket,
} from "lucide-react";
import customSoftwareImg from "@/assets/custom-software.jpg";

const solutions = [
  { icon: Users, title: "CRM Personalizado", description: "Gestão completa de clientes e vendas" },
  { icon: Briefcase, title: "Soluções para RH", description: "Recrutamento, ponto e folha integrados" },
  { icon: Heart, title: "Sistemas para Clínicas", description: "Prontuários, agenda e faturamento" },
  { icon: GraduationCap, title: "Plataformas EAD", description: "Cursos online e gestão de alunos" },
  { icon: ShoppingCart, title: "E-commerce sob Medida", description: "Lojas virtuais com regras próprias" },
  { icon: Calendar, title: "Sistemas de Agendamento", description: "Reservas online automatizadas" },
  { icon: BarChart3, title: "Dashboards e BI", description: "Relatórios e indicadores em tempo real" },
  { icon: Building2, title: "ERP para PMEs", description: "Gestão financeira, estoque e operações" },
];

const process = [
  { icon: Sparkles, title: "Descoberta", text: "Entendemos seu negócio" },
  { icon: Code2, title: "Desenvolvimento", text: "Construímos com tecnologia de ponta" },
  { icon: Cog, title: "Integração", text: "Conectamos com seus sistemas" },
  { icon: Rocket, title: "Lançamento", text: "Suporte e evolução contínua" },
];

const CustomSoftware = () => {
  return (
    <section id="softwares" className="py-24 lg:py-32 bg-secondary/30">
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
            Desenvolvimento sob demanda
          </span>
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mt-3 leading-tight">
            Criação de Softwares e Sistemas sob Medida
          </h2>
          <p className="text-muted-foreground mt-5 text-lg">
            Transformamos a operação da sua empresa com sistemas exclusivos, desenvolvidos do zero
            para resolver os desafios reais do seu negócio.
          </p>
        </motion.div>

        {/* Imagem + Soluções */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
          {/* Imagem */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="absolute inset-0 gradient-bg blur-3xl opacity-20 rounded-3xl" />
            <div className="relative rounded-3xl overflow-hidden border border-border shadow-2xl">
              <img
                src={customSoftwareImg}
                alt="Desenvolvimento de softwares e sistemas sob demanda"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>

            {/* Floating card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="absolute -bottom-6 -right-6 lg:-right-10 bg-background border border-border rounded-2xl p-5 shadow-xl max-w-[240px]"
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-xl gradient-bg flex items-center justify-center">
                  <Code2 className="w-5 h-5 text-primary-foreground" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Projetos entregues</p>
                  <p className="text-lg font-bold text-foreground">+150 sistemas</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Grid de soluções */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-foreground mb-2">
              O que podemos construir para você
            </h3>
            <p className="text-muted-foreground mb-8">
              Soluções pensadas para o seu segmento, com a sua identidade e os seus processos.
            </p>

            <div className="grid sm:grid-cols-2 gap-3">
              {solutions.map((s, i) => (
                <motion.div
                  key={s.title}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: i * 0.05 }}
                  className="group flex items-start gap-3 p-4 rounded-xl bg-background border border-border hover:border-primary/40 hover:shadow-md transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 group-hover:gradient-bg transition-all duration-300">
                    <s.icon className="w-5 h-5 text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-foreground leading-tight">
                      {s.title}
                    </h4>
                    <p className="text-xs text-muted-foreground mt-1 leading-snug">
                      {s.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Processo */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative rounded-3xl border border-border bg-background p-8 lg:p-12 overflow-hidden"
        >
          <div className="absolute -top-20 -right-20 w-64 h-64 gradient-bg opacity-10 blur-3xl rounded-full" />

          <div className="relative">
            <div className="text-center mb-10">
              <h3 className="text-2xl lg:text-3xl font-bold text-foreground">
                Como tiramos sua ideia do papel
              </h3>
              <p className="text-muted-foreground mt-3 max-w-xl mx-auto">
                Um processo claro e colaborativo, do briefing à entrega final.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {process.map((p, i) => (
                <motion.div
                  key={p.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="relative text-center"
                >
                  <div className="w-14 h-14 mx-auto rounded-2xl gradient-bg flex items-center justify-center mb-4 shadow-lg">
                    <p.icon className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <div className="text-xs font-semibold text-primary mb-1">
                    0{i + 1}
                  </div>
                  <h4 className="font-bold text-foreground mb-1">{p.title}</h4>
                  <p className="text-sm text-muted-foreground">{p.text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CustomSoftware;
