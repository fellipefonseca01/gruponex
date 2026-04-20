import logo from "@/assets/logo-nex.png";
import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="pt-16 pb-10 border-t border-border bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <img src={logo} alt="Nex" className="h-9 mb-4" />
            <p className="text-sm text-muted-foreground leading-relaxed">
              Tecnologia, marketing e soluções digitais para empresas que querem crescer.
            </p>
          </div>

          {/* Navegação */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Navegação</h4>
            <ul className="space-y-2.5 text-sm">
              <li><a href="#inicio" className="text-muted-foreground hover:text-foreground transition-colors">Início</a></li>
              <li><a href="#softwares" className="text-muted-foreground hover:text-foreground transition-colors">Softwares sob demanda</a></li>
              <li><a href="#servicos" className="text-muted-foreground hover:text-foreground transition-colors">Soluções de Mercado</a></li>
              <li><a href="#sobre" className="text-muted-foreground hover:text-foreground transition-colors">Sobre</a></li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Contato</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                <a href="mailto:contato@gruponex.com.br" className="text-muted-foreground hover:text-foreground transition-colors">
                  contato@gruponex.com.br
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                <a href="https://wa.me/5537998024141" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
                  (37) 9 9802-4141
                </a>
              </li>
            </ul>
          </div>

          {/* Localização */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Localização</h4>
            <div className="flex items-start gap-3 text-sm">
              <MapPin className="w-4 h-4 text-primary shrink-0 mt-0.5" />
              <p className="text-muted-foreground">
                Divinópolis, MG<br />Brasil
              </p>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © 2026 Grupo Nex. Todos os direitos reservados.
          </p>
          <p className="text-xs text-muted-foreground">
            Feito com tecnologia própria.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
