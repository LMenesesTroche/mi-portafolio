import Link from "next/link";
import {
  FaLinkedinIn,
  FaInstagram,
  FaFacebookF,
  FaXTwitter,
} from "react-icons/fa6";

import "../public/yo.jpeg";
import Image from "next/image";

import {
  Globe,
  User,
  Boxes,
  CalendarDays,
  Grid2x2,
  BadgeCheck,
} from "lucide-react";

const navLinks = ["Home", "About", "Projects", "Services", "Contact"];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#FBFDFF] text-zinc-900">
      <header className="border-b border-zinc-200 bg-[#EFF1F3]">
        <div className="mx-auto flex h-28 max-w-7xl items-center justify-between px-8">
          <nav>
            <ul className="flex items-center gap-8">
              {navLinks.map((item, index) => (
                <li key={item}>
                  <Link
                    href="#"
                    className={`text-lg transition-colors ${
                      index === 0
                        ? "font-semibold text-[#0E79C0]"
                        : "text-zinc-500 hover:text-zinc-900"
                    }`}
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div
            className="font-black tracking-tight"
            style={{
              fontFamily: "var(--font-playfair)",
            }}
          >
            <span className="text-5xl lowercase">L</span>
            <span className="text-4xl italic">u</span>
            <span className="text-4xl">c</span>
            <span className="text-4xl">a</span>
            <span className="text-4xl">s</span>
          </div>

          <div className="flex items-center gap-7">
            <Link href="#">
              <FaLinkedinIn size={24} className="transition hover:scale-110" />
            </Link>

            <Link href="#">
              <FaXTwitter size={24} className="transition hover:scale-110" />
            </Link>

            <Link href="#">
              <FaInstagram size={24} className="transition hover:scale-110" />
            </Link>

            <Link href="#">
              <FaFacebookF size={24} className="transition hover:scale-110" />
            </Link>

            <Link href="#">
              <svg
                viewBox="0 0 24 24"
                className="h-6 w-6 fill-current transition hover:scale-110"
              >
                <path d="M18.901 1.153h3.68l-8.04 9.188L24 22.847h-7.406l-5.8-7.584-6.637 7.584H.474l8.6-9.828L0 1.153h7.594l5.243 6.932L18.901 1.153z" />
              </svg>
            </Link>
          </div>
        </div>
      </header>

      <section className="mx-auto max-w-7xl px-8 pt-24">
        <div className="text-center">
          <h1
            className="text-6xl font-medium leading-tight lg:text-7xl"
            style={{
              fontFamily: "var(--font-playfair)",
            }}
          >
            Hey, I'm <span className="text-[#0E79C0]">Lucas Dev.</span>
          </h1>

          <p
            className="mx-auto mt-8 max-w-4xl text-4xl leading-snug text-zinc-900"
            style={{
              fontFamily: "var(--font-playfair)",
            }}
          >
            Building modern experiences with
            <br />
            Next.js, TypeScript & Tailwind CSS.
          </p>
        </div>

        <div className="mt-32 grid grid-cols-1 gap-16 lg:grid-cols-[280px_1fr_280px]">
          <aside className="flex flex-col gap-14">
            <div>
              <h3
                className="mb-5 text-4xl"
                style={{
                  fontFamily: "var(--font-playfair)",
                }}
              >
                Biography
              </h3>

              <p className="leading-8 text-zinc-500">
                Frontend developer specialized in building scalable applications
                with Next.js, TypeScript, Zustand and Tailwind CSS. Focused on
                clean UI, performance and exceptional user experiences.
              </p>
            </div>

            <div>
              <h3
                className="mb-5 text-4xl"
                style={{
                  fontFamily: "var(--font-playfair)",
                }}
              >
                My Services
              </h3>

              <ul className="space-y-3 text-zinc-600">
                <li>• Frontend Development</li>
                <li>• UI Implementation</li>
                <li>• Responsive Design</li>
                <li>• Web Performance</li>
              </ul>
            </div>

            <div>
              <h3
                className="mb-5 text-4xl"
                style={{
                  fontFamily: "var(--font-playfair)",
                }}
              >
                Location
              </h3>

              <p className="text-zinc-500">
                Spain
                <br />
                Remote Worldwide
              </p>
            </div>
          </aside>

          <div className="flex justify-center">
            {/* <div className="flex h-[620px] w-[420px] items-center justify-center overflow-hidden rounded-[220px] bg-gradient-to-b from-zinc-200 to-zinc-300 shadow-lg">
              <User size={220} strokeWidth={1.2} className="text-zinc-500" />
            </div> */}
            <div className="relative h-[620px] w-[420px] overflow-hidden rounded-[220px] shadow-lg">
              <Image
                src="/yo.jpeg"
                alt="Lucas"
                fill
                priority
                className="object-cover"
              />
            </div>
          </div>

          <aside className="flex flex-col justify-center gap-20">
            <div className="text-center">
              <div className="flex items-center justify-center gap-3">
                <span
                  className="text-6xl"
                  style={{
                    fontFamily: "var(--font-playfair)",
                  }}
                >
                  16+
                </span>

                <Boxes size={30} />
              </div>

              <p className="mt-4 text-zinc-500">Completed Projects</p>
            </div>

            <div className="text-center">
              <div className="flex items-center justify-center gap-3">
                <span
                  className="text-6xl"
                  style={{
                    fontFamily: "var(--font-playfair)",
                  }}
                >
                  3+
                </span>

                <CalendarDays size={30} />
              </div>

              <p className="mt-4 text-zinc-500">Years Experience</p>
            </div>

            <div className="text-center">
              <div className="flex items-center justify-center gap-3">
                <span
                  className="text-6xl"
                  style={{
                    fontFamily: "var(--font-playfair)",
                  }}
                >
                  25+
                </span>

                <Grid2x2 size={30} />
              </div>

              <p className="mt-4 text-zinc-500">Unique Projects</p>
            </div>

            <div className="text-center">
              <div className="flex items-center justify-center gap-3">
                <span
                  className="text-6xl"
                  style={{
                    fontFamily: "var(--font-playfair)",
                  }}
                >
                  8
                </span>

                <BadgeCheck size={30} />
              </div>

              <p className="mt-4 text-zinc-500">Certifications</p>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
