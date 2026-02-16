import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const therapies = [
  {
    title: "Sesiones de Fisioterapia",
    description:
      "En Rouco Fisioterapia, entendemos que cada cuerpo es único y que el bienestar no es solo la ausencia de dolor, sino un equilibrio entre salud física y emocional. Nuestras sesiones están diseñadas para ofrecerte un tratamiento personalizado que se adapte a tus necesidades específicas.",
    color: "primary" as const,
  },
  {
    title: "Clases Grupales de Pilates",
    description:
      "Las clases de Pilates están diseñadas para mejorar tu fuerza, flexibilidad y postura, mientras cultivas una conexión más profunda con tu cuerpo. Mediante movimientos controlados y técnicas de respiración, el Pilates trabaja desde el núcleo, fortaleciendo los músculos estabilizadores.",
    color: "secondary" as const,
  },
];

const Therapies = () => {
  return (
    <section className="py-20 md:py-28 bg-muted/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="text-sm font-semibold text-secondary uppercase tracking-widest">Terapias</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3">
            Nuestras Terapias
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {therapies.map((therapy, index) => (
            <motion.div
              key={therapy.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className={`relative p-8 rounded-2xl bg-card border border-border overflow-hidden`}
            >
              <div className={`absolute top-0 left-0 w-full h-1 ${therapy.color === "primary" ? "bg-primary" : "bg-secondary"}`} />
              <h3 className="text-2xl font-bold text-foreground mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
                {therapy.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">{therapy.description}</p>
              <a
                href="https://wa.me/34604899279?text=Hola%2C%20me%20gustaría%20información%20sobre%20las%20terapias"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="ghost" className="gap-2 text-primary hover:text-primary/80 p-0">
                  Más información <ArrowRight className="h-4 w-4" />
                </Button>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Therapies;
