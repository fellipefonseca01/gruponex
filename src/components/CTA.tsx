import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-24 lg:py-32">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-3xl gradient-bg p-12 lg:p-20 text-center overflow-hidden"
        >
          {/* Decorative circles */}
          <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-background/10 -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full bg-background/10 translate-y-1/2 -translate-x-1/2" />

          <div className="relative z-10">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary-foreground mb-4">
              Pronto para transformar seu negócio?
            </h2>
            <p className="text-primary-foreground/80 max-w-md mx-auto mb-8">
              Entre em contato e descubra como podemos ajudar sua empresa a crescer no digital.
            </p>
            <a
              href="#contato"
              className="inline-flex items-center gap-2 bg-background text-foreground px-8 py-3.5 rounded-full font-semibold hover:bg-background/90 transition-colors"
            >
              Fale com um especialista
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
