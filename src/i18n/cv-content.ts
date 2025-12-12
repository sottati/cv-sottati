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
export type Locale = (typeof locales)[number];

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
      role: "Software Developer. 22 y/o. Buenos Aires, Argentina",
      links: [
        {
          href: "https://www.linkedin.com/in/simon-ottati-ostiglia-6b161620a/",
          label: "LinkedIn",
        },
        { href: "https://github.com/sottati", label: "GitHub" },
        { href: "mailto:simooonottati@gmail.com", label: "Email" },
      ],
    },
    about:
      "I build software that solves and attacks real needs. Obsessed with details, performance, and making things intuitive. Third-year IT Management student at UADE.",
    projects: {
      title: "Projects",
      items: [
        {
          title: "Dither Labs",
          description:
            "Automation consulting and development for businesses that want to move faster.",
          url: "https://ditherlabs-astro.vercel.app",
          images: ditherImages,
        },
        {
          title: "Carlus",
          description:
            "AI writing assistant that helps you draft, refine, and polish text faster.",
          url: "https://carlus.vercel.app",
          images: carlusImages,
        },
        {
          title: "Filosofia Chatbot",
          description:
            "Chat with AI-powered versions of your favorite philosophers and thinkers.",
          url: "https://filosofia-ai.vercel.app/",
          images: filosofiaImages,
        },
        {
          title: "Pack Pilot",
          description:
            "Logistics management platform for tracking shipments and operations.",
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
            "Built a P2P crypto exchange platform for local Argentine markets.",
            "Designed and developed the official site for Fundación Blockchain Argentina.",
            "Restructured site architecture, improving navigation and content discoverability.",
          ],
        },
        {
          company: "PromoWear",
          role: "Event Production",
          date: "Apr 2023 — Present",
          description: "Event Production for La Nacion+.",
          bullets: [
            "Operated live broadcasts for La Nacion+ events using vMix (switcher/streaming).",
            "Managed technical production for corporate summits and conferences.",
          ],
        },
        {
          company: "Freelance",
          role: "Creative & Dev Services",
          date: "Ongoing",
          description: "Creative & Dev Services.",
          bullets: [
            "Video editing and motion graphics (Premiere, After Effects, Photoshop).",
            "Brand design for events: flyers, invitations, and promotional materials.",
            "Web development and workflow automation for small businesses.",
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
      items: [
        "Surf",
        "Football",
        "Programming",
        "Physical Exercise",
        "Snowboard",
        "AI",
        "Speed Cubing",
        "Product Design",
      ],
    },
    footer: {
      contact: "Contact",
    },
  },
  es: {
    header: {
      name: "Simon Ottati",
      role: "Software Developer. 22 años. Buenos Aires, Argentina",
      links: [
        {
          href: "https://www.linkedin.com/in/simon-ottati-ostiglia-6b161620a/",
          label: "LinkedIn",
        },
        { href: "https://github.com/sottati", label: "GitHub" },
        { href: "mailto:simooonottati@gmail.com", label: "Gmail" },
      ],
    },
    about:
      "Desarrollo software que soluciona y ataca necesidades reales. Obsesionado con los detalles, performance, y hacer las cosas intuitivas. Cursando 3er año de Lic. en Gestión de TI en UADE.",
    projects: {
      title: "Proyectos",
      items: [
        {
          title: "Dither Labs",
          description:
            "Consultoría y desarrollo de automatización para empresas que quieren moverse más rápido.",
          url: "https://ditherlabs-astro.vercel.app",
          images: ditherImages,
        },
        {
          title: "Carlus",
          description:
            "Asistente de escritura con AI para redactar, refinar y pulir textos más rápido.",
          url: "https://carlus.vercel.app",
          images: carlusImages,
        },
        {
          title: "Filosofia Chatbot",
          description:
            "Chatea con versiones AI de tus filósofos y pensadores favoritos.",
          url: "https://filosofia-ai.vercel.app/",
          images: filosofiaImages,
        },
        {
          title: "Pack Pilot",
          description:
            "Plataforma de gestión logística para trackear envíos y operaciones.",
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
          date: "Marzo 2022 → Presente",
          description: "Desarrollador Web.",
          bullets: [
            "Desarrollé una plataforma P2P de intercambio crypto para el mercado argentino.",
            "Diseñé y desarrollé el sitio oficial de Fundación Blockchain Argentina.",
            "Reestructuré la arquitectura del sitio, mejorando navegación y descubrimiento de contenido.",
          ],
        },
        {
          company: "PromoWear",
          role: "Producción de eventos",
          date: "Abril 2023 → Presente",
          description: "Producción de eventos para La Nacion+.",
          bullets: [
            "Operé transmisiones en vivo para eventos de La Nacion+ usando vMix (switcher/streaming).",
            "Manejé producción técnica para summits y conferencias corporativas.",
          ],
        },
        {
          company: "Freelance",
          role: "Servicios Creativos y Dev",
          date: "En curso",
          description: "Freelance.",
          bullets: [
            "Edición de video y motion graphics (Premiere, After Effects, Photoshop).",
            "Diseño de marca para eventos: flyers, invitaciones, y materiales promocionales.",
            "Desarrollo web y automatización de workflows para pequeños negocios.",
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
          status: "En curso - 3er año",
        },
        {
          school: "ORT Belgrano",
          degree:
            "Bachiller con orientación en producción de medios audiovisuales",
          status: "2017 - 2021",
        },
      ],
    },
    stack: {
      title: "Conocimientos",
      items: ["React", "NextJS", "Astro", "SQL", "Python", "Java"],
    },
    interests: {
      title: "Intereses generales",
      items: [
        "Surf",
        "Futbol",
        "Programación",
        "Ejercicio fisico",
        "Snowboard",
        "AI",
        "Speed Cubing",
        "Product Design",
      ],
    },
    footer: {
      contact: "Contacto",
    },
  },
};
