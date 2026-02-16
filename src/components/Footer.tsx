import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
              Rouco<span className="text-secondary">Fisioterapia</span>
            </h3>
            <p className="text-background/70 text-sm leading-relaxed">
              Clínica de fisioterapia en San Fernando de Henares. Especialistas en tratamiento del dolor con más de 5 años de experiencia.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider">Enlaces</h4>
            <nav className="flex flex-col gap-2">
              <Link to="/" className="text-background/70 text-sm hover:text-secondary transition-colors">Inicio</Link>
              <Link to="/servicios" className="text-background/70 text-sm hover:text-secondary transition-colors">Servicios</Link>
              <Link to="/blog" className="text-background/70 text-sm hover:text-secondary transition-colors">Blog</Link>
              <Link to="/quienes-somos" className="text-background/70 text-sm hover:text-secondary transition-colors">Quiénes Somos</Link>
              <Link to="/contacto" className="text-background/70 text-sm hover:text-secondary transition-colors">Contacto</Link>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider">Contacto</h4>
            <div className="flex flex-col gap-3 text-sm text-background/70">
              <a href="tel:604899279" className="flex items-center gap-2 hover:text-secondary transition-colors">
                <Phone className="h-4 w-4 shrink-0" /> 604 899 279
              </a>
              <a href="mailto:info@roucofisioterapia.es" className="flex items-center gap-2 hover:text-secondary transition-colors">
                <Mail className="h-4 w-4 shrink-0" /> info@roucofisioterapia.es
              </a>
              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 shrink-0 mt-0.5" />
                <span>Pl. Fábrica de Paños 1, Local 5, San Fernando de Henares</span>
              </div>
            </div>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider">Horario</h4>
            <div className="flex flex-col gap-2 text-sm text-background/70">
              <div className="flex items-start gap-2">
                <Clock className="h-4 w-4 shrink-0 mt-0.5" />
                <div>
                  <p>Lunes a Jueves</p>
                  <p>10:00–13:00 y 16:00–20:30</p>
                  <p className="mt-1">Viernes</p>
                  <p>10:00–13:00 y 16:00–19:00</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-background/10 mt-10 pt-6 text-center text-xs text-background/50">
          <p>© {new Date().getFullYear()} RoucoFisioterapia. Todos los derechos reservados.</p>
          <p className="mt-1">Fisioterapia en San Fernando de Henares, Madrid</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
