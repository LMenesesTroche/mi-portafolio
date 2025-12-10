"use client";
import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";

// This file is a full single-file Next/React + TypeScript page component you can drop into
// `app/page.tsx` (Next 13+) or `pages/index.tsx` (rename to .tsx) and it will work with
// Tailwind CSS and Framer Motion installed.

// How to use:
// 1. Ensure Tailwind CSS and Framer Motion are installed and configured in your Next project.
//    npm i framer-motion
// 2. Place this file at `app/page.tsx` or `pages/index.tsx`.
// 3. Replace placeholder project links/descriptions with your real ones.
// 4. Optionally install react-icons for icons (or replace with your preferred icons).

type Project = {
  id: string;
  title: string;
  description: string;
  tags: string[];
  link?: string;
};

const projects: Project[] = [
  {
    id: "1",
    title: "Hiper UI — Design System (Next + Tailwind)",
    description:
      "Sistema de diseño escalable con tokens, componentes accesibles y documentación interactiva.",
    tags: ["Next.js", "TypeScript", "Tailwind", "Storybook"],
    link: "#",
  },
  {
    id: "2",
    title: "Dash Analytics — Dashboard en tiempo real",
    description:
      "Dashboard con WebSockets, visualizaciones y rendimiento optimizado para millones de points.",
    tags: ["React", "Redux", "D3", "Next.js"],
    link: "#",
  },
  {
    id: "3",
    title: "Storefront — E-commerce PWA",
    description:
      "PWA rápida, carrito optimizado, SSR para SEO y A/B testing con experimentos en Edge.",
    tags: ["Next.js", "Zustand", "Vercel"],
    link: "#",
  },
];

