import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { to: "/", label: "Inicio" },
  { to: "/servicios", label: "Servicios" },
  { to: "/blog", label: "Blog" },
  { to: "/quienes-somos", label: "Quiénes Somos" },
  { to: "/contacto", label: "Contacto" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 flex items-center justify-between h-16 md:h-20">
        <Link to="/" className="flex items-center gap-2">
          <span className="text-xl md:text-2xl font-bold text-primary" style={{ fontFamily: "'Playfair Display', serif" }}>
            Rouco<span className="text-secondary">Fisioterapia</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                location.pathname === link.to ? "text-primary" : "text-muted-foreground"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <a href="tel:604899279" className="flex items-center gap-1 text-sm text-muted-foreground hover:text-primary transition-colors">
            <Phone className="h-4 w-4" />
            604 899 279
          </a>
          <a
            href="https://wa.me/34604899279?text=Hola%2C%20me%20gustaría%20pedir%20cita"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold">
              Pide Cita
            </Button>
          </a>
        </div>

        {/* Mobile toggle */}
        <button className="md:hidden p-2" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-background border-b border-border">
          <nav className="container mx-auto px-4 py-4 flex flex-col gap-3">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setIsOpen(false)}
                className={`text-sm font-medium py-2 transition-colors ${
                  location.pathname === link.to ? "text-primary" : "text-muted-foreground"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="https://wa.me/34604899279?text=Hola%2C%20me%20gustaría%20pedir%20cita"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2"
            >
              <Button className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold">
                Pide Cita
              </Button>
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
