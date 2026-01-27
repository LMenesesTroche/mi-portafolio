"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

type Project = {
  id: string;
  title: string;
  description: string;
  tags: string[];
  link?: string;
  image: string;
};

// Traducciones para ambos idiomas
const translations = {
  es: {
    header: {
      projects: "Proyectos",
      skills: "Habilidades",
      contact: "Contacto",
      downloadCV: "Descargar CV",
      language: "EN",
    },
    intro: {
      hi: "Hola, soy",
      name: "Lucas Meneses",
      role: "Frontend engineer con 1+ años construyendo interfaces rápidas, accesibles y escalables con Next.js, TypeScript y Tailwind. Me encanta convertir ideas complejas en experiencias simples y memorables.",
      viewProjects: "Ver Proyectos",
      contact: "Contactar",
      metrics: {
        experience: "Experiencia",
        experienceValue: "1+ años",
        stack: "Stack",
        stackValue: "Next + TS",
        availability: "Disponibilidad",
        availabilityValue: "Inmediata",
      },
      lastProject: {
        title: "Último proyecto",
        projectName: "Gastro POS",
        description:
          "Desarrollé la parte frontend para web, escritorio y mobile, con énfasis en Electron y web usando Next.js, Tailwind y Zustand.",
        techStack: "Next.js · TypeScript · Tailwind · Zustand · Electron",
      },
    },
    skills: {
      title: "Habilidades",
      description:
        "Tech stack y herramientas donde tengo experiencia comprobada.",
    },
    extra: {
      uno: "Experiencia práctica, producción y optimización.",
    },
    projects: {
      title: "Proyectos destacados",
    },
    contact: {
      title: "¿Hablamos?",
      description:
        "Buscas un front-end que entregue rendimiento y estética — soy tu persona.",
      placeholderEmail: "tu@email.com",
      send: "Enviar",
    },
    footer: "© {year} Lucas Meneses — Frontend Engineer",
  },
  en: {
    header: {
      projects: "Projects",
      skills: "Skills",
      contact: "Contact",
      downloadCV: "Download CV",
      language: "ES",
    },
    intro: {
      hi: "Hi, I'm",
      name: "Lucas Meneses",
      role: "Frontend engineer with 1+ years building fast, accessible, scalable interfaces using Next.js, TypeScript, and Tailwind. I love turning complex ideas into simple, memorable experiences.",
      viewProjects: "View Projects",
      contact: "Contact",
      metrics: {
        experience: "Experience",
        experienceValue: "1+ years",
        stack: "Stack",
        stackValue: "Next + TS",
        availability: "Availability",
        availabilityValue: "Immediate",
      },
      lastProject: {
        title: "Last Project",
        projectName: "Gastro POS",
        description:
          "Developed frontend for web, desktop, and mobile, focusing mainly on Electron and web using Next.js, Tailwind, and Zustand.",
        techStack: "Next.js · TypeScript · Tailwind · Zustand · Electron",
      },
    },
    extra: {
      uno: "Practical experience, production and optimization.",
    },
    skills: {
      title: "Skills",
      description: "Tech stack and tools with proven experience.",
    },
    projects: {
      title: "Featured Projects",
    },
    contact: {
      title: "Let's talk?",
      description:
        "Looking for a front-end that delivers performance and aesthetics — I'm your person.",
      placeholderEmail: "your@email.com",
      send: "Send",
    },
    footer: "© {year} Lucas Meneses — Frontend Engineer",
  },
};

