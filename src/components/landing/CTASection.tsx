import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-20 md:py-28 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground">
      <div className="container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
            No vivas con dolores
          </h2>
          <p className="text-lg text-primary-foreground/80 mb-8 max-w-xl mx-auto">
            Consulta y mejora tu calidad de vida. Primera consulta + valoración gratuita.
          </p>
          <a
            href="https://wa.me/34604899279?text=Hola%2C%20me%20gustaría%20pedir%20cita"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground text-base font-semibold px-10 gap-2">
              <MessageCircle className="h-5 w-5" />
              Pide tu Cita Ahora
            </Button>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
