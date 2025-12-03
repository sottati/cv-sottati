import carlus01 from "@/assets/carlus/carlus-1.png";
import carlus02 from "@/assets/carlus/carlus-2.png";

import filosofia01 from "@/assets/filosofia/filosofia-1.png";
import filosofia02 from "@/assets/filosofia/filosofia-2.png";
import filosofia03 from "@/assets/filosofia/filosofia-3.png";

import dither01 from "@/assets/ditherlabs/ditherlabs-1.png";
import dither02 from "@/assets/ditherlabs/ditherlabs-2.png";
import dither03 from "@/assets/ditherlabs/ditherlabs-3.png";

import logistica01 from "@/assets/logistica/logistica-1.png";
import logistica02 from "@/assets/logistica/logistica-2.png";
import logistica03 from "@/assets/logistica/logistica-3.png";

export const locales = ["en", "es"] as const;
export type Locale = typeof locales[number];

const carlusImages = [
  { src: carlus01, alt: "carlus-1" },
  { src: carlus02, alt: "carlus-2" },
];

const filosofiaImages = [
  { src: filosofia01, alt: "filosofia-1" },
  { src: filosofia02, alt: "filosofia-2" },
  { src: filosofia03, alt: "filosofia-3" },
];

const ditherImages = [
  { src: dither01, alt: "dither-1" },
  { src: dither02, alt: "dither-2" },
  { src: dither03, alt: "dither-3" },
];

const logisticaImages = [
  { src: logistica01, alt: "logistica-1" },
  { src: logistica02, alt: "logistica-2" },
  { src: logistica03, alt: "logistica-3" },
];

