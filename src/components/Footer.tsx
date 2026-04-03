import logo from "@/assets/logo-nex.png";

const Footer = () => {
  return (
    <footer className="py-12 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <img src={logo} alt="Nex" className="h-8" />
          <div className="flex items-center gap-8 text-sm text-muted-foreground">
            <a href="#inicio" className="hover:text-foreground transition-colors">Início</a>
            <a href="#solucoes" className="hover:text-foreground transition-colors">Soluções</a>
            <a href="#sobre" className="hover:text-foreground transition-colors">Sobre</a>
            <a href="#contato" className="hover:text-foreground transition-colors">Contato</a>
          </div>
          <p className="text-sm text-muted-foreground">
            © 2026 Nex. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
