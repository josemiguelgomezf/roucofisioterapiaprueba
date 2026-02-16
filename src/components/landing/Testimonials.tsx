import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    quote: "Tenía un problemita en el cuello, mi amigo David terminó la sesión conmigo, me acaba de dejar hecho un rey. Cualquier cosa que queráis: David en Madrid, muy bueno!!! A mí me está ayudando.",
    name: "Kidd Keo",
    role: "Cantante de trap",
  },
  {
    quote: "Un trato excelente y resultados en el momento. Totalmente recomendable.",
    name: "Almudena",
    role: "Paciente",
  },
  {
    quote: "Tenía la espalda como un señor de 80 años. Así que ya sabéis, si necesitáis una buena clínica.",
    name: "Delantero09",
    role: "Creador de contenido",
  },
  {
    quote: "Me dolía mucho el cuello y en Rouco Fisioterapia me han dejado como nuevo, estoy super cómodo en sus sesiones. La mejor clínica.",
    name: "José Miguel",
    role: "Ingeniero Informático",
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="text-sm font-semibold text-secondary uppercase tracking-widest">Testimonios</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3">
            Lo que dicen de nosotros
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {testimonials.map((t, index) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative p-6 rounded-xl bg-card border border-border"
            >
              <Quote className="h-8 w-8 text-primary/15 absolute top-4 right-4" />
              <div className="flex gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-secondary text-secondary" />
                ))}
              </div>
              <p className="text-muted-foreground leading-relaxed mb-4 italic">"{t.quote}"</p>
              <div>
                <p className="font-semibold text-foreground">{t.name}</p>
                <p className="text-sm text-muted-foreground">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