export default function Home() {
  // Estado para idioma, por defecto español
  const [language, setLanguage] = useState<"es" | "en">("es");

  // Extraer textos actuales según idioma
  const t = translations[language];

  // Función para alternar idioma
  function toggleLanguage() {
    setLanguage(language === "es" ? "en" : "es");
  }

  // Proyectos estáticos con traducción para título y descripción
  const projects: Project[] = [
    {
      id: "1",
      title:
        language === "es"
          ? "Gastro POS — Sistema de punto de venta"
          : "Gastro POS — Point of Sale System",
      description:
        language === "es"
          ? "Frontend para web, escritorio y móvil, enfocado en Electron y web con Next.js, Tailwind y Zustand."
          : "Frontend for web, desktop, and mobile, focusing on Electron and web using Next.js, Tailwind, and Zustand.",
      tags: ["Next.js", "TypeScript", "Tailwind", "Zustand", "Electron"],
      link: "https://www.gastro-pos.com",
      image:
        "https://res.cloudinary.com/decbwosgj/image/upload/v1768234296/Screenshot_from_2026-01-12_12-10-19_nyjveb.png", // Puedes cambiar esta imagen por otra representativa
    },
    {
      id: "2",
      title:
        language === "es"
          ? "Quality Bill — Facturador Electrónico"
          : "Quality Bill — Electronic Invoicing",
      description:
        language === "es"
          ? "Formularios complejos y dinámicos, PDFs personalizados con microservicios para gestión y previsualización."
          : "Complex dynamic forms, custom PDFs with microservices for management and preview.",
      tags: ["React", "TypeScript", "Microservices", "PDF Generation"],
      link: "https://facturando.qualitysoftservices.com/",
      image:
        "https://res.cloudinary.com/decbwosgj/image/upload/v1737644960/Captura_de_pantalla_de_2025-01-23_11-07-20_ipnyej.png", // Usa un logo o screenshot representativo
    },
    {
      id: "3",
      title:
        language === "es"
          ? "Gestión de Personal — Nóminas y Reclutamiento"
          : "Personnel Management — Payroll and Recruitment",
      description:
        language === "es"
          ? "App para gestión de personal con nóminas, búsqueda y administración usando React Native."
          : "App for personnel management with payroll, search, and administration using React Native.",
      tags: ["React Native", "TypeScript", "Mobile"],
      link: "https://qualitysoftservices.com/",
      image:
        "https://res.cloudinary.com/decbwosgj/image/upload/v1768234578/Screenshot_from_2026-01-12_12-16-06_x3yf8l.png", // Cambia por imagen representativa si tienes
    },
  ];

  function ProjectCard({ project }: { project: Project }) {
    return (
      <motion.a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className="block rounded-2xl bg-gradient-to-b from-slate-800 to-neutral-900 shadow-lg 
           ring-1 ring-white/5 
           hover:scale-[1.02] 
           hover:ring-indigo-500 
           hover:shadow-2xl hover:shadow-indigo-500/30 
           transition-all duration-300 z-100 overflow-hidden"
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <div className="h-40 w-full relative">
          <img
            src={project.image}
            alt={project.title}
            className="object-cover w-full h-full rounded-t-2xl"
            loading="lazy"
          />
        </div>
        <div className="p-6 flex flex-col justify-between gap-4">
          <div>
            <h4 className="text-white font-semibold">{project.title}</h4>
            <p className="text-slate-400 text-sm mt-2">{project.description}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.tags.map((t) => (
                <span
                  key={t}
                  className="text-xs px-2 py-1 rounded-md bg-white/3"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
          <div className="text-slate-400 text-xs self-end">Ver →</div>
        </div>
      </motion.a>
    );
  }

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-gray-900 via-neutral-900 to-black text-slate-100 antialiased">
      {/* <CursorTrail /> */}

      <header className="max-w-6xl mx-auto px-6 py-6 flex items-center justify-between z-10">
        <div className="flex items-center gap-4">
          <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-indigo-500 to-pink-500 flex items-center justify-center shadow-2xl ring-1 ring-white/10">
            <span className="font-bold text-lg z-20">LM</span>
          </div>
          <div className="z-20">
            <h1 className="text-lg font-semibold">Lucas Meneses</h1>
            <p className="text-sm text-slate-400">
              Frontend Engineer — Next.js / TypeScript / Tailwind
            </p>
          </div>
        </div>

        <nav className="hidden md:flex gap-6 items-center text-sm text-slate-300 z-20">
          <a href="#projects" className="hover:text-white transition">
            {t.header.projects}
          </a>
          <a href="#skills" className="hover:text-white transition">
            {t.header.skills}
          </a>
          <a href="#contact" className="hover:text-white transition">
            {t.header.contact}
          </a>
          <a
            href="/Lucas_Meneses_CV.pdf"
            className="px-4 py-2 rounded-md bg-gradient-to-r from-indigo-600 to-pink-600 shadow-md text-white text-sm"
          >
            {t.header.downloadCV}
          </a>

          {/* Botón para cambiar idioma */}
          <button
            onClick={toggleLanguage}
            className="ml-4 px-3 py-1 rounded-md border border-slate-500 text-sm text-slate-300 hover:bg-slate-700 transition"
            aria-label="Cambiar idioma"
          >
            {t.header.language}
          </button>
        </nav>

        <MobileMenu language={language} />
      </header>

      <main className="max-w-6xl mx-auto px-6 py-16 z-10">
        <section className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center z-10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="z-10"
          >
            <p className="text-sm uppercase tracking-widest text-indigo-400">
              {t.intro.hi}
            </p>
            <h2 className="relative z-20 text-4xl md:text-5xl font-extrabold leading-tight mt-2 bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-300 ">
              {t.intro.name}
            </h2>
            <p className="mt-4 text-slate-300 leading-relaxed">
              {t.intro.role}
            </p>

            <div className="mt-6 flex gap-4">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-indigo-600 to-pink-600 shadow-lg text-white font-medium"
              >
                {t.intro.viewProjects}
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg ring-1 ring-white/10 text-sm text-slate-200 hover:bg-white/5 z-10"
              >
                {t.intro.contact}
              </a>
            </div>

            <div className="mt-8 grid grid-cols-3 gap-3 max-w-s z-10">
              <Metric
                label={t.intro.metrics.experience}
                value={t.intro.metrics.experienceValue}
              />
              <Metric
                label={t.intro.metrics.stack}
                value={t.intro.metrics.stackValue}
              />
              <Metric
                label={t.intro.metrics.availability}
                value={t.intro.metrics.availabilityValue}
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="flex justify-center md:justify-end z-10"
          >
            <div className="w-80 h-80 rounded-2xl p-1 bg-gradient-to-br from-indigo-500 to-pink-600 shadow-2xl">
              <div className="h-full rounded-xl bg-gradient-to-b from-slate-800 to-neutral-900 p-6 flex flex-col justify-between">
                <div>
                  <p className="text-slate-300 text-sm">
                    {t.intro.lastProject.title}
                  </p>
                  <h3 className="text-white font-semibold mt-2">
                    {t.intro.lastProject.projectName}
                  </h3>
                  <p className="text-slate-400 mt-3 text-sm">
                    {t.intro.lastProject.description}
                  </p>
                </div>

                <div className="mt-6 flex gap-2 items-center">
                  <div className="h-10 w-10 rounded-md bg-white/5 flex items-center justify-center">
                    🔧
                  </div>
                  <div className="text-xs text-slate-400">
                    {t.intro.lastProject.techStack}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        <section id="skills" className="mt-20">
          <h3 className="text-2xl font-semibold">{t.skills.title}</h3>
          <p className="text-slate-400 mt-2">{t.skills.description}</p>

          <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "Next.js",
              "TypeScript",
              "React",
              "Tailwind CSS",
              "Redux",
              "Zustand",
              "Framer Motion",
              "Electron",
            ].map((s, i) => (
              <motion.div
                key={s}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.0001 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="p-4 bg-white/3 rounded-lg backdrop-blur-sm ring-1 ring-white/5 cursor-pointer"
              >
                <div className="text-sm font-medium">{s}</div>
                <div className="text-xs text-slate-400 mt-2">{t.extra.uno}</div>
              </motion.div>
            ))}
          </div>
        </section>

        <section id="projects" className="mt-14 z-10">
          <h3 className="text-2xl font-semibold">{t.projects.title}</h3>
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((p) => (
              <ProjectCard key={p.id} project={p} />
            ))}
          </div>
        </section>

        <section
          id="contact"
          className="mt-16 bg-gradient-to-tr from-white/2 to-white/3 ring-1 ring-white/5 rounded-2xl p-8 z-1000"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl font-semibold">{t.contact.title}</h3>
              <p className="text-slate-400 mt-2">{t.contact.description}</p>
            </div>

            <form
              action="mailto:lucas@example.com"
              className="w-full md:w-auto"
            >
              <div className="flex gap-3">
                <input
                  aria-label={t.contact.placeholderEmail}
                  placeholder={t.contact.placeholderEmail}
                  className="px-4 py-3 rounded-lg bg-black/20 ring-1 ring-white/5 text-sm"
                />
                <button
                  type="submit"
                  className="px-4 py-3 rounded-lg bg-indigo-600 text-white font-medium"
                >
                  {t.contact.send}
                </button>
              </div>
            </form>
          </div>
        </section>

        <footer className="mt-12 text-center text-slate-500 text-sm">
          {t.footer.replace("{year}", String(new Date().getFullYear()))}
        </footer>
      </main>
    </div>
  );
}

