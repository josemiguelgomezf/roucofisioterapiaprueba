import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Zap, Ribbon, Dumbbell, Hand, Target, Brain, BookOpen, Activity, Scan } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

const services = [
  {
    icon: Zap, name: "Electropunción",
    desc: "La electropunción es una técnica que combina la inserción de agujas con estimulación eléctrica para aliviar el dolor muscular y articular. Se utiliza en el tratamiento de contracturas, puntos gatillo y dolor crónico, ofreciendo resultados rápidos y efectivos.",
  },
  {
    icon: Ribbon, name: "Kinesiotaping",
    desc: "El kinesiotaping consiste en la aplicación de vendajes neuromusculares elásticos que ayudan a estabilizar articulaciones y músculos sin restringir el movimiento. Facilita la recuperación de lesiones deportivas y mejora la circulación linfática.",
  },
  {
    icon: Dumbbell, name: "Ejercicio terapéutico",
    desc: "Diseñamos programas de ejercicio personalizados para cada paciente, enfocados en la rehabilitación funcional, el fortalecimiento muscular y la prevención de recaídas. El ejercicio terapéutico es fundamental para una recuperación completa y duradera.",
  },
  {
    icon: Hand, name: "Terapia manual",
    desc: "La terapia manual engloba un conjunto de técnicas especializadas realizadas con las manos del fisioterapeuta para tratar disfunciones musculoesqueléticas. Incluye movilizaciones articulares, masaje terapéutico y técnicas miofasciales.",
  },
  {
    icon: Target, name: "Punción seca",
    desc: "La punción seca es una técnica invasiva que consiste en la inserción de agujas de acupuntura en puntos gatillo miofasciales para desactivarlos y eliminar contracturas musculares. Es muy eficaz en el tratamiento del dolor referido.",
  },
  {
    icon: Brain, name: "Neuromodulación",
    desc: "La neuromodulación percutánea es una técnica que utiliza corrientes eléctricas aplicadas a través de agujas para modular la actividad del sistema nervioso. Especialmente indicada para el manejo del dolor crónico y neuropático.",
  },
  {
    icon: BookOpen, name: "Educación terapéutica",
    desc: "La educación terapéutica es un pilar fundamental en nuestro enfoque. Te enseñamos a entender tu dolor, a gestionar tus síntomas y a adoptar hábitos saludables que te ayuden a mantener una recuperación duradera y prevenir recaídas.",
  },
  {
    icon: Activity, name: "EPTE",
    desc: "La Electrólisis Percutánea Terapéutica (EPTE) es una técnica de vanguardia que aplica una corriente galvánica a través de una aguja para tratar tendinopatías crónicas, roturas fibrilares y lesiones que no responden a tratamientos convencionales.",
  },
  {
    icon: Scan, name: "Ecografía",
    desc: "Contamos con más de 6 años de experiencia en ecografía musculoesquelética. Esta herramienta nos permite realizar evaluaciones precisas, guiar tratamientos invasivos con total seguridad y hacer seguimiento de la evolución de las lesiones.",
  },
];

const ServiciosPage = () => {
  return (
    <>
      <Header />
      <main className="pt-20">
        <section className="py-16 md:py-24 bg-gradient-to-b from-primary/5 to-background">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center mb-16"
            >
              <span className="text-sm font-semibold text-secondary uppercase tracking-widest">Lo que hacemos</span>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mt-3">
                Nuestros Servicios
              </h1>
              <p className="text-muted-foreground mt-4 max-w-2xl mx-auto text-lg">
                Técnicas avanzadas de fisioterapia para tu recuperación completa en San Fernando de Henares.
              </p>
            </motion.div>

            <div className="space-y-8 max-w-4xl mx-auto">
              {services.map((service, index) => (
                <motion.div
                  key={service.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="flex flex-col md:flex-row gap-6 p-6 md:p-8 rounded-xl bg-card border border-border hover:shadow-lg transition-shadow"
                >
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <service.icon className="h-7 w-7 text-primary" />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-foreground mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>
                      {service.name}
                    </h2>
                    <p className="text-muted-foreground leading-relaxed">{service.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="text-center mt-16">
              <a
                href="https://wa.me/34604899279?text=Hola%2C%20me%20gustaría%20información%20sobre%20vuestros%20servicios"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold gap-2">
                  <MessageCircle className="h-5 w-5" />
                  Consulta sin compromiso
                </Button>
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default ServiciosPage;
