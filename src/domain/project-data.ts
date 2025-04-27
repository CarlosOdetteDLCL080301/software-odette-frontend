import type { Project } from "@/domain/models/project"

export const projectsData: Project[] = [
  {
    title: "Frontend de esta página",
    description:
      "Desarrollo del frontend de esta plataforma web, diseñada como portafolio personal y como escaparate de proyectos y herramientas enfocadas a distintas áreas de especialización.",
    image: "eye", // Ícono de Font Awesome
    technologies: ["React", "TypeScript"],
    link: "https://github.com/CarlosOdetteDLCL080301/software-odette-backend/tree/main",
  },
  {
    title: "Backend de esta página",
    description:
      "Implementación del backend de la plataforma, orientado a gestionar operaciones de análisis de datos y demostrar el funcionamiento de diversos algoritmos, aplicando buenas prácticas de desarrollo profesional.[SOLO EXISTE SIMIENTOS NO HAY CONTENIDO AUN]",
    image: "gear", // Ícono de Font Awesome
    technologies: ["Java", "Spring Boot"],
    link: "https://github.com/CarlosOdetteDLCL080301/software-odette-backend/tree/master",
  },
  {
    title: "Sistema de Nómina Automatizado",
    description:
      "Desarrollo de un sistema automatizado para el cálculo de nómina, reduciendo errores y tiempo de procesamiento.",
    image: "code", // Esto se refiere al icono de Font Awesome (fa-code)
    technologies: ["Java", "MySQL", "Bootstrap"],
    link: "#",
  },
  {
    title: "Página Web Corporativa",
    description:
      "Diseño y desarrollo de sitio web responsivo para empresa de construcción, incluyendo catálogo de servicios.",
    image: "laptop-code", // Esto se refiere al icono de Font Awesome (fa-laptop-code)
    technologies: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    link: "https://desarrollosdec.com/wp/",
  },
  {
    title: "Automatización con VBA",
    description:
      "Script de automatización para procesamiento de datos y generación de reportes en Excel, reduciendo tiempos operativos.",
    image: "robot", // Esto se refiere al icono de Font Awesome (fa-robot)
    technologies: ["VBA", "Excel", "Automatización"],
    link: "https://github.com/CarlosOdetteDLCL080301/Proyectos-Excel/tree/main/Automatizacion%20de%20cadenas",
  },
]
