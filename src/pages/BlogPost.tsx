import { useParams, Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import { blogPosts } from "./Blog";

// Static content for demo posts
const postContent: Record<string, string> = {
  "beneficios-puncion-seca": `
La punción seca es una de las técnicas más efectivas en fisioterapia para el tratamiento del dolor muscular. Consiste en la inserción de agujas de acupuntura en los puntos gatillo miofasciales, esas zonas tensas dentro de los músculos que causan dolor local y referido.

## ¿Cómo funciona?

Cuando una aguja penetra en un punto gatillo, se produce una respuesta de espasmo local (REL) que ayuda a desactivar el punto gatillo. Esto reduce la tensión muscular, mejora la circulación local y disminuye el dolor.

## Beneficios principales

- **Alivio rápido del dolor**: Muchos pacientes notan mejoría desde la primera sesión.
- **Reducción de contracturas**: Ayuda a relajar los músculos tensos y contracturados.
- **Mejora de la movilidad**: Al eliminar los puntos gatillo, se recupera el rango de movimiento.
- **Complemento ideal**: Se combina perfectamente con otras técnicas de fisioterapia.

## ¿Para quién está indicada?

La punción seca está indicada para personas con dolor muscular crónico, contracturas, cefaleas tensionales, dolor cervical y lumbar, entre otras patologías musculoesqueléticas.

En Rouco Fisioterapia utilizamos la punción seca como parte de un tratamiento integral, siempre adaptado a las necesidades de cada paciente.
  `,
  "ejercicios-dolor-espalda": `
El dolor de espalda afecta a una gran parte de la población y es una de las principales causas de consulta en fisioterapia. La buena noticia es que con ejercicios sencillos puedes aliviar y prevenir este tipo de dolor.

## 1. Estiramiento del gato-camello

Colócate a cuatro patas. Arquea la espalda hacia arriba (como un gato) y mantén 5 segundos. Luego, deja caer la espalda hacia abajo y mantén otros 5 segundos. Repite 10 veces.

## 2. Rodillas al pecho

Tumbado boca arriba, lleva ambas rodillas al pecho y abrázalas. Mantén la posición 20-30 segundos. Repite 3 veces.

## 3. Puente de glúteos

Tumbado boca arriba con las rodillas flexionadas, eleva la pelvis hasta formar una línea recta desde los hombros hasta las rodillas. Mantén 5 segundos y baja. Repite 15 veces.

## 4. Rotación de columna

Tumbado boca arriba con las rodillas flexionadas, deja caer ambas rodillas hacia un lado mientras giras la cabeza al lado contrario. Mantén 20 segundos y cambia de lado.

## 5. Plancha frontal

En posición de plancha sobre los antebrazos, mantén el cuerpo recto durante 20-30 segundos. Fortalece la musculatura del core que protege tu espalda.

**Importante**: Si el dolor persiste, consulta con un fisioterapeuta para un diagnóstico y tratamiento adecuados.
  `,
  "que-es-epte": `
La Electrólisis Percutánea Terapéutica (EPTE) es una técnica de fisioterapia invasiva que ha revolucionado el tratamiento de las tendinopatías crónicas y otras lesiones del sistema musculoesquelético.

## ¿En qué consiste?

La EPTE consiste en la aplicación de una corriente galvánica de muy baja intensidad a través de una aguja de acupuntura, directamente sobre el tejido dañado. Esta corriente produce una reacción electroquímica que destruye el tejido degenerado y activa los mecanismos de reparación del cuerpo.

## ¿Para qué patologías está indicada?

- Tendinopatías crónicas (tendón de Aquiles, rotuliano, epicondilitis)
- Fascitis plantar
- Roturas fibrilares que no evolucionan correctamente
- Fibrosis muscular
- Lesiones ligamentosas crónicas

## Ventajas de la EPTE

- **Mínimamente invasiva**: La aguja utilizada es muy fina y la corriente es de baja intensidad.
- **Alta efectividad**: Estudios científicos avalan su eficacia en tendinopatías crónicas.
- **Recuperación rápida**: Permite una vuelta precoz a la actividad.
- **Guiada por ecografía**: En nuestra clínica, realizamos la EPTE guiada por ecografía para mayor precisión y seguridad.

En Rouco Fisioterapia contamos con amplia experiencia en EPTE y ecografía musculoesquelética, lo que nos permite ofrecer tratamientos seguros y efectivos.
  `,
  "pilates-beneficios-salud": `
El Pilates es mucho más que una actividad física: es un método completo que trabaja cuerpo y mente. En Rouco Fisioterapia ofrecemos clases grupales de Pilates diseñadas para personas de todos los niveles.

## Beneficios físicos

- **Mejora la postura**: Fortalece los músculos posturales y corrige desequilibrios.
- **Aumenta la flexibilidad**: Los movimientos controlados mejoran la elasticidad muscular.
- **Fortalece el core**: Trabaja en profundidad los músculos abdominales y lumbares.
- **Previene lesiones**: Un cuerpo equilibrado y fuerte es menos propenso a lesionarse.

## Beneficios mentales

- **Reduce el estrés**: La concentración en la respiración y el movimiento ayuda a desconectar.
- **Mejora la concentración**: Requiere atención plena, lo que entrena la mente.
- **Aumenta la confianza**: Ver los progresos físicos mejora la autoestima.

## ¿Por qué Pilates en una clínica de fisioterapia?

Nuestras clases están supervisadas por fisioterapeutas, lo que garantiza:
- Ejercicios adaptados a cada persona
- Corrección postural constante
- Seguridad para personas con lesiones o patologías
- Un enfoque terapéutico, no solo deportivo

¡Consulta nuestros horarios y únete a nuestras clases!
  `,
};

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <>
        <Header />
        <main className="pt-20 min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Artículo no encontrado</h1>
            <Link to="/blog" className="text-primary hover:underline">Volver al blog</Link>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  const content = postContent[post.slug] || "";

  return (
    <>
      <Header />
      <main className="pt-20">
        <article className="py-16 md:py-24">
          <div className="container mx-auto px-4 max-w-3xl">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <Link to="/blog" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary mb-8 transition-colors">
                <ArrowLeft className="h-4 w-4" /> Volver al blog
              </Link>

              <div className="flex items-center gap-3 mb-4">
                <span className="text-xs font-semibold text-secondary bg-secondary/10 px-2.5 py-1 rounded-full">
                  {post.category}
                </span>
                <span className="text-xs text-muted-foreground flex items-center gap-1">
                  <Calendar className="h-3 w-3" />
                  {new Date(post.date).toLocaleDateString("es-ES", { year: "numeric", month: "long", day: "numeric" })}
                </span>
                <span className="text-xs text-muted-foreground flex items-center gap-1">
                  <Clock className="h-3 w-3" /> {post.readTime}
                </span>
              </div>

              <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-8" style={{ fontFamily: "'Playfair Display', serif" }}>
                {post.title}
              </h1>

              <div className="prose prose-lg max-w-none text-muted-foreground">
                {content.split("\n").map((line, i) => {
                  if (line.startsWith("## ")) {
                    return <h2 key={i} className="text-xl font-bold text-foreground mt-8 mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>{line.replace("## ", "")}</h2>;
                  }
                  if (line.startsWith("- **")) {
                    const match = line.match(/- \*\*(.+?)\*\*: (.+)/);
                    if (match) {
                      return <p key={i} className="ml-4 mb-2">• <strong className="text-foreground">{match[1]}</strong>: {match[2]}</p>;
                    }
                  }
                  if (line.startsWith("- ")) {
                    return <p key={i} className="ml-4 mb-2">• {line.replace("- ", "")}</p>;
                  }
                  if (line.startsWith("**") && line.endsWith("**")) {
                    return <p key={i} className="font-semibold text-foreground mt-4">{line.replace(/\*\*/g, "")}</p>;
                  }
                  if (line.trim() === "") return null;
                  return <p key={i} className="mb-3 leading-relaxed">{line}</p>;
                })}
              </div>
            </motion.div>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
};

export default BlogPost;