export const cvData = {
  en: {
    header: {
      name: "Simon Ottati",
      role: "Software Developer based in Argentina.",
      links: [
        { href: "https://www.linkedin.com/in/simon-ottati-ostiglia-6b161620a/", label: "LinkedIn" },
        { href: "https://github.com/sottati", label: "GitHub" },
        { href: "mailto:simooonottati@gmail.com", label: "Email" },
      ],
    },
    about: "Software Developer with a focus on details and user experience. I build accessible, pixel-perfect, and performant web experiences. Currently studying Information Technology Management at UADE.",
    projects: {
      title: "Projects",
      items: [
        {
          title: "Carlus",
          description: "AI-assisted writing tool for enhanced productivity.",
          url: "https://carlus.vercel.app",
          images: carlusImages,
        },
        {
          title: "Filosofia Chatbot",
          description: "Interactive dialogue with philosophical figures.",
          url: "https://filosofia-ai.vercel.app/",
          images: filosofiaImages,
        },
        {
          title: "Dither Labs",
          description: "Process automation services for modern businesses.",
          url: "https://ditherlabs.vercel.app",
          images: ditherImages,
        },
        {
          title: "Pack Pilot",
          description: "Logistics management software for enterprise.",
          url: "https://logistica-lilac.vercel.app",
          images: logisticaImages,
        },
      ],
    },
    work: {
      title: "Work",
      items: [
        {
          company: "PlanBit / Fundación Blockchain",
          role: "Web Developer",
          date: "Mar 2022 — Present",
          description: "Web Developer.",
          bullets: [
            "Designed and developed a P2P crypto exchange platform focused on local markets.",
            "Created and maintained the official website for Fundación Blockchain Argentina.",
            "Structured information architecture for better user engagement.",
          ],
        },
        {
          company: "PromoWear",
          role: "Event Production",
          date: "Apr 2023 — Present",
          description: "Event Production for La Nacion+.",
          bullets: [
            "Managed live broadcasts and technical operations (vMix).",
            "Coordinated large-scale corporate events and summits.",
          ],
        },
        {
          company: "Freelance",
          role: "Creative & Dev Services",
          date: "Ongoing",
          description: "Creative & Dev Services.",
          bullets: [
            "Video editing (Premiere Pro, After Effects).",
            "Graphic design for events and branding.",
            "Web development and process automation.",
          ],
        },
      ],
    },
    education: {
      title: "Education",
      items: [
        {
          school: "UADE",
          degree: "IT Management (Lic. en Gestión de TI)",
          status: "In Progress (3rd Year)",
        },
        {
          school: "ORT Belgrano",
          degree: "Media Production Focus",
          status: "Graduated",
        },
      ],
    },
    stack: {
      title: "Stack",
      items: ["React", "Next.js", "Astro", "Tailwind", "SQL", "Python", "Java"],
    },
    interests: {
      title: "Interests",
      items: ["Surf", "Football", "Snowboard", "AI", "SpeedCubing"],
    },
    footer: {
      contact: "Contact",
    },
  },
  es: {
    header: {
      name: "Simon Ottati",
      role: "Software Developer. 22 años | Argentina, CABA",
      links: [
        { href: "https://www.linkedin.com/in/simon-ottati-ostiglia-6b161620a/", label: "LinkedIn" },
        { href: "https://github.com/sottati", label: "GitHub" },
        { href: "mailto:simooonottati@gmail.com", label: "Gmail" },
      ],
    },
    about: "Desarrollador de Software enfocado en los detalles y la experiencia de usuario. Creo experiencias web accesibles y de alto rendimiento. Estudiante de Gestión de Tecnologías de la Información en UADE.",
    projects: {
      title: "Proyectos",
      items: [
        {
          title: "Carlus",
          description: "Herramienta de escritura de texto asistida con AI",
          url: "https://carlus.vercel.app",
          images: carlusImages,
        },
        {
          title: "Filosofia Chatbot",
          description: "Habla con tus autores favoritos",
          url: "https://filosofia-ai.vercel.app/",
          images: filosofiaImages,
        },
        {
          title: "Dither Labs",
          description: "Servicio de automatización de procesos",
          url: "https://ditherlabs.vercel.app",
          images: ditherImages,
        },
        {
          title: "Pack Pilot",
          description: "Software para manejo de empresas logisticas",
          url: "https://logistica-lilac.vercel.app",
          images: logisticaImages,
        },
      ],
    },
    work: {
      title: "Experiencia laboral",
      items: [
        {
          company: "PlanBit / Fundación Blockchain",
          role: "Desarrollador Web",
          date: "Marzo 2022 -> Presente",
          description: "Desarrollador Web.",
          bullets: [
            "Diseño, maquetación y desarrollo web.",
            "Creación de un exchange P2P de criptomonedas, apuntado para gente de Buenos Aires.",
            "Fundación Blockchain: diseño y creación de la web (fundacionblockchain.com).",
            "Organización y segmentación del contenido informativo dentro de la página.",
          ],
        },
        {
          company: "PromoWear",
          role: "Producción de eventos",
          date: "Abril 2023 -> Presente",
          description: "Producción de eventos para La Nacion+.",
          bullets: [
            "Eventos y programas en vivo: Comunidad de Negocios, Managment 2030 10° Edición, Summits.",
            "Operador técnico en transmisiones en vivo (VMix).",
          ],
        },
        {
          company: "Freelance",
          role: "Servicios Creativos y Dev",
          date: "En curso",
          description: "Freelance.",
          bullets: [
            "Edición de contenidos audiovisuales | Premiere Pro, Photoshop, Illustrator, After Effects.",
            "Diseñador de flyers para eventos, invitaciones, tarjetas de contacto.",
            "Desarrollo de paginas web.",
            "Automatización de procesos.",
          ],
        },
      ],
    },
    education: {
      title: "Educación",
      items: [
        {
          school: "UADE",
          degree: "Lic. en Gestión de Tecnologías de la Información (Sistemas)",
          status: "En curso | 3er año",
        },
        {
          school: "ORT Belgrano",
          degree: "Bachiller con orientación en producción de medios audiovisuales",
          status: "Graduado",
        },
      ],
    },
    stack: {
      title: "Conocimientos",
      items: ["React", "NextJS", "Astro", "SQL", "Python", "Java"],
    },
    interests: {
      title: "Intereses generales",
      items: ["Surf", "Futbol", "Programación", "Ejercicio fisico", "Snowboard", "AI", "SpeedCubing"],
    },
    footer: {
      contact: "Contacto",
    },
  },
};
