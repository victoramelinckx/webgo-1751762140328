
"use client";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { How } from "@/components/How";
import { Aboutus } from "@/components/Aboutus";
import { Services } from "@/components/Services";
import { BeforeAndAfter } from "@/components/BeforeAndAfter";
import { Faq } from "@/components/Faq";
import { BookAppointment } from "@/components/BookAppointment";
import { Footer } from "@/components/Footer";
export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
<Hero headline="Tu Web Lista en 24 Horas" subheadline="Digitalizamos tus ventas en un día con soporte 24/7. Rapidez, compromiso e innovación para emprendedores ocupados." cta1="Empieza Ahora" />
<How step1Title="Contáctanos" step1Desc="Habla sobre tu negocio con nosotros." step2Title="Creamos tu web" step2Desc="Desarrollamos tu página en 24 horas." step3Title="Lanzamiento exitoso" step3Desc="Empieza a vender online con soporte 24/7." />
<Aboutus headline="WebGo: ¡Digitaliza tu negocio, vende más!" subheadline="WebGo crea sitios web que generan ventas online sin complicaciones." beneficiotitulo1="Gestión Rápida" beneficio1="WebGo maneja todo, ahorra tiempo." beneficiotitulo2="Innovación Constante" beneficio2="Soluciones creativas, resultados garantizados." />
<Services heading="Aumenta tus Ventas con Rapidez" description="Transformamos tu negocio con una web de ventas en 24 horas." services={[{"name":"Creación de Sitios Web","icon":"globe","description":"Webs optimizadas para vender más."},{"name":"Gestión de Contenidos","icon":"pencil-alt","description":"Contenido que atrae y fideliza clientes."},{"name":"Integración de E-commerce","icon":"shopping-cart","description":"Convierte visitantes en compradores."},{"name":"SEO Optimización","icon":"search","description":"Mejora tu visibilidad online rápidamente."},{"name":"Soporte 24/7","icon":"headset","description":"Asistencia continua para tu tranquilidad."},{"name":"Consultoría Digital","icon":"lightbulb","description":"Estrategias personalizadas para crecer online."}]} />
<BeforeAndAfter subheadline="Transformamos tus ideas en proyectos digitales de éxito comprobado." />
<Faq faqs={[{"pregunta":"¿Cómo puede WebGo ayudarme a digitalizar mis ventas rápidamente?","respuesta":"WebGo se especializa en transformar tu negocio en línea de manera rápida y eficiente. Nos aseguramos de que tu sitio web esté optimizado para atraer más clientes y aumentar tus ventas digitales en poco tiempo."},{"pregunta":"No tengo tiempo para gestionar un sitio web, ¿cómo WebGo puede manejar esto por mí?","respuesta":"En WebGo, nos encargamos de todo el manejo de tu sitio web, desde el diseño hasta el mantenimiento. Tú solo te enfocas en tu negocio, nosotros nos encargamos de la parte digital."},{"pregunta":"¿Cuáles son los beneficios de elegir WebGo frente a otras opciones de digitalización?","respuesta":"WebGo te ofrece rapidez, compromiso e innovación. Nuestro enfoque te asegura resultados rápidos y efectivos, con soluciones innovadoras que se adaptan a tus necesidades específicas."},{"pregunta":"¿Cómo WebGo puede ayudarme si no sé nada sobre generar ventas online?","respuesta":"WebGo te guiará en cada paso del proceso de ventas online. Creamos estrategias personalizadas para atraer y convertir clientes, haciendo que la venta digital sea sencilla y efectiva para ti."},{"pregunta":"¿Cuánto cuesta digitalizar mi negocio con WebGo?","respuesta":"El costo varía según tus necesidades, pero en WebGo priorizamos la rapidez, el compromiso y la innovación en nuestros servicios, asegurando que obtengas el máximo valor por tu inversión."}]} />
<BookAppointment 
                      heading="Transforma Tus Ventas en Línea" 
                      description="Impulsa tu negocio rápidamente con WebGo: la solución innovadora para emprendedores comprometidos que desean digitalizar sus ventas sin complicaciones."
                      formPostUrl="/api/sendForm"
                      siteOwnerId="undefined"
                    />
<Footer />
    </main>
  );
}