function Metric({ label, value }: { label: string; value: string }) {
  return (
    <div className="p-3 bg-white/3 rounded-lg">
      <div className="text-xs text-slate-400">{label}</div>
      <div className="text-lg font-semibold">{value}</div>
    </div>
  );
}

function MobileMenu({ language }: { language: "es" | "en" }) {
  const t = translations[language].header;
  return (
    <div className="md:hidden">
      <details className="text-slate-300">
        <summary className="cursor-pointer">Menu</summary>
        <div className="mt-2 flex flex-col gap-2">
          <a href="#projects">{t.projects}</a>
          <a href="#skills">{t.skills}</a>
          <a href="#contact">{t.contact}</a>
        </div>
      </details>
    </div>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.a
      href={project.link}
      className="block p-6 rounded-2xl bg-gradient-to-b from-slate-800 to-neutral-900 shadow-lg 
           ring-1 ring-white/5 
           hover:scale-[1.02] 
           hover:ring-indigo-500 
           hover:shadow-2xl hover:shadow-indigo-500/30 
           transition-all duration-300 z-100"
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <h4 className="text-white font-semibold">{project.title}</h4>
          <p className="text-slate-400 text-sm mt-2">{project.description}</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {project.tags.map((t) => (
              <span key={t} className="text-xs px-2 py-1 rounded-md bg-white/3">
                {t}
              </span>
            ))}
          </div>
        </div>
        <div className="text-slate-400 text-xs">Ver →</div>
      </div>
    </motion.a>
  );
}
