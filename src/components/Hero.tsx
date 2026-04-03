import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Subtle gradient orb */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] rounded-full gradient-bg opacity-[0.07] blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full gradient-bg opacity-[0.05] blur-3xl" />

      <div className="container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-3xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border bg-secondary text-sm text-muted-foreground mb-8">
            <span className="w-2 h-2 rounded-full gradient-bg" />
            Soluções que transformam negócios
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-foreground mb-6">
            Inovação e tecnologia para sua empresa{" "}
            <span className="gradient-text">crescer</span>
          </h1>

          <p className="text-lg text-muted-foreground max-w-xl mx-auto mb-10 leading-relaxed">
            Combinamos tecnologia de ponta e estratégias de marketing para transformar a presença digital da sua empresa e gerar resultados reais.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://wa.me/5537998024141?text=Ol%C3%A1%2C%20vim%20pelo%20site%20da%20Nex%20e%20gostaria%20de%20saber%20mais."
              target="_blank"
              rel="noopener noreferrer"
              className="gradient-bg px-8 py-3.5 rounded-full text-primary-foreground font-semibold hover:opacity-90 transition-opacity flex items-center gap-2"
            >
              Fale Conosco
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#servicos"
              className="px-8 py-3.5 rounded-full border border-border font-semibold hover:bg-secondary transition-colors text-foreground"
            >
              Nossas soluções
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
