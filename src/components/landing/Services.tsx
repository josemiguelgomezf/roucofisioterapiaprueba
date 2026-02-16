import { motion } from "framer-motion";
import { Zap, Ribbon, Dumbbell, Hand, Target, Brain, BookOpen, Activity, Scan } from "lucide-react";

const services = [
  { icon: Zap, name: "Electropunción", desc: "Estimulación eléctrica precisa para aliviar el dolor muscular y articular." },
  { icon: Ribbon, name: "Kinesiotaping", desc: "Vendajes neuromusculares para estabilizar y facilitar la recuperación." },
  { icon: Dumbbell, name: "Ejercicio terapéutico", desc: "Programas de ejercicio personalizados para tu rehabilitación." },
  { icon: Hand, name: "Terapia manual", desc: "Técnicas manuales especializadas para tratar disfunciones musculoesqueléticas." },
  { icon: Target, name: "Punción seca", desc: "Tratamiento de puntos gatillo miofasciales para eliminar contracturas." },
  { icon: Brain, name: "Neuromodulación", desc: "Modulación del sistema nervioso para el manejo del dolor crónico." },
  { icon: BookOpen, name: "Educación terapéutica", desc: "Te enseñamos a entender y gestionar tu dolor para una recuperación duradera." },
  { icon: Activity, name: "EPTE", desc: "Electrólisis Percutánea Terapéutica para tendinopatías y lesiones crónicas." },
  { icon: Scan, name: "Ecografía", desc: "Ecografía musculoesquelética para evaluación, diagnóstico y seguimiento." },
];

const Services = () => {
  return (
    <section className="py-20 md:py-28 bg-background" id="servicios">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="text-sm font-semibold text-secondary uppercase tracking-widest">Nuestros servicios</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3">
            Servicios de Fisioterapia
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Ofrecemos una amplia gama de técnicas y tratamientos para ayudarte a recuperar tu bienestar.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="group p-6 rounded-xl bg-card border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <service.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>
                {service.name}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
