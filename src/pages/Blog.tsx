import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Calendar, ArrowRight } from "lucide-react";

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
}

// Static blog posts for now - will be replaced with DB data later
export const blogPosts: BlogPost[] = [
  {
    id: "1",
    slug: "beneficios-puncion-seca",
    title: "Beneficios de la punción seca para el dolor muscular",
    excerpt: "La punción seca es una técnica muy efectiva para tratar contracturas y puntos gatillo. Descubre cómo puede ayudarte a aliviar el dolor muscular crónico.",
    category: "Técnicas",
    date: "2024-12-15",
    readTime: "5 min",
  },
  {
    id: "2",
    slug: "ejercicios-dolor-espalda",
    title: "5 ejercicios para aliviar el dolor de espalda en casa",
    excerpt: "El dolor de espalda es una de las dolencias más comunes. Te enseñamos ejercicios sencillos que puedes hacer en casa para aliviar y prevenir el dolor lumbar.",
    category: "Ejercicios",
    date: "2024-11-28",
    readTime: "7 min",
  },
  {
    id: "3",
    slug: "que-es-epte",
    title: "¿Qué es la EPTE y para qué sirve?",
    excerpt: "La Electrólisis Percutánea Terapéutica es una técnica de vanguardia para tratar tendinopatías crónicas. Explicamos en qué consiste y sus beneficios.",
    category: "Técnicas",
    date: "2024-11-10",
    readTime: "6 min",
  },
  {
    id: "4",
    slug: "pilates-beneficios-salud",
    title: "Pilates: beneficios para tu salud física y mental",
    excerpt: "El Pilates no solo mejora tu postura y flexibilidad, sino que también tiene importantes beneficios para tu salud mental. Descubre por qué deberías practicarlo.",
    category: "Pilates",
    date: "2024-10-22",
    readTime: "4 min",
  },
];

const Blog = () => {
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
              <span className="text-sm font-semibold text-secondary uppercase tracking-widest">Blog</span>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mt-3">
                Artículos y Consejos
              </h1>
              <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
                Información sobre fisioterapia, ejercicios y bienestar para ayudarte a cuidar tu salud.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {blogPosts.map((post, index) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    to={`/blog/${post.slug}`}
                    className="block p-6 rounded-xl bg-card border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300 h-full"
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-xs font-semibold text-secondary bg-secondary/10 px-2.5 py-1 rounded-full">
                        {post.category}
                      </span>
                      <span className="text-xs text-muted-foreground flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        {new Date(post.date).toLocaleDateString("es-ES", { year: "numeric", month: "long", day: "numeric" })}
                      </span>
                    </div>
                    <h2 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors" style={{ fontFamily: "'Playfair Display', serif" }}>
                      {post.title}
                    </h2>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">{post.excerpt}</p>
                    <span className="text-sm text-primary font-medium flex items-center gap-1">
                      Leer más <ArrowRight className="h-3 w-3" />
                    </span>
                  </Link>
                </motion.article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Blog;
