import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Phone, MessageCircle } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center bg-gradient-to-br from-primary/5 via-background to-accent/30 overflow-hidden">
      {/* Decorative circles */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 pt-24 pb-16">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block text-sm font-semibold text-secondary uppercase tracking-widest mb-4">
              Fisioterapia en San Fernando de Henares
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
              Tu bienestar es nuestra{" "}
              <span className="text-gradient">prioridad</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8 max-w-2xl">
              Fisioterapeutas especializados en tratamiento del dolor. Con más de 5 años de experiencia, 
              te ayudamos a mejorar tu calidad de vida mediante un enfoque personalizado y basado en evidencia.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a
              href="https://wa.me/34604899279?text=Hola%2C%20me%20gustaría%20pedir%20cita"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground text-base font-semibold px-8 gap-2">
                <MessageCircle className="h-5 w-5" />
                Pide Cita por WhatsApp
              </Button>
            </a>
            <a href="tel:604899279">
              <Button size="lg" variant="outline" className="text-base font-semibold px-8 gap-2">
                <Phone className="h-5 w-5" />
                604 899 279
              </Button>
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-12 flex items-center gap-6 text-sm text-muted-foreground"
          >
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-secondary" />
              Primera consulta + valoración gratuita
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-secondary" />
              Colegiados oficiales
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
