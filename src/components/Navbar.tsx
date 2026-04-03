import { motion } from "framer-motion";
import logo from "@/assets/logo-nex.png";

const Navbar = () => {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border"
    >
      <div className="container mx-auto flex items-center justify-between h-20 px-6">
        <img src={logo} alt="Nex Tecnologia e Marketing" className="h-10" />
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-foreground">
          <a href="#inicio" className="hover:text-primary transition-colors">Início</a>
          <a href="#servicos" className="hover:text-primary transition-colors">Serviços</a>
          <a href="#sobre" className="hover:text-primary transition-colors">Sobre</a>
          <a href="#contato" className="hover:text-primary transition-colors">Contato</a>
        </div>
        <a
          href="#contato"
          className="gradient-bg px-5 py-2.5 rounded-full text-sm font-semibold text-primary-foreground hover:opacity-90 transition-opacity"
        >
          Fale Conosco
        </a>
      </div>
    </motion.nav>
  );
};

export default Navbar;
