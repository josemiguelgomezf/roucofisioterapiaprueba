import { motion } from "framer-motion";
import { MapPin, GraduationCap, Stethoscope, Scan } from "lucide-react";

const reasons = [
  { icon: MapPin, title: "Ubicación céntrica", desc: "En el centro de San Fernando de Henares, fácil acceso." },
  { icon: GraduationCap, title: "Titulados y con experiencia", desc: "Fisioterapeutas colegiados con formación continua." },
  { icon: Stethoscope, title: "Tratamientos avanzados", desc: "Terapia manual, tecnología avanzada y atención individualizada." },
  { icon: Scan, title: "Ecografía especializada", desc: "Más de 6 años de experiencia en ecografía musculoesquelética." },
];

const WhyUs = () => {
  return (
    <section className="py-20 md:py-28 bg-primary/5">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="text-sm font-semibold text-secondary uppercase tracking-widest">Ventajas</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3">
            ¿Por qué elegirnos?
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {reasons.map((r, index) => (
            <motion.div
              key={r.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center p-6"
            >
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <r.icon className="h-7 w-7 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">{r.title}</h3>
              <p className="text-sm text-muted-foreground">{r.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
