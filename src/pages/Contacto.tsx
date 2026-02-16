import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contacto = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ nombre: "", email: "", mensaje: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Mensaje enviado",
      description: "Nos pondremos en contacto contigo lo antes posible.",
    });
    setForm({ nombre: "", email: "", mensaje: "" });
  };

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
              <span className="text-sm font-semibold text-secondary uppercase tracking-widest">Contacto</span>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mt-3">
                Contacta con nosotros
              </h1>
              <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
                ¿En qué te podemos ayudar? No dudes en contactar con nosotros para cualquier consulta.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
              {/* Info */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <div className="space-y-4">
                  {[
                    { icon: MapPin, label: "Dirección", value: "Pl. Fábrica de Paños 1, Local 5\nEntrada por Calle Gonzalo de Córdoba\n28830 San Fernando de Henares, Madrid" },
                    { icon: Phone, label: "Teléfono", value: "604 899 279", href: "tel:604899279" },
                    { icon: Mail, label: "Email", value: "info@roucofisioterapia.es", href: "mailto:info@roucofisioterapia.es" },
                    { icon: Clock, label: "Horario", value: "L-J: 10:00–13:00 y 16:00–20:30\nV: 10:00–13:00 y 16:00–19:00" },
                  ].map((item) => (
                    <div key={item.label} className="flex gap-4 p-4 rounded-lg bg-card border border-border">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                        <item.icon className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-foreground">{item.label}</p>
                        {item.href ? (
                          <a href={item.href} className="text-sm text-muted-foreground hover:text-primary transition-colors whitespace-pre-line">
                            {item.value}
                          </a>
                        ) : (
                          <p className="text-sm text-muted-foreground whitespace-pre-line">{item.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                <a
                  href="https://wa.me/34604899279?text=Hola%2C%20me%20gustaría%20pedir%20cita"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold gap-2 mt-4">
                    <MessageCircle className="h-5 w-5" />
                    Contactar por WhatsApp
                  </Button>
                </a>
              </motion.div>

              {/* Form + Map */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <form onSubmit={handleSubmit} className="p-6 rounded-xl bg-card border border-border space-y-4">
                  <div>
                    <Label htmlFor="nombre">Nombre</Label>
                    <Input
                      id="nombre"
                      value={form.nombre}
                      onChange={(e) => setForm({ ...form, nombre: e.target.value })}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="mensaje">Mensaje</Label>
                    <Textarea
                      id="mensaje"
                      rows={4}
                      value={form.mensaje}
                      onChange={(e) => setForm({ ...form, mensaje: e.target.value })}
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full">Enviar mensaje</Button>
                </form>

                <div className="rounded-xl overflow-hidden border border-border h-64">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3036.8!2d-3.5328!3d40.4519!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd422f3cb5ec5e1d%3A0x0!2sPlaza%20F%C3%A1brica%20de%20Pa%C3%B1os%2C%2028830%20San%20Fernando%20de%20Henares%2C%20Madrid!5e0!3m2!1ses!2ses!4v1700000000000"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Ubicación Rouco Fisioterapia"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Contacto;