export default function Home() {
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
            Proyectos
          </a>
          <a href="#skills" className="hover:text-white transition">
            Habilidades
          </a>
          <a href="#contact" className="hover:text-white transition">
            Contacto
          </a>
          <a
            href="/Lucas_Meneses_CV.pdf"
            className="px-4 py-2 rounded-md bg-gradient-to-r from-indigo-600 to-pink-600 shadow-md text-white text-sm"
          >
            Descargar CV
          </a>
        </nav>

        <MobileMenu />
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
              Hola, soy
            </p>
            <h2 className="relative z-20 text-4xl md:text-5xl font-extrabold leading-tight mt-2 bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-300 ">
              Lucas Meneses
            </h2>
            <p className="mt-4 text-slate-300 leading-relaxed">
              Frontend engineer con 5 años construyendo interfaces rápidas,
              accesibles y escalables con Next.js, TypeScript y Tailwind. Me
              encanta convertir ideas complejas en experiencias simples y
              memorables.
            </p>

            <div className="mt-6 flex gap-4">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-indigo-600 to-pink-600 shadow-lg text-white font-medium"
              >
                Ver Proyectos
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg ring-1 ring-white/10 text-sm text-slate-200 hover:bg-white/5 z-10"
              >
                Contactar
              </a>
            </div>

            <div className="mt-8 grid grid-cols-3 gap-3 max-w-s z-10">
              <Metric label="Experiencia" value="1+ años" />
              <Metric label="Stack" value="Next + TS" />
              <Metric label="Disponibilidad" value="Inmediata" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="flex justify-center md:justify-end z-10"
          >
            <div className="w-80 h-80 rounded-2xl p-1 bg-gradient-to-br from-indigo-500 to-pink-500 shadow-2xl">
              <div className="h-full rounded-xl bg-gradient-to-b from-slate-800 to-neutral-900 p-6 flex flex-col justify-between">
                <div>
                  <p className="text-slate-300 text-sm">Último proyecto</p>
                  <h3 className="text-white font-semibold mt-2">
                    Storefront PWA
                  </h3>
                  <p className="text-slate-400 mt-3 text-sm">
                    SSR, caching inteligente y rendimiento superior.
                  </p>
                </div>

                <div className="mt-6 flex gap-2 items-center">
                  <div className="h-10 w-10 rounded-md bg-white/5 flex items-center justify-center">
                    🔧
                  </div>
                  <div className="text-xs text-slate-400">
                    Next.js · TypeScript · Tailwind · Vercel
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        <section id="skills" className="mt-20">
          <h3 className="text-2xl font-semibold">Habilidades</h3>
          <p className="text-slate-400 mt-2">
            Tech stack y herramientas donde tengo experiencia comprobada.
          </p>

          <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "Next.js",
              "TypeScript",
              "React",
              "Tailwind CSS",
              "Redux",
              "Zustand",
              "Framer Motion",
              "Testing (Jest, RTL)",
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
                <div className="text-xs text-slate-400 mt-2">
                  Experiencia práctica, producción y optimización.
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        <section id="projects" className="mt-14 z-10">
          <h3 className="text-2xl font-semibold">Proyectos destacados</h3>
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
              <h3 className="text-2xl font-semibold">¿Hablamos?</h3>
              <p className="text-slate-400 mt-2">
                Buscas un front-end que entregue rendimiento y estética — soy tu
                persona.
              </p>
            </div>

            <form
              action="mailto:lucas@example.com"
              className="w-full md:w-auto"
            >
              <div className="flex gap-3">
                <input
                  aria-label="Tu email"
                  placeholder="tu@email.com"
                  className="px-4 py-3 rounded-lg bg-black/20 ring-1 ring-white/5 text-sm"
                />
                <button
                  type="submit"
                  className="px-4 py-3 rounded-lg bg-indigo-600 text-white font-medium"
                >
                  Enviar
                </button>
              </div>
            </form>
          </div>
        </section>

        <footer className="mt-12 text-center text-slate-500 text-sm">
          © {new Date().getFullYear()} Lucas Meneses — Frontend Engineer
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

function MobileMenu() {
  return (
    <div className="md:hidden">
      <details className="text-slate-300">
        <summary className="cursor-pointer">Menu</summary>
        <div className="mt-2 flex flex-col gap-2">
          <a href="#projects">Proyectos</a>
          <a href="#skills">Habilidades</a>
          <a href="#contact">Contacto</a>
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
           
           // CLASES MODIFICADAS:
           // 1. Cambiamos el color del anillo a índigo fuerte (morado).
           hover:ring-indigo-500 
           // 2. Añadimos una sombra 2XL y le damos el color índigo con opacidad para el 'glow'.
           hover:shadow-2xl hover:shadow-indigo-500/30 
           
           transition-all duration-300 z-100"
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <div className="flex items-start justify-between gap-4">
        {/* ... (Contenido del proyecto) ... */}
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

// CursorTrail: a subtle canvas-based mouse trail that leaves a soft glow and dissipates.
function CursorTrail() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = document.createElement("canvas");
    canvasRef.current = canvas;
    canvas.style.position = "fixed";
    canvas.style.top = "0";
    canvas.style.left = "0";
    canvas.style.pointerEvents = "none";
    canvas.style.zIndex = "0";
    document.body.appendChild(canvas);

    const ctx = canvas.getContext("2d")!;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const particles: {
      x: number;
      y: number;
      life: number;
      vx: number;
      vy: number;
      size: number;
    }[] = [];

    function resize() {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    }

    window.addEventListener("resize", resize);

    function spawn(x: number, y: number) {
      for (let i = 0; i < 6; i++) {
        particles.push({
          x,
          y,
          life: 60 + Math.random() * 40,
          vx: (Math.random() - 0.5) * 1.2,
          vy: (Math.random() - 0.5) * 1.2,
          size: 6 + Math.random() * 6,
        });
      }
    }

    function onMove(e: MouseEvent) {
      spawn(e.clientX, e.clientY);
    }

    window.addEventListener("pointermove", onMove);

    let raf = 0;
    function frame() {
      raf = requestAnimationFrame(frame);
      ctx.clearRect(0, 0, width, height);

      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;
        p.vx *= 0.98;
        p.vy *= 0.98;
        p.life -= 1;
        p.size *= 0.995;

        const alpha = Math.max(0, p.life / 100);
        const grad = ctx.createRadialGradient(
          p.x,
          p.y,
          0,
          p.x,
          p.y,
          p.size * 3
        );
        grad.addColorStop(0, `rgba(99,102,241,${alpha * 0.9})`); // indigo
        grad.addColorStop(0.6, `rgba(236,72,153,${alpha * 0.45})`); // pink
        grad.addColorStop(1, `rgba(0,0,0,0)`);

        ctx.fillStyle = grad as unknown as string;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();

        if (p.life <= 0 || p.size < 0.5) particles.splice(i, 1);
      }
    }

    frame();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", onMove);
      if (canvas.parentNode) canvas.parentNode.removeChild(canvas);
    };
  }, []);

  return null;
}
