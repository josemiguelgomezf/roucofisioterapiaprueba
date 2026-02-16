import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Heart, Users, Award } from "lucide-react";

const QuienesSomos = () => {
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
              <span className="text-sm font-semibold text-secondary uppercase tracking-widest">Sobre nosotros</span>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mt-3">
                Quiénes Somos
              </h1>
            </motion.div>

            <div className="max-w-3xl mx-auto space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="prose prose-lg max-w-none"
              >
                <p className="text-lg text-muted-foreground leading-relaxed">
                  En Rouco Fisioterapia, somos un equipo apasionado por la fisioterapia y comprometido con mejorar la calidad de vida de nuestros pacientes. 
                  Nos basamos en una atención personalizada, combinando experiencia, formación continua y un trato cercano.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Nuestra clínica está ubicada en el centro de San Fernando de Henares, donde ofrecemos un espacio cómodo y profesional para tu recuperación. 
                  Con más de 5 años de experiencia en el campo de la fisioterapia, nuestra misión es ayudarte a volver a disfrutar de tu vida sin dolor.
                </p>
              </motion.div>

              <div className="grid sm:grid-cols-3 gap-6 mt-12">
                {[
                  { icon: Heart, title: "Pasión", desc: "Amamos lo que hacemos y se nota en cada sesión." },
                  { icon: Users, title: "Cercanía", desc: "Trato personalizado y humano con cada paciente." },
                  { icon: Award, title: "Excelencia", desc: "Formación continua y técnicas basadas en evidencia." },
                ].map((value, i) => (
                  <motion.div
                    key={value.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="text-center p-6 rounded-xl bg-card border border-border"
                  >
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                      <value.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-semibold text-foreground mb-1">{value.title}</h3>
                    <p className="text-sm text-muted-foreground">{value.desc}</p>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="p-6 rounded-xl bg-accent/50 border border-border mt-8"
              >
                <p className="text-sm text-muted-foreground text-center">
                  <strong className="text-foreground">Graduados en Fisioterapia</strong> · Nº Colegiado: 123456789
                </p>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default QuienesSomos;
